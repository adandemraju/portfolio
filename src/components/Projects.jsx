import { useNavigate } from 'react-router-dom'
import './Projects.css'

const projects = [
  {
    id: 'among-us',
    title: 'Among Us Impostor Predictor',
    tag: 'ML / Classification',
    description: 'End-to-end ML pipeline across 2,227 real game logs — 81.8% accuracy and a 14% cut in false negatives over baseline, with full data leakage analysis. Deployed as a RESTful inference API with LLM-generated probabilistic reasoning over live gameplay.',
    stack: ['Python', 'pandas', 'scikit-learn', 'FastAPI', 'Gemini API'],
    stats: [
      { label: 'Accuracy', value: '81.8%' },
      { label: 'Games', value: '2,227' },
      { label: 'Models', value: '2' },
    ],
    github: 'https://github.com/adandemraju/amongus-imposter-predictor',
    detailRoute: '/projects/among-us',
    theme: 'among-us',
    status: 'live',
  },
  {
    id: 'topsecret',
    title: 'Top Secret — Mission Management System',
    tag: 'Java / MVC / SQL',
    description: 'Java MVC application for managing classified mission operations — agents, facilities, missions, and briefs — backed by a SQL database with full audit logging. Every create, assign, and import action is recorded to a persistent audit trail, with dual terminal and HTML interfaces from a single entry point. Built as a 3-person team project across Model, Controller, and View roles.',
    stack: ['Java', 'SQL', 'JDBC', 'JUnit', 'Mockito', 'HTML'],
    stats: [],
    github: 'https://github.com/adandemraju/TopSecret-2-5',
    detailRoute: null,
    theme: 'topsecret',
    status: 'live',
  },
  {
    id: 'sre-agent',
    title: 'Self-Improving On-Call Triage Agent',
    tag: 'AI / SRE Agent',
    description: 'Autonomous on-call triage agent: when an alert fires, it proposes a root cause, impact estimate, runbook, and drafted comms — then learns from adjudicated outcomes. Built around a frozen eval harness with ablations, model comparisons, and a learning curve proving accuracy improves as it works more incidents.',
    stack: ['Python', 'Gemini API', 'Hugging Face', 'FastAPI', 'React', 'SQLite'],
    stats: [],
    github: null,
    detailRoute: null,
    theme: 'sre',
    status: 'coming-soon',
  },
]

function ProjectCard({ project }) {
  const navigate = useNavigate()

  function handleCardClick() {
    if (project.detailRoute) navigate(project.detailRoute)
  }

  return (
    <div
      className={`project-card theme-${project.theme}${project.detailRoute ? ' clickable' : ''}`}
      onClick={handleCardClick}
      role={project.detailRoute ? 'button' : undefined}
      tabIndex={project.detailRoute ? 0 : undefined}
      onKeyDown={project.detailRoute ? (e) => e.key === 'Enter' && handleCardClick() : undefined}
    >
      {project.theme === 'among-us' && (
        <div className="card-crewmate" aria-hidden="true">
          <div className="card-crewmate-visor" />
          <div className="card-crewmate-backpack" />
        </div>
      )}

      <div className="project-card-header">
        <div className="project-meta">
          <span className="project-tag">{project.tag}</span>
          {project.status === 'coming-soon' && (
            <span className="project-status">Coming Soon</span>
          )}
          {project.status === 'live' && (
            <span className="project-status live">Live</span>
          )}
        </div>
        <h2 className="project-title">{project.title}</h2>
        <p className="project-desc">{project.description}</p>
      </div>

      {project.stats.length > 0 && (
        <div className="project-stats">
          {project.stats.map(s => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-stack">
        {project.stack.map(s => (
          <span key={s} className="stack-tag">{s}</span>
        ))}
      </div>

      <div className="project-card-footer">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
            View on GitHub ↗
          </a>
        ) : project.detailRoute ? (
          <span className="project-link">View Project →</span>
        ) : (
          <span className="project-link-disabled">
            {project.status === 'coming-soon' ? 'GitHub — Coming Soon' : 'Private Repo'}
          </span>
        )}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-header">
        <div className="page-kicker">( projects )</div>
        <h1 className="projects-title">
          things I've <em>built</em>
        </h1>
        <p className="projects-subtitle">
          ML systems, embedded hardware, and full-stack apps — targeting SWE and ML roles at top-tier companies.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  )
}

export default Projects
