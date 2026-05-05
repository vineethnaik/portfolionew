import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AppBackground from './components/AppBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectCaseStudy from './pages/ProjectCaseStudy'

function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const targetId = location.hash.replace('#', '')
    const target = document.getElementById(targetId)
    if (!target) return

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.pathname, location.hash])

  return (
    <div
      className="relative min-h-screen transition-colors duration-500"
      style={{ backgroundColor: 'transparent', color: 'var(--theme-text)' }}
    >
      <AppBackground />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectCaseStudy />} />
        </Routes>
      </main>
    </div>
  )
}
