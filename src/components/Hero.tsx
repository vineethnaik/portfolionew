import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const greetings = ['Hi', 'Hola', 'Bonjour', 'नमस्ते', 'こんにちは', '안녕하세요']

const greetingStyles = [
  { fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif', letterSpacing: '0.35em', fontWeight: 700 },
  { fontFamily: '"SF Pro Display", system-ui, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.4em', fontWeight: 600 },
  { fontFamily: '"Times New Roman", Georgia, serif', letterSpacing: '0.3em', fontWeight: 700 },
  { fontFamily: '"Noto Sans Devanagari", system-ui, sans-serif', letterSpacing: '0.28em', fontWeight: 700 },
  { fontFamily: '"Noto Sans JP", system-ui, sans-serif', letterSpacing: '0.32em', fontWeight: 600 },
  { fontFamily: '"Noto Sans KR", system-ui, sans-serif', letterSpacing: '0.32em', fontWeight: 700 },
]

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = greetings[greetingIndex]
    const fullLength = current.length

    let delay = isDeleting ? 70 : 130

    if (!isDeleting && charIndex === fullLength) {
      delay = 900
    }

    const timer = setTimeout(() => {
      let nextDeleting = isDeleting
      let nextGreetingIndex = greetingIndex
      let nextCharIndex = charIndex

      if (!isDeleting) {
        if (charIndex < fullLength) {
          nextCharIndex = charIndex + 1
        } else {
          nextDeleting = true
        }
      } else {
        if (charIndex > 0) {
          nextCharIndex = charIndex - 1
        } else {
          nextDeleting = false
          nextGreetingIndex = (greetingIndex + 1) % greetings.length
        }
      }

      setCharIndex(nextCharIndex)
      setIsDeleting(nextDeleting)
      setGreetingIndex(nextGreetingIndex)
      setTypedText(current.slice(0, nextCharIndex))
    }, delay)

    return () => clearTimeout(timer)
  }, [greetingIndex, charIndex, isDeleting])

  return (
    <section
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl text-center"
        style={{ zIndex: 2 }}
      >
        <motion.p
          variants={item}
          className="text-xs sm:text-sm md:text-base uppercase mb-4 text-center"
          style={{
            color: 'var(--theme-text)',
            fontFamily: greetingStyles[greetingIndex].fontFamily,
            letterSpacing: greetingStyles[greetingIndex].letterSpacing,
            fontWeight: greetingStyles[greetingIndex].fontWeight,
          }}
        >
          <motion.span
            key={greetingIndex}
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="inline-flex items-center justify-center gap-1 min-w-[6ch]"
          >
            <span>{typedText}</span>
            <span className="inline-block w-[2px] h-4 sm:h-5 align-middle bg-[var(--theme-text)] animate-pulse rounded-full" />
          </motion.span>
        </motion.p>
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-3 sm:mb-4 leading-[1.1] sm:leading-[1.08]"
          style={{ color: 'var(--theme-text)' }}
        >
          I'm Vineeth Naik
        </motion.h1>
        <motion.p
          variants={item}
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6"
          style={{ color: 'var(--theme-text)' }}
        >
          AI / Machine Learning Engineer & Cloud Developer
        </motion.p>
        <motion.p
          variants={item}
          className="text-sm sm:text-base md:text-lg max-w-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed mx-auto px-1"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          Computer Science undergraduate specializing in Machine Learning, Data
          Analytics, and Cloud Systems. I build intelligent systems using
          Python, AWS, and scalable backend architectures.
        </motion.p>
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            to="/#work"
            className="theme-btn-primary inline-flex items-center justify-center px-6 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-2xl transition-all duration-300 w-full sm:w-auto min-h-[44px]"
          >
            View Work
          </Link>
          <a
            href="/DS_and_AI_Resume.pdf"
            download="DS_and_AI_Resume.pdf"
            className="theme-btn-secondary inline-flex items-center justify-center px-6 py-3 sm:px-6 sm:py-3 text-sm sm:text-base border rounded-2xl font-medium transition-all duration-300 w-full sm:w-auto min-h-[44px]"
          >
            Download Resume
          </a>
          <Link
            to="/#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="theme-btn-secondary inline-flex items-center justify-center px-6 py-3 sm:px-6 sm:py-3 text-sm sm:text-base border rounded-2xl font-medium hover:opacity-100 transition-all duration-300 w-full sm:w-auto min-h-[44px]"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
