import './About.css'

const skills = [
  'Python', 'Java', 'C', 'R', 'JavaScript', 'SQL',
  'scikit-learn', 'PyTorch', 'TensorFlow',
  'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
  'React', 'Vite', 'CSS', 'HTML',
  'FastAPI', 'Streamlit', 'Docker', 'PySpark',
  'REST APIs', 'Git/GitHub', 'Arduino',
  'Machine Learning', 'Data Engineering', 'AWS AI Practitioner (in progress)',
]

const timeline = [
  { year: '2027', label: 'Seeking SWE / ML Internship', type: 'goal' },
  { year: 'Summer 2026', label: 'HQ Data Engineering Fellow — Marriott International', type: 'work' },
  { year: "Jun '24 – Aug '25", label: 'Software Engineering Intern — Smart Analytics Inc.', type: 'work' },
  { year: "Jun '22 – Jun '25", label: 'AI/ML Engineer — METY Technology', type: 'work' },
  { year: '2023', label: 'Published ML Research — Int\'l Journal of Social Science & Economic Research', type: 'achievement' },
  { year: 'Aug 2024', label: 'University of Virginia — CS + Applied Statistics (Data Science)', type: 'edu' },
]

function About() {
  return (
    <main className="about-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="hero-content">
          <div className="hero-badge">· Software Engineer · ML Engineer ·</div>
          <h1 className="hero-title">
            Ananya<br /><span>Dandemraju</span>
          </h1>
          <p className="hero-sub">
            CS + Applied Statistics, UVA '28.<br />
            Incoming HQ Data Engineering Fellow at Marriott International.
          </p>
          <div className="hero-actions">
            <a href="/Projects" className="btn-primary">View Projects</a>
            <a href="https://github.com/adandemraju" target="_blank" rel="noreferrer" className="btn-secondary">GitHub ↗</a>
          </div>
        </div>

        <a href="#about-content" className="hero-scroll">
          <span>Scroll down</span>
          <div className="hero-scroll-line" />
        </a>
      </section>

      {/* ── CONTENT ── */}
      <div id="about-content" className="about-grid">
        <div className="about-card">
          <div className="card-label">// skills</div>
          <div className="skills-grid">
            {skills.map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        <div className="about-card">
          <div className="card-label">// timeline</div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item type-${item.type}`}>
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-footer-line">
        <span>Ashburn, VA</span>
        <span>GPA 3.6</span>
        <span>Theta Tau Engineering Fraternity</span>
        <span>Leukemia & Lymphoma Society</span>
      </div>

    </main>
  )
}

export default About
