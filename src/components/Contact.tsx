import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [state, handleSubmit, reset] = useForm('mqenygqg')
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    if (!state.succeeded) return
    const t = setTimeout(() => {
      setFormValues({ name: '', email: '', message: '' })
      reset()
    }, 5000)
    return () => clearTimeout(t)
  }, [state.succeeded, reset])

  const formErrors = state.errors?.getFormErrors() ?? []
  const showFormError = !state.succeeded && !state.submitting && formErrors.length > 0

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 backdrop-blur-[2px]" style={{ backgroundColor: 'var(--theme-section-bg)' }}>
      <ScrollReveal className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6" style={{ color: 'var(--theme-text)' }}>
          Let&apos;s connect and build something amazing together.
        </h2>
        <p className="text-lg mb-12" style={{ color: 'var(--theme-text-secondary)' }}>
          Open to impactful product engineering roles and collaboration opportunities.
        </p>
        <div className="space-y-4 mb-12">
          <a
            href="mailto:vineethnaikeslavath@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:opacity-80"
            style={{ color: 'var(--theme-text)' }}
            aria-label="Send an email to Vineeth Naik"
          >
            Email directly:
            <span className="underline underline-offset-4">vineethnaikeslavath@gmail.com</span>
          </a>
          <div className="flex justify-center gap-6 sm:gap-8">
            <a
              href="https://github.com/vineethnaik"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link-github text-sm sm:text-base"
              aria-label="Visit Vineeth Naik GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/eslavath-vineeth-naik-a8ab16285"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link-linkedin text-sm sm:text-base"
              aria-label="Visit Vineeth Naik LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <ScrollReveal delay={0.1}>
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form-glow space-y-6 text-left rounded-3xl p-5 sm:p-7"
            initial={{ boxShadow: '0 0 0 0 rgba(34, 211, 238, 0)', borderColor: 'rgba(34, 211, 238, 0)' }}
            whileInView={{
              boxShadow: [
                '0 0 0 0 rgba(34, 211, 238, 0)',
                '0 0 0 1px rgba(56, 189, 248, 0.45), 0 0 36px rgba(168, 85, 247, 0.28)',
                '0 0 0 1px rgba(56, 189, 248, 0.28), 0 0 20px rgba(168, 85, 247, 0.18)',
              ],
              borderColor: ['rgba(34, 211, 238, 0)', 'rgba(56, 189, 248, 0.45)', 'rgba(56, 189, 248, 0.28)'],
            }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
              backgroundColor: 'color-mix(in srgb, var(--theme-card-bg) 78%, transparent)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text-secondary)' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={(e) => setFormValues((prev) => ({ ...prev, name: e.target.value }))}
                required
                className="w-full px-4 py-3.5 sm:py-3 rounded-2xl border focus:outline-none transition-colors contact-input text-base"
                placeholder="Your name"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm mt-1 text-red-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text-secondary)' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={(e) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
                required
                className="w-full px-4 py-3.5 sm:py-3 rounded-2xl border focus:outline-none transition-colors contact-input text-base"
                placeholder="your@email.com"
              />
              <input type="hidden" name="_replyto" value={formValues.email} />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm mt-1 text-red-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text-secondary)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={(e) => setFormValues((prev) => ({ ...prev, message: e.target.value }))}
                required
                rows={5}
                className="w-full px-4 py-3.5 sm:py-3 rounded-2xl border focus:outline-none transition-colors resize-none contact-input text-base"
                placeholder="Your message"
              />
              <input type="hidden" name="_subject" value={`Portfolio message from ${formValues.name || 'someone'}`} />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm mt-1 text-red-400" />
            </div>
            {showFormError && (
              <p className="text-sm text-center text-red-400" role="alert">
                {formErrors.map((e) => e.message).join(' ')}
              </p>
            )}
            <div className="text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-3 rounded-2xl font-medium transition-all duration-300 min-w-[180px] text-base ${
                  state.succeeded
                    ? 'bg-green-500 text-white'
                    : showFormError
                      ? 'theme-btn-primary'
                      : 'theme-btn-primary disabled:opacity-70 disabled:cursor-not-allowed'
                }`}
              >
                {state.submitting && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-bounce-dot [animation-delay:0ms]" />
                    <span className="w-2 h-2 rounded-full bg-white animate-bounce-dot [animation-delay:150ms]" />
                    <span className="w-2 h-2 rounded-full bg-white animate-bounce-dot [animation-delay:300ms]" />
                  </span>
                )}
                {state.succeeded && (
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
                {state.submitting ? 'Sending' : state.succeeded ? 'Sent!' : showFormError ? 'Try again' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </ScrollReveal>
      </ScrollReveal>
    </section>
  )
}
