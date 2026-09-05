import type { Profile } from '../types/profile'

interface AboutProps {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      {profile.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p className="muted">Location: {profile.location}</p>
    </section>
  )
}
