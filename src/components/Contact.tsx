import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Profile } from '../types/profile'

interface ContactProps {
  profile: Profile
  onOpenCV: () => void
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'fallback'

const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim()

export function Contact({ profile, onOpenCV }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    if (data.get('_gotcha')) {
      setStatus('success')
      return
    }

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!contactEndpoint) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('fallback')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Contact form request failed')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-title">{profile.cta.heading}</h2>
        <p>{profile.cta.supportingText}</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-field">
              <span>Name</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <label className="form-field">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              minLength={10}
              placeholder="What are you building?"
              required
            />
          </label>
          <input type="hidden" name="_subject" value="Portfolio enquiry" />
          <div className="form-honeypot" aria-hidden="true">
            <label>
              Leave this field empty
              <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="form-actions">
            <button className="button primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : profile.cta.startLabel}
            </button>
            <p className="form-note">Your details are only used to reply to this message.</p>
          </div>
          <div className="form-status" aria-live="polite">
            {status === 'success' && <p>Thanks — your message was sent. I’ll reply soon.</p>}
            {status === 'error' && (
              <p>
                Something went wrong. Please email me directly at{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
            {status === 'fallback' && (
              <p>
                Opening your email app. If nothing happens, email me directly at{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
          </div>
        </form>
        <ul className="contact-list" aria-label="Other ways to reach me">
          <li>
            <a className="contact-link primary-contact" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          {profile.phone.isPublic && (
            <li>
              <a className="contact-link" href={`tel:${profile.phone.value}`}>
                {profile.phone.value}
              </a>
            </li>
          )}
          <li>
            <a className="contact-link" href={profile.links.linkedin}>
              LinkedIn
            </a>
          </li>
          <li>
            <a className="contact-link" href={profile.links.github}>
              GitHub
            </a>
          </li>
          <li>
            <button className="contact-link" type="button" onClick={onOpenCV}>
              CV
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}
