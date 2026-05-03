import './About.css'

const skills = [
  'Python', 'Java', 'C', 'R', 'JavaScript', 'SQL',
  'scikit-learn', 'PyTorch', 'TensorFlow',
  'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
  'React', 'Vite', 'CSS', 'HTML',
  'FastAPI', 'Streamlit', 'Docker', 'PySpark',
  'AWS Bedrock', 'Oracle Cloud Infrastructure', 'REST APIs',
  'Git/GitHub', 'Arduino', 'Machine Learning', 'Data Engineering',
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
      <div className="about-hero">
        <div className="about-tag">// about</div>
        <h1 className="about-name">
          Ananya<br />
          <span>Dandemraju</span>
        </h1>
        <p className="about-role">CS + Applied Statistics @ UVA · Class of 2028</p>
        <p className="about-bio">
          Second-year at the University of Virginia double-majoring in Computer Science
          and Applied Statistics (Data Science concentration). I build ML systems, ship
          data pipelines, and publish research. Incoming HQ Data Engineering Fellow at
          Marriott International. Targeting FAANG-tier SWE and ML roles in 2027.
        </p>
        <div className="about-actions">
          <a href="https://github.com/adandemraju" target="_blank" rel="noreferrer" className="btn-primary">
            GitHub ↗
          </a>
          <a href="/Resume" className="btn-secondary">Resume</a>
        </div>
      </div>

      <div className="about-grid">
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
