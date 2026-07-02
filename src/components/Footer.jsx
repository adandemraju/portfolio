import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-kicker">( get in touch )</p>
        <a href="mailto:wky3ny@virginia.edu" className="footer-mail">
          wky3ny@virginia.edu
        </a>
        <div className="footer-row">
          <div className="footer-meta">
            <span>Ashburn, VA</span>
            <span>UVA '28</span>
            <span>Theta Tau</span>
          </div>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/ananyadandemraju"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/adandemraju"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
