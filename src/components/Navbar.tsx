import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const navLinks = [
  { to: '/#work', label: 'Work', scrollTo: 'work' },
  { to: '/#about', label: 'About', scrollTo: 'about' },
  { to: '/#work', label: 'Projects', scrollTo: 'work' },
  { to: '/#contact', label: 'Contact', scrollTo: 'contact' },
]

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
        className="theme-toggle p-2 rounded-xl transition-all duration-300 hover:opacity-100 opacity-80"
        style={{ color: 'var(--theme-text)' }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}

export default function Navbar() {
  const { theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md border-b' : ''
      }`}
      style={
        scrolled
          ? {
              backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)',
              borderColor: 'var(--theme-border)',
            }
          : {}
      }
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          style={{ color: 'var(--theme-text)' }}
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.18)] bg-transparent">
            <img
              src="/logo.png"
              alt="Vineeth Naik logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-medium text-lg tracking-tight hidden sm:block">Vineeth Naik</span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ to, label, scrollTo }) => (
            <li key={label}>
              <Link
                to={to}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (scrollTo && window.location.pathname === '/') {
                    e.preventDefault()
                    document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="relative text-sm font-medium transition-colors group"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                {label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--theme-text)' }}
                />
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl transition-colors"
            style={{ color: 'var(--theme-text)' }}
            aria-label="Toggle menu"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={mobileMenuOpen ? "open" : "closed"}
            >
              <motion.path
                variants={{
                  closed: { d: "M4 6h16" },
                  open: { d: "M6 18L18 6" }
                }}
              />
              <motion.path
                variants={{
                  closed: { d: "M4 12h16", opacity: 1 },
                  open: { d: "M6 6L18 18", opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                variants={{
                  closed: { d: "M4 18h16" },
                  open: { d: "M6 6L18 18" }
                }}
              />
            </motion.svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed inset-0 z-40"
            style={{ backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.95)' : 'rgba(255,255,255,0.95)' }}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 max-w-[80vw]"
              style={{ backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.98)' : 'rgba(255,255,255,0.98)' }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl transition-colors"
                    style={{ color: 'var(--theme-text)' }}
                    aria-label="Close menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <ul className="flex flex-col gap-6">
                  {navLinks.map(({ to, label, scrollTo }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          setMobileMenuOpen(false)
                          if (scrollTo && window.location.pathname === '/') {
                            e.preventDefault()
                            setTimeout(() => {
                              document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
                            }, 100)
                          }
                        }}
                        className="text-lg font-medium transition-colors block py-2"
                        style={{ color: 'var(--theme-text-secondary)' }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-8">
                  <div className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                    © 2024 Vineeth Naik
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
