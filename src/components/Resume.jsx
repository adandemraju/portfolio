import './Resume.css'

function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-header">
        <div className="about-tag">// resume</div>
        <h1 className="resume-title">Experience &<br /><span>Education</span></h1>
      </div>

      <div className="resume-grid">
        <div className="resume-section">
          <div className="section-label">// experience</div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">HQ Fellow — Data Engineering</div>
                <div className="resume-company">Marriott International</div>
              </div>
              <div className="resume-date">Summer 2026</div>
            </div>
            <ul className="resume-bullets">
              <li>Competitively selected for a headquarters data engineering fellowship at a Fortune 500 company.</li>
              <li>Will design and optimize pipelines supporting enterprise-scale analytics and reporting infrastructure.</li>
            </ul>
            <div className="resume-tags">
              <span>Python</span><span>SQL</span><span>PySpark</span>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">Software Engineering Intern</div>
                <div className="resume-company">Smart Analytics Inc.</div>
              </div>
              <div className="resume-date">Jun 2024 – Aug 2025</div>
            </div>
            <ul className="resume-bullets">
              <li>Automated analytics workflows in Python with NumPy and pandas, reducing manual reporting time by 30%.</li>
              <li>Wrote data cleaning and transformation scripts adopted across 3+ teams, standardizing inputs and reducing pipeline errors.</li>
              <li>Partnered with engineers to harden QA checks and document reporting standards, accelerating stakeholder review cycles.</li>
              <li>Produced statistical analyses and visualizations that informed product decisions and cut approval timelines by 20%.</li>
            </ul>
            <div className="resume-tags">
              <span>Python</span><span>NumPy</span><span>pandas</span><span>SQL</span>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">AI/ML Engineer</div>
                <div className="resume-company">METY Technology</div>
              </div>
              <div className="resume-date">Jun 2022 – Jun 2025</div>
            </div>
            <ul className="resume-bullets">
              <li>Designed and deployed an end-to-end ML pipeline for a wellness app with 100+ users, personalizing plans via supervised and unsupervised models.</li>
              <li>Built and tuned scikit-learn models (logistic regression, random forests), boosting recommendation accuracy by 15% through preprocessing and cross-validation.</li>
              <li>Established versioned metrics tracking across model iterations, enabling reproducible experiments and faster debugging.</li>
              <li>Published peer-reviewed research on ML-driven wellness outcomes in the International Journal of Social Science and Economic Research.</li>
            </ul>
            <div className="resume-tags">
              <span>Python</span><span>scikit-learn</span><span>PyTorch</span><span>pandas</span>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <div className="section-label">// education</div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">B.S. Computer Science · B.A. Applied Statistics</div>
                <div className="resume-company">University of Virginia</div>
              </div>
              <div className="resume-date">Aug 2024 – May 2028</div>
            </div>
            <p className="resume-desc">Data Science Concentration. GPA 3.6. Coursework: Data Structures & Algorithms, AI, Machine Learning, Statistical ML, Software Engineering, Discrete Math, Linear Algebra.</p>
            <div className="resume-tags">
              <span>CS</span><span>Applied Statistics</span><span>GPA 3.6</span>
            </div>
          </div>

          <div className="section-label" style={{marginTop: '40px'}}>// publications</div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">ML-Driven Wellness Outcomes</div>
                <div className="resume-company">Int'l Journal of Social Science & Economic Research · 2023</div>
              </div>
            </div>
            <p className="resume-desc">Peer-reviewed research on machine learning applications in personalized wellness, published while in high school.</p>
            <div className="resume-tags">
              <span>Machine Learning</span><span>Research</span><span>Peer-Reviewed</span>
            </div>
          </div>

          <div className="section-label" style={{marginTop: '40px'}}>// leadership</div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">Recruitment Chair</div>
                <div className="resume-company">Theta Tau Engineering Fraternity</div>
              </div>
              <div className="resume-date">2026</div>
            </div>
            <ul className="resume-bullets">
              <li>Executed end-to-end semester recruitment, growing new member intake by 80% and the applicant pool to 100+ students.</li>
              <li>Managed a $1,900 event budget, negotiating with vendors to cut costs by 47% while increasing attendance to 100+ students.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">Student Visionary · Junior Leadership Team</div>
                <div className="resume-company">Leukemia & Lymphoma Society</div>
              </div>
              <div className="resume-date">Aug 2023 – Present</div>
            </div>
            <ul className="resume-bullets">
              <li>Led a 15-member team to raise $15,000 in 8 weeks; secured corporate sponsorships with Calibre CPA Group and NB Studio.</li>
              <li>Engaged 500+ participants and mentored teams contributing to a cumulative fundraising impact exceeding $80,000.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Resume
