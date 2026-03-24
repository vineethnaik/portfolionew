import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdjgwgq'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (status !== 'success') return
    const t = setTimeout(() => {
      setStatus('idle')
    }, 5000)
    return () => clearTimeout(t)
  }, [status])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')

    const fetchPromise = fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    const minLoadingTime = new Promise<void>((r) => setTimeout(r, 5000))

    try {
      const [, res] = await Promise.all([minLoadingTime, fetchPromise])
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 backdrop-blur-[2px]" style={{ backgroundColor: 'var(--theme-section-bg)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold mb-6"
          style={{ color: 'var(--theme-text)' }}
        >
          Let's connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg mb-12"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          Thanks for stopping by. Feel free to reach out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <a
            href="mailto:vineethnaikeslavath@gmail.com"
            className="block transition-colors hover:opacity-70"
            style={{ color: 'var(--theme-text)' }}
          >
            vineethnaikeslavath@gmail.com
          </a>
          <div className="flex justify-center gap-6 sm:gap-8">
            <a
              href="https://github.com/vineethnaik"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-100 opacity-80 text-sm sm:text-base"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/eslavath-vineeth-naik-a8ab16285"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-100 opacity-80 text-sm sm:text-base"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text-secondary)' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3.5 sm:py-3 rounded-2xl border focus:outline-none transition-colors contact-input text-base"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text-secondary)' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full px-4 py-3.5 sm:py-3 rounded-2xl border focus:outline-none transition-colors contact-input text-base"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text-secondary)' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3.5 sm:py-3 rounded-2xl border focus:outline-none transition-colors resize-none contact-input text-base"
              placeholder="Your message"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-3 rounded-2xl font-medium transition-all duration-300 min-w-[180px] text-base ${
                status === 'success'
                  ? 'bg-green-500 text-white'
                  : status === 'error'
                    ? 'theme-btn-primary'
                    : 'theme-btn-primary disabled:opacity-70 disabled:cursor-not-allowed'
              }`}
            >
              {status === 'submitting' && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-bounce-dot [animation-delay:0ms]" />
                  <span className="w-2 h-2 rounded-full bg-white animate-bounce-dot [animation-delay:150ms]" />
                  <span className="w-2 h-2 rounded-full bg-white animate-bounce-dot [animation-delay:300ms]" />
                </span>
              )}
              {status === 'success' && (
                <motion.svg
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="h-6 w-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </motion.svg>
              )}
              {status === 'submitting' ? 'Sending' : status === 'success' ? 'Sent!' : status === 'error' ? 'Try again' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
