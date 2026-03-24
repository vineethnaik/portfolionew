import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-8 backdrop-blur-[2px]" style={{ backgroundColor: 'var(--theme-section-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-wider mb-16"
          style={{ color: 'var(--theme-text-muted)' }}
        >
          Selected Work
        </motion.h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/project/${project.slug}`}>
                <div
                  className="group p-6 sm:p-8 lg:p-10 rounded-2xl backdrop-blur-sm transition-all duration-300 card-hover active:scale-[0.98]"
                  style={{
                    backgroundColor: 'var(--theme-card-bg)',
                    border: '1px solid var(--theme-border)',
                  }}
                >
                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 transition-colors"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-base sm:text-lg mb-4 sm:mb-6 max-w-3xl leading-relaxed"
                    style={{ color: 'var(--theme-text-secondary)' }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-full"
                        style={{
                          color: 'var(--theme-text-muted)',
                          border: '1px solid var(--theme-border)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all text-sm sm:text-base"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
