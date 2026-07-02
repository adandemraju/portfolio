import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import AmongUsProject from './components/AmongUsProject'

function App() {
  const location = useLocation()
  const onDarkPage = location.pathname.startsWith('/projects/among-us')

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/projects/among-us" element={<AmongUsProject />} />
      </Routes>
      {!onDarkPage && <Footer />}
    </>
  )
}

export default App
