import './Resume.css'

function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-header">
        <div className="page-kicker">( resume )</div>
        <h1 className="resume-title">experience + <em>education</em></h1>
      </div>

      <div className="resume-grid">
        <div className="resume-section">
          <div className="section-label">( experience )</div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">HQ Fellow — Data Engineering (Incoming)</div>
                <div className="resume-company">Marriott International · Bethesda, MD</div>
              </div>
              <div className="resume-date">Summer 2026</div>
            </div>
            <ul className="resume-bullets">
              <li>Competitively selected for a headquarters data engineering fellowship at a Fortune 500 company.</li>
              <li>Will design and optimize pipelines supporting enterprise-scale analytics and reporting infrastructure.</li>
            </ul>
            <div className="resume-tags">
              <span>Python</span><span>SQL</span><span>Oracle Cloud</span><span>PySpark</span>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">Software Engineering Intern</div>
                <div className="resume-company">Smart Analytics Inc. · Ashburn, VA</div>
              </div>
              <div className="resume-date">Summer 2025</div>
            </div>
            <ul className="resume-bullets">
              <li>Engineered automated analytics workflows in Python using NumPy and pandas across a multi-stage data pipeline, eliminating error-prone manual handoffs and reducing end-to-end reporting time by 30%.</li>
              <li>Developed reusable data cleaning and transformation libraries adopted across 3+ engineering teams, standardizing input schemas and enforcing consistent preprocessing contracts.</li>
              <li>Partnered with senior engineers to architect automated QA validation checks and documented reporting standards, hardening data integrity guarantees and accelerating stakeholder review cycles.</li>
              <li>Built modular statistical analysis components and visualization dashboards that surfaced actionable product insights, informing feature prioritization and cutting approval timelines by 20%.</li>
            </ul>
            <div className="resume-tags">
              <span>Python</span><span>NumPy</span><span>pandas</span><span>SQL</span>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">AI/ML Engineer</div>
                <div className="resume-company">METY Technology · Ashburn, VA</div>
              </div>
              <div className="resume-date">Summers 2023, 2024</div>
            </div>
            <ul className="resume-bullets">
              <li>Designed and deployed an end-to-end ML pipeline serving 100+ users on a wellness app, integrating supervised and unsupervised models to personalize health plans across behavioral and biometric inputs.</li>
              <li>Built and tuned scikit-learn classification models (logistic regression, random forests) through iterative preprocessing, hyperparameter tuning, and k-fold cross-validation, improving recommendation accuracy by 15%.</li>
              <li>Established a versioned metrics tracking system using structured logging and experiment metadata, standardizing reproducibility and cutting debugging time across the model lifecycle.</li>
              <li>Published peer-reviewed research on ML-driven wellness outcomes in the International Journal of Social Science and Economic Research.</li>
            </ul>
            <div className="resume-tags">
              <span>Python</span><span>scikit-learn</span><span>PyTorch</span><span>pandas</span>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <div className="section-label">( education )</div>

          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <div className="resume-role">B.S. Computer Science · B.A. Applied Statistics</div>
                <div className="resume-company">University of Virginia</div>
              </div>
              <div className="resume-date">Aug 2024 – May 2028</div>
            </div>
            <p className="resume-desc">Finance & Business Concentration. GPA 3.6. Coursework: Data Structures & Algorithms, Computer Systems & Organization, Discrete Math & Theory, Software Development Essentials, Software Engineering, AI, Machine Learning, Statistical ML, Linear Algebra.</p>
            <div className="resume-tags">
              <span>CS</span><span>Applied Statistics</span><span>GPA 3.6</span>
            </div>
          </div>

          <div className="section-label" style={{marginTop: '48px'}}>( publications )</div>

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

          <div className="section-label" style={{marginTop: '48px'}}>( leadership )</div>

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
