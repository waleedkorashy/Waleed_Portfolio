import type { Profile } from '../types/profile'

interface AboutProps {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-split">
        <div>
          <p className="section-kicker">Profile</p>
          <h2 id="about-title">About</h2>
        </div>
        <div className="section-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="muted">Location: {profile.location} · {profile.relocation}</p>
        </div>
      </div>
    </section>
  )
}
