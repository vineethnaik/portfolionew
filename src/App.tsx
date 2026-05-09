import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  )
}

function ProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <ProjectCaseStudy />
    </motion.div>
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
        <AnimatePresence mode="wait">
          <Routes location={location} key={`${location.pathname}${location.hash}`}>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}
