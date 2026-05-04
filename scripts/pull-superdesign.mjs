/**
 * Pull all Superdesign drafts into HTML files (automated export).
 *
 * Setup (any new project — copy this file + npm scripts):
 *   1. superdesign login
 *   2. SUPERDESIGN_PROJECT_ID in .env (see .env.example)
 *   3. npm run design:pull
 *
 * HTML → React is not automated here; use that output as the source of truth
 * when updating src/components (or drive a codegen/agent step yourself).
 */

import { readFileSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { execSync } from 'node:child_process'

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function loadDotEnv() {
  try {
    const text = readFileSync(join(process.cwd(), '.env'), 'utf8')
    for (const line of text.split('\n')) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
      if (!m || m[1].startsWith('#')) continue
      const v = m[2].replace(/^["']|["']$/g, '')
      if (process.env[m[1]] === undefined) process.env[m[1]] = v
    }
  } catch {
    /* no .env */
  }
}

loadDotEnv()

const projectId = process.env.SUPERDESIGN_PROJECT_ID
const outDir = process.env.SUPERDESIGN_EXPORT_DIR ?? 'design-exports'

function sh(cmd) {
  return execSync(cmd, {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true,
    env: process.env,
    cwd: process.cwd(),
  })
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 96) || 'draft'
}

/** Walk JSON and collect draft-like objects (id + title/name). */
function extractDrafts(root) {
  const seen = new Set()
  const out = []

  function walk(o) {
    if (!o || typeof o !== 'object') return
    if (Array.isArray(o)) {
      for (const x of o) walk(x)
      return
    }
    const id = o.draftId ?? o.draft_id ?? o.id
    const title = o.title ?? o.name ?? o.label
    const looksDraft =
      typeof id === 'string' &&
      UUID.test(id) &&
      (typeof title === 'string' ||
        o.type === 'draft' ||
        o.kind === 'draft' ||
        o.nodeType === 'draft')

    if (looksDraft && !seen.has(id)) {
      seen.add(id)
      out.push({
        id,
        title: typeof title === 'string' ? title : id,
      })
    }
    for (const v of Object.values(o)) {
      if (v && typeof v === 'object') walk(v)
    }
  }

  walk(root)
  return out
}

if (!projectId) {
  console.error(
    'Missing SUPERDESIGN_PROJECT_ID. Add it to .env (see .env.example).',
  )
  process.exit(1)
}

const cli = 'npx --yes @superdesign/cli@latest'
let raw
try {
  raw = sh(
    `${cli} fetch-design-nodes --project-id "${projectId}" --json`,
  ).trim()
} catch (e) {
  console.error(e.stderr?.toString?.() ?? e.message)
  process.exit(1)
}

let parsed
try {
  parsed = JSON.parse(raw)
} catch {
  console.error('Expected JSON from fetch-design-nodes. First 800 chars:\n')
  console.error(raw.slice(0, 800))
  process.exit(1)
}

const drafts = extractDrafts(parsed)
if (!drafts.length) {
  console.error(
    'No draft IDs found in JSON. Inspect the response and adjust extractDrafts() in scripts/pull-superdesign.mjs',
  )
  console.error(raw.slice(0, 4000))
  process.exit(1)
}

await mkdir(outDir, { recursive: true })

for (const { id, title } of drafts) {
  const base = slugify(title)
  const file = join(outDir, `${base}-${id.slice(0, 8)}.html`)
  let html
  try {
    html = sh(`${cli} get-design --draft-id "${id}"`)
  } catch (e) {
    console.error(`Failed get-design for ${id}:`, e.stderr?.toString?.() ?? e.message)
    continue
  }
  await writeFile(file, html, 'utf8')
  console.log('Wrote', file)
}

console.log(`\nDone. ${drafts.length} file(s) in ${outDir}/`)
