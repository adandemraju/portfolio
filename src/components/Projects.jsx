import { useNavigate } from 'react-router-dom'
import './Projects.css'

const projects = [
  {
    id: 'among-us',
    title: 'Among Us Impostor Predictor',
    tag: 'ML / Classification',
    description: 'Random Forest classifier trained on 2,227 real game logs to predict whether a player is the Impostor — without using kill data. Includes full data leakage analysis, feature engineering, and model comparison.',
    stack: ['Python', 'scikit-learn', 'pandas', 'Jupyter', 'AWS Bedrock (soon)'],
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
    id: 'pickleball',
    title: 'Pickleball Match Tracker + AI Coaching',
    tag: 'AI / Sports Tech',
    description: 'AI-powered pickleball match tracker that logs rally data, shot patterns, and player stats. An LLM coaching layer analyzes recorded sessions and delivers personalized feedback and drill recommendations.',
    stack: ['Python', 'React', 'FastAPI', 'LLM', 'Computer Vision'],
    stats: [],
    github: null,
    detailRoute: null,
    theme: 'pickleball',
    status: 'coming-soon',
  },
  {
    id: 'shopping',
    title: 'AI Shopping Assistant',
    tag: 'AI / NLP',
    description: 'Conversational shopping assistant powered by a large language model. Takes natural language queries and returns ranked product recommendations with explanations.',
    stack: ['Python', 'LLM', 'React', 'FastAPI', 'AWS'],
    stats: [],
    github: null,
    detailRoute: null,
    theme: 'shopping',
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
            <span className="project-status">In Progress</span>
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
        <div className="about-tag">// projects</div>
        <h1 className="projects-title">
          Things I've<br /><span>Built</span>
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
