import { Link } from 'react-router-dom'
import './AmongUsProject.css'

const findings = [
  { label: 'Final Accuracy', value: '81.8%' },
  { label: 'Total Games', value: '2,227' },
  { label: 'False Negatives', value: '39' },
  { label: 'Models Compared', value: '2' },
]

const featureImportance = [
  { feature: 'Game Length (s)', importance: 66.1 },
  { feature: 'Sabotages Fixed', importance: 12.1 },
  { feature: 'Task Time (s)', importance: 9.9 },
  { feature: 'All Tasks Completed', importance: 7.2 },
  { feature: 'Ejected', importance: 4.7 },
]

const leakageItems = [
  { feature: 'Imposter Kills', reason: 'Only Impostors have non-zero values — directly reveals the label' },
  { feature: 'Outcome', reason: 'Game outcome unknown at prediction time' },
  { feature: 'Task Completed', reason: 'Always 0 for Impostors — another direct identifier' },
]

const modelComparison = [
  { model: 'Decision Tree', accuracy: '81.4%', fn: 50, selected: false },
  { model: 'Random Forest', accuracy: '81.8%', fn: 39, selected: true },
]

function AmongUsProject() {
  return (
    <div className="au-page">
      <section className="au-hero">
        <div className="au-stars au-stars-s" />
        <div className="au-stars au-stars-m" />
        <div className="au-stars au-stars-l" />

        <div className="au-crewmate-wrap">
          <div className="au-crewmate">
            <div className="au-crewmate-visor" />
            <div className="au-crewmate-backpack" />
          </div>
        </div>

        <div className="au-hero-content">
          <div className="au-ejected-tag">// ejected</div>
          <h1 className="au-hero-title">
            Ananya Dandemraju<br />
            <span>was the Impostor.</span>
          </h1>
          <p className="au-hero-sub">1 Impostor remains.</p>
        </div>

        <a href="#au-details" className="au-scroll-hint">↓ view project</a>
      </section>

      <section className="au-details" id="au-details">
        <div className="au-inner">
          <Link to="/Projects" className="au-back">← All Projects</Link>

          <div className="au-intro">
            <span className="au-tag">// ML / Classification</span>
            <h2 className="au-title">Among Us<br /><span>Impostor Predictor</span></h2>
            <p className="au-desc">
              A Random Forest classifier trained on 2,227 real Among Us game logs to predict
              whether a player is the Impostor — without using kill data. Built with full
              data leakage analysis, feature engineering from raw game strings, and a
              model comparison between Decision Tree and Random Forest.
            </p>
          </div>

          <div className="au-stats-row">
            {findings.map(f => (
              <div key={f.label} className="au-stat">
                <span className="au-stat-value">{f.value}</span>
                <span className="au-stat-label">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="au-card">
            <div className="au-card-label">// feature importance — random forest</div>
            <div className="au-bars">
              {featureImportance.map(f => (
                <div key={f.feature} className="au-bar-row">
                  <span className="au-bar-feature">{f.feature}</span>
                  <div className="au-bar-track">
                    <div className="au-bar-fill" style={{ width: `${f.importance}%` }} />
                  </div>
                  <span className="au-bar-pct">{f.importance}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="au-two-col">
            <div className="au-card">
              <div className="au-card-label">// data leakage identified &amp; removed</div>
              <div className="au-leakage-list">
                {leakageItems.map(item => (
                  <div key={item.feature} className="au-leakage-item">
                    <span className="au-leakage-feature">{item.feature}</span>
                    <span className="au-leakage-reason">{item.reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="au-card">
              <div className="au-card-label">// model comparison</div>
              <table className="au-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Accuracy</th>
                    <th>False Neg.</th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map(row => (
                    <tr key={row.model} className={row.selected ? 'au-row-selected' : ''}>
                      <td>{row.model}{row.selected ? ' ✓' : ''}</td>
                      <td>{row.accuracy}</td>
                      <td>{row.fn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="au-table-note">
                Random Forest selected — fewer false negatives with comparable accuracy.
                class_weight='balanced' applied to handle 79/21 class imbalance.
              </p>
            </div>
          </div>

          <div className="au-footer-row">
            <div className="au-stack">
              {['Python', 'scikit-learn', 'pandas', 'matplotlib', 'seaborn', 'joblib', 'Jupyter'].map(s => (
                <span key={s} className="au-stack-tag">{s}</span>
              ))}
            </div>
            <a
              href="https://github.com/adandemraju/amongus-imposter-predictor"
              target="_blank"
              rel="noreferrer"
              className="au-github-btn"
            >
              View on GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AmongUsProject
