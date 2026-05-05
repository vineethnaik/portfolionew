import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 px-6 sm:px-8 border-t transition-colors duration-500"
      style={{ borderColor: 'var(--theme-border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm"
          style={{ color: 'var(--theme-text-muted)' }}
        >
          © {year} Eslavath Vineeth Naik. All rights reserved.
        </motion.p>
        <div className="flex items-center gap-5 sm:gap-6">
          <a
            href="https://github.com/vineethnaik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 opacity-85"
            style={{ color: 'var(--theme-text-secondary)' }}
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.12.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.08-.73.08-.72.08-.72 1.2.08 1.84 1.2 1.84 1.2 1.06 1.82 2.79 1.29 3.47.99.11-.77.41-1.29.74-1.58-2.66-.3-5.47-1.3-5.47-5.91 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.57 11.57 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.82 5.6-5.5 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/eslavath-vineeth-naik-a8ab16285"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 opacity-85"
            style={{ color: 'var(--theme-text-secondary)' }}
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
