import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const caseStudyContent: Record<
  string,
  {
    overview: string
    problem: string
    process: string
    solution: string
    results: { label: string; value: string }[]
  }
> = {
  'healthcare-revenue-cycle-prediction': {
    overview:
      'A machine learning system designed to predict insurance claim denials, payment delays, and appointment no-shows in healthcare revenue cycle management. Built to reduce operational overhead and improve financial forecasting for healthcare providers.',
    problem:
      'Healthcare organizations spend 5–10 minutes manually validating each claim. Denied claims and no-shows create revenue leakage and operational inefficiency. Traditional rule-based systems lack the accuracy needed for proactive intervention.',
    process:
      'Analyzed historical claim data to identify denial patterns. Built feature pipelines for claim metadata, patient history, and provider information. Experimented with Random Forest, XGBoost, and neural networks. Validated using ROC-AUC and F1 metrics. Integrated with existing Spring Boot backend.',
    solution:
      'Deployed a modular ML pipeline: Python-based training with Scikit-learn, REST APIs for real-time inference, React frontend for dashboards, MySQL for data persistence. Architecture supports batch retraining and A/B testing.',
    results: [
      { label: 'Model accuracy', value: '85%' },
      { label: 'ROC-AUC', value: '0.88' },
      { label: 'Validation time reduction', value: '99%' },
      { label: 'Performance improvement', value: '20%' },
    ],
  },
  'llm-benchmarking-cloud-deployment': {
    overview:
      'An evaluation framework for assessing the reliability and efficiency of LLM-generated Infrastructure-as-Code for Docker and Kubernetes. Measures deployment accuracy, execution time, and cost across multiple cloud providers.',
    problem:
      'LLMs generate IaC that often fails in production. Teams lack objective metrics to compare different models or prompting strategies. Configuration errors lead to security risks and wasted cloud spend.',
    process:
      'Designed benchmark datasets covering common cloud scenarios. Built a pipeline to generate, execute, and validate Docker/Kubernetes configs. Collected metrics on success rate, runtime, and cost. Performed statistical analysis on failure modes and root causes.',
    solution:
      'Python-based benchmarking framework with Docker and Kubernetes orchestration. Automated deployment, rollback, and metric collection. Modular design allows adding new LLM providers and cloud platforms. Results visualized for model comparison.',
    results: [
      { label: 'Config success rate improvement', value: '18%' },
      { label: 'Failure analysis', value: 'Statistical root cause' },
      { label: 'Metrics tracked', value: 'Accuracy, time, cost' },
    ],
  },
}

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const content = slug ? caseStudyContent[slug] : null

  if (!project || !content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p style={{ color: 'var(--theme-text-secondary)' }}>Project not found</p>
        <Link to="/" style={{ color: 'var(--theme-text)' }} className="hover:opacity-80">← Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 mb-12 transition-colors hover:opacity-80"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            ← Back to Work
          </Link>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight" style={{ color: 'var(--theme-text)' }}>
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-16">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm rounded-full"
                style={{ color: 'var(--theme-text-muted)', border: '1px solid var(--theme-border)' }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--theme-text-muted)' }}>
                Overview
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--theme-text-secondary)' }}>
                {content.overview}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--theme-text-muted)' }}>
                Problem
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--theme-text-secondary)' }}>
                {content.problem}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--theme-text-muted)' }}>
                Process
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--theme-text-secondary)' }}>
                {content.process}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--theme-text-muted)' }}>
                Solution
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--theme-text-secondary)' }}>
                {content.solution}
              </p>
            </section>

            <section>
              <h2 className="text-text-muted text-sm font-medium uppercase tracking-wider mb-6">
                Results
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {content.results.map((r, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: 'var(--theme-bg-secondary)', border: '1px solid var(--theme-border)' }}
                  >
                    <p className="text-sm mb-1" style={{ color: 'var(--theme-text-muted)' }}>{r.label}</p>
                    <p className="text-2xl font-semibold" style={{ color: 'var(--theme-text)' }}>{r.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex justify-center pt-8">
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
                style={{ color: 'var(--theme-text)' }}
              >
                View all projects
                <span>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
