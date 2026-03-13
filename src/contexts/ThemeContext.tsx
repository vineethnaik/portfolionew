import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const lightTheme = {
  '--theme-bg': '#ffffff',
  '--theme-bg-secondary': '#f5f5f5',
  '--theme-section-bg': '#ffffff',
  '--theme-card-bg': '#f8f9fa',
  '--theme-text': '#111827',
  '--theme-text-secondary': '#374151',
  '--theme-text-muted': '#4b5563',
  '--theme-border': 'rgba(0,0,0,0.12)',
  '--theme-btn-bg': '#111827',
  '--theme-btn-text': '#ffffff',
  '--theme-btn-border': 'rgba(0,0,0,0.25)',
  '--theme-photo-bg': '#e5e7eb',
  '--theme-input-bg': 'rgba(0,0,0,0.04)',
} as React.CSSProperties

const darkTheme = {
  '--theme-bg': '#000000',
  '--theme-bg-secondary': '#0a0a0a',
  '--theme-section-bg': 'rgba(0,0,0,0.2)',
  '--theme-card-bg': 'rgba(0,0,0,0.4)',
  '--theme-text': '#ffffff',
  '--theme-text-secondary': '#b3b3b3',
  '--theme-text-muted': '#6b7280',
  '--theme-border': 'rgba(255,255,255,0.08)',
  '--theme-btn-bg': '#ffffff',
  '--theme-btn-text': '#000000',
  '--theme-btn-border': 'rgba(255,255,255,0.3)',
  '--theme-photo-bg': 'rgba(255,255,255,0.06)',
  '--theme-input-bg': 'rgba(255,255,255,0.08)',
} as React.CSSProperties

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
} | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null
      return saved === 'light' ? 'light' : 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    const vars = theme === 'dark' ? darkTheme : lightTheme
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value as string)
    })
    root.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
