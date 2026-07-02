import { Link } from 'react-router-dom'
import './About.css'

const skills = [
  'Python', 'Java', 'C', 'R', 'JavaScript', 'SQL', 'Bash', 'CSS', 'HTML',
  'scikit-learn', 'PyTorch', 'TensorFlow', 'Hugging Face',
  'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
  'FastAPI', 'Streamlit', 'React', 'Docker', 'Linux', 'PySpark',
  'Oracle Cloud Infrastructure', 'REST APIs', 'Git/GitHub', 'Jupyter', 'Arduino',
  'Machine Learning', 'Data Engineering',
]

const timeline = [
  { year: '2027', label: 'Seeking AI/ML & SWE Internship', type: 'goal' },
  { year: 'Summer 2026', label: 'HQ Data Engineering Fellow — Marriott International', type: 'work' },
  { year: 'Summer 2025', label: 'Software Engineering Intern — Smart Analytics Inc.', type: 'work' },
  { year: "Summers '23–'24", label: 'AI/ML Engineer — METY Technology', type: 'work' },
  { year: '2023', label: 'Published ML Research — Int\'l Journal of Social Science & Economic Research', type: 'achievement' },
  { year: 'Aug 2024', label: 'University of Virginia — CS + Applied Statistics (Finance & Business)', type: 'edu' },
]

function About() {
  return (
    <main className="about-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-blob" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-inner">
          <h1 className="hero-title">
            ai/ml<br /><em>engineer</em>
          </h1>
          <p className="hero-sub">
            with a passion for building intelligent systems that ship.
            CS + Applied Statistics at UVA — incoming HQ Data Engineering
            Fellow at Marriott International.
          </p>

          <div className="hero-actions">
            <Link to="/Projects" className="btn-circle-link">
              <span className="btn-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 7l10 10" />
                  <path d="M17 8v9H8" />
                </svg>
              </span>
              <span className="btn-circle-label">View projects</span>
            </Link>
            <a
              href="https://github.com/adandemraju"
              target="_blank"
              rel="noreferrer"
              className="hero-github"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="about-section">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">what I <em>work with</em></h2>
        </div>
        <div className="skills-grid">
          {skills.map(s => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="about-section">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">where I've <em>been</em></h2>
        </div>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline-item type-${item.type}`}>
              <span className="timeline-year">{item.year}</span>
              <span className="timeline-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default About
