export interface Project {
  id: string
  title: string
  description: string
  highlights: string[]
  tech: string[]
  slug: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Based Healthcare Revenue Cycle Prediction System',
    description:
      'Machine learning system that predicts insurance claim denials, payment delays, and appointment no-shows using Random Forest models.',
    highlights: [
      'Trained ML models on healthcare claim data',
      'Achieved 85% prediction accuracy (ROC-AUC 0.88)',
      'Reduced claim validation time from 5–10 minutes to instant processing',
      'Deployed real-time REST APIs',
    ],
    tech: ['Python', 'Scikit-learn', 'React', 'Spring Boot', 'MySQL'],
    slug: 'healthcare-revenue-cycle-prediction',
  },
  {
    id: '2',
    title: 'LLM Benchmarking for Automated Cloud Deployment',
    description:
      'Evaluation framework to analyze LLM-generated Infrastructure-as-Code deployments for cloud automation reliability.',
    highlights: [
      'Built benchmarking pipeline for Docker + Kubernetes deployments',
      'Measured deployment accuracy, execution time, and cost efficiency',
      'Improved configuration success rate by 18%',
      'Conducted statistical failure analysis',
    ],
    tech: ['Docker', 'Kubernetes', 'Python', 'Cloud Infrastructure'],
    slug: 'llm-benchmarking-cloud-deployment',
  },
]
