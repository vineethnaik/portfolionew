import { motion } from 'framer-motion'

export default function Footer() {
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
          © 2026 Eslavath Vineeth Naik
        </motion.p>
        <div className="flex gap-8">
          <a
            href="https://github.com/vineethnaik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:opacity-100 opacity-80"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/eslavath-vineeth-naik-a8ab16285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:opacity-100 opacity-80"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
