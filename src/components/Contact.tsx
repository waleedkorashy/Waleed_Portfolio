import type { Profile } from '../types/profile'

interface ContactProps {
  profile: Profile
  onOpenCV: () => void
}

export function Contact({ profile, onOpenCV }: ContactProps) {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-title">{profile.cta.heading}</h2>
        <p>{profile.cta.supportingText}</p>
        <a className="button primary contact-start" href={`mailto:${profile.email}`}>
          {profile.cta.startLabel}
        </a>
        <ul className="contact-list">
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