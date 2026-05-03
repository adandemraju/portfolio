import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">AD</Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>About</Link>
        <div className="nav-dropdown">
          <Link to="/Projects" className={location.pathname.includes('Projects') ? 'active' : ''}>
            Projects
          </Link>
          <div className="dropdown-menu">
            <Link to="/projects/among-us">Among Us Predictor</Link>
            <span className="coming-soon">Pickleball Tracker <em>soon</em></span>
            <span className="coming-soon">AI Shopping Assistant <em>soon</em></span>
          </div>
        </div>
        <Link to="/Resume" className={location.pathname === '/Resume' ? 'active' : ''}>Resume</Link>
        <a href="https://github.com/adandemraju" target="_blank" rel="noreferrer" className="nav-github">
          GitHub ↗
        </a>
      </div>
    </nav>
  )
}

export default Navbar