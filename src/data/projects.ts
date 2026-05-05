export interface Project {
  id: string
  title: string
  description: string
  problemSolved: string
  keyFeatures: string[]
  impact: string
  tech: string[]
  githubUrl: string
  liveUrl: string
  slug: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Based Healthcare Revenue Cycle Prediction System',
    description:
      'Machine learning system that predicts insurance claim denials, payment delays, and appointment no-shows using Random Forest models.',
    problemSolved:
      'Healthcare teams were losing revenue to delayed claim reviews and reactive handling of denied claims.',
    keyFeatures: [
      'Real-time risk scoring API for denials, payment delays, and no-shows',
      'Model training pipeline with reproducible evaluation metrics',
      'Dashboard workflows for faster triage and intervention',
      'Integrated backend services for production-ready deployment',
    ],
    impact:
      'Enabled proactive claim handling, reduced manual validation effort, and improved financial decision-making speed for operations teams.',
    tech: ['Python', 'Scikit-learn', 'React', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/vineethnaik',
    liveUrl: '#',
    slug: 'healthcare-revenue-cycle-prediction',
  },
  {
    id: '2',
    title: 'LLM Benchmarking for Automated Cloud Deployment',
    description:
      'Evaluation framework to analyze LLM-generated Infrastructure-as-Code deployments for cloud automation reliability.',
    problemSolved:
      'Teams lacked a reliable way to evaluate whether LLM-generated cloud configurations were production-safe and cost-efficient.',
    keyFeatures: [
      'Automated benchmark suite for Docker and Kubernetes deployment scenarios',
      'Standardized scoring across accuracy, runtime, and cloud cost',
      'Failure-mode analytics for prompt and model improvement',
      'Extensible framework for comparing multiple LLM providers',
    ],
    impact:
      'Improved deployment success consistency, reduced trial-and-error in DevOps workflows, and provided objective model-selection criteria.',
    tech: ['Docker', 'Kubernetes', 'Python', 'Cloud Infrastructure'],
    githubUrl: 'https://github.com/vineethnaik',
    liveUrl: '#',
    slug: 'llm-benchmarking-cloud-deployment',
  },
]
