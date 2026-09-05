import type { Profile } from '../types/profile'

interface ContactProps {
  profile: Profile
}

export function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <h2 id="contact-title">{profile.cta.heading}</h2>
      <p>{profile.cta.supportingText}</p>
      <ul className="contact-list">
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        {profile.phone.isPublic && (
          <li>
            <a href={`tel:${profile.phone.value}`}>{profile.phone.value}</a>
          </li>
        )}
        <li>
          <a href={profile.links.linkedin}>LinkedIn</a>
        </li>
        <li>
          <a href={profile.links.github}>GitHub</a>
        </li>
        <li>
          <a href={profile.links.cv}>CV</a>
        </li>
      </ul>
    </section>
  )
}
