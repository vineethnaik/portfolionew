import { motion } from 'framer-motion'

const skills = {
  'Programming': ['Python', 'Java', 'SQL'],
  'Machine Learning': [
    'Random Forest',
    'Classification',
    'Regression',
    'Model Evaluation',
    'ROC-AUC',
    'F1 Score',
  ],
  'Data & Analytics': [
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'Data Preprocessing',
    'ETL Pipelines',
  ],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'REST APIs', 'Git'],
  'Databases': ['MySQL', 'MongoDB'],
  'Visualization': ['Matplotlib', 'Seaborn', 'Power BI'],
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6 sm:px-8 backdrop-blur-[2px] transition-colors duration-500"
      style={{ backgroundColor: 'var(--theme-section-bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl flex items-center justify-center overflow-hidden transition-colors duration-500"
              style={{
                backgroundColor: 'var(--theme-photo-bg)',
                border: '1px solid var(--theme-border)',
              }}
            >
              <span className="text-6xl font-light opacity-30" style={{ color: 'var(--theme-text)' }}>VN</span>
            </div>
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-semibold mb-8"
              style={{ color: 'var(--theme-text)' }}
            >
              About
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-relaxed"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              <p>
                I am a Computer Science undergraduate at KL University
                specializing in Machine Learning and Data Analytics.
              </p>
              <p>
                My interests lie in building AI-driven systems, scalable cloud
                applications, and data analytics solutions. I enjoy combining
                machine learning models with cloud infrastructure to build
                intelligent, production-ready applications.
              </p>
              <p>
                I am currently seeking opportunities in AI/ML engineering, data
                science, and cloud systems where I can apply machine learning to
                real-world challenges.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-medium mb-3 sm:mb-4 text-base sm:text-lg" style={{ color: 'var(--theme-text)' }}>{category}</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded-xl transition-colors duration-500"
                    style={{
                      color: 'var(--theme-text-secondary)',
                      backgroundColor: 'var(--theme-card-bg)',
                      border: '1px solid var(--theme-border)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 space-y-8 sm:space-y-12"
        >
          <h3 className="text-xl sm:text-2xl font-semibold" style={{ color: 'var(--theme-text)' }}>Education & Experience</h3>
          <div className="space-y-6 sm:space-y-8">
            <div
              className="border-l-2 pl-6 sm:pl-8"
              style={{ borderColor: 'var(--theme-border)' }}
            >
              <h4 className="text-lg sm:text-xl font-medium mb-2" style={{ color: 'var(--theme-text)' }}>
                B.Tech – Computer Science & Engineering
              </h4>
              <p className="mb-2 text-sm" style={{ color: 'var(--theme-text-secondary)' }}>KL University</p>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--theme-text-muted)' }}>2023 – Present</p>
              <p className="mt-2 text-xs sm:text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
                Relevant: Data Structures, DBMS, Machine Learning, AI, Cloud
                Computing
              </p>
            </div>
            <div
              className="border-l-2 pl-6 sm:pl-8"
              style={{ borderColor: 'var(--theme-border)' }}
            >
              <h4 className="text-lg sm:text-xl font-medium mb-2" style={{ color: 'var(--theme-text)' }}>Certifications</h4>
              <ul className="space-y-1 text-xs sm:text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
                <li>• AWS Certified Cloud Practitioner (2025)</li>
                <li>• Salesforce Certified AI Associate (2025)</li>
                <li>• MongoDB Certified Developer Associate</li>
              </ul>
            </div>
            <div
              className="border-l-2 pl-6 sm:pl-8"
              style={{ borderColor: 'var(--theme-border)' }}
            >
              <h4 className="text-lg sm:text-xl font-medium mb-2" style={{ color: 'var(--theme-text)' }}>
                Networking Virtual Internship – Juniper Networks
              </h4>
              <p className="text-xs sm:text-sm mb-2" style={{ color: 'var(--theme-text-muted)' }}>2024</p>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
                Routing concepts, network architecture, distributed
                infrastructure systems.
              </p>
            </div>
            <div
              className="border-l-2 pl-6 sm:pl-8"
              style={{ borderColor: 'var(--theme-border)' }}
            >
              <h4 className="text-lg sm:text-xl font-medium mb-2" style={{ color: 'var(--theme-text)' }}>Leadership</h4>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
                Led a cross-functional team in a Design Thinking & Innovation
                Competition, securing 1st place by building a data-backed
                solution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
