import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const cardBase =
  'work-card group relative flex h-full min-h-[280px] sm:min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm transition-transform duration-300 active:scale-[0.99]'

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 backdrop-blur-[2px]"
      style={{ backgroundColor: 'var(--theme-section-bg)' }}
      aria-labelledby="work-heading"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.h2
          id="work-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-wider mb-4"
          style={{ color: 'var(--theme-text-muted)' }}
        >
          Selected Work
        </motion.h2>
        <p
          className="mb-10 max-w-xl text-sm sm:text-base leading-relaxed"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          Explore selected projects focused on engineering quality, product outcomes, and measurable impact.
        </p>
      </div>

      <div
        className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(290px,1fr))] justify-center gap-5 px-6 sm:gap-6 sm:px-8 md:gap-8"
        role="list"
        aria-label="Project cards"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="w-full place-self-center"
            role="listitem"
          >
            <div
              className={`${cardBase} card-hover`}
              style={{
                backgroundColor: 'var(--theme-card-bg)',
                border: '1px solid var(--theme-border)',
              }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-80"
                aria-hidden
              />
              <div>
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 leading-snug pr-6 transition-colors"
                  style={{ color: 'var(--theme-text)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm sm:text-base mb-5 line-clamp-4 leading-relaxed"
                  style={{ color: 'var(--theme-text-secondary)' }}
                >
                  {project.description}
                </p>

                <ul className="mb-6 space-y-3 text-xs sm:text-sm">
                  <li style={{ color: 'var(--theme-text-secondary)' }}>
                    <span className="block mb-1 font-medium" style={{ color: 'var(--theme-text)' }}>
                      Challenge / Problem
                    </span>
                    {project.problemSolved}
                  </li>
                  <li style={{ color: 'var(--theme-text-secondary)' }}>
                    <span className="block mb-1 font-medium" style={{ color: 'var(--theme-text)' }}>
                      Solution & Tech
                    </span>
                    {project.keyFeatures[0]}
                  </li>
                  <li style={{ color: 'var(--theme-text-secondary)' }}>
                    <span className="block mb-1 font-medium" style={{ color: 'var(--theme-text)' }}>
                      Impact
                    </span>
                    {project.impact}
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full"
                      style={{
                        color: 'var(--theme-text-muted)',
                        border: '1px solid var(--theme-border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                  rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="theme-btn-primary inline-flex items-center justify-center px-4 py-2 text-sm rounded-xl font-medium transition-all duration-300"
                  aria-label={`View live demo for ${project.title}`}
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn-secondary inline-flex items-center justify-center px-4 py-2 text-sm rounded-xl border font-medium transition-all duration-300"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  GitHub
                </a>
                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-2 font-medium transition-all text-sm hover:opacity-80"
                  style={{ color: 'var(--theme-text)' }}
                  aria-label={`Open case study for ${project.title}`}
                >
                  View Case Study
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
