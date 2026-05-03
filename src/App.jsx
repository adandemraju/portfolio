import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import AmongUsProject from './components/AmongUsProject'

function App() {
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
    </>
  )
}

export default App
