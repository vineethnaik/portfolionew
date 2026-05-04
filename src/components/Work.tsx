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
          Drag or swipe sideways to explore projects — each opens a full case study.
        </p>
      </div>

      <div
        className="work-scroll flex gap-5 sm:gap-6 md:gap-8 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-pl-6 scroll-pr-6 px-6 sm:px-8 pb-2 sm:pb-4"
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
            className="snap-start shrink-0 w-[min(100vw-3rem,22rem)] sm:w-[26rem] lg:w-[28rem]"
            role="listitem"
          >
            <Link
              to={`/project/${project.slug}`}
              className="block h-full rounded-2xl focus-visible:outline-none"
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
                  <div className="flex flex-wrap gap-2 mb-6">
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
                <span
                  className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all text-sm"
                  style={{ color: 'var(--theme-text)' }}
                >
                  View Case Study
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
