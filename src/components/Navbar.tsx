import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <div className="w-8 h-8 overflow-hidden rounded-md border border-[rgba(255,255,255,0.12)] bg-black/40">
            <img
              src="/Design de logotipo de monograma vn de lu….jpg"
              alt="Vineeth Naik logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-lg tracking-tight">Vineeth Naik</span>
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map(({ to, label, scrollTo }) => (
            <li key={label}>
              <Link
                to={to}
                onClick={(e) => {
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
      </nav>
    </motion.header>
  )
}
