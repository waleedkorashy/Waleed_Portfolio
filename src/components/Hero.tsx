import type { Profile } from '../types/profile'
import { trackEvent } from '../lib/analytics'

interface HeroProps {
  profile: Profile
  onOpenCV: () => void
}

export function Hero({ profile, onOpenCV }: HeroProps) {
  return (
    <section id="top" className="section hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{profile.targetRole}</p>
        <h1 id="hero-title">{profile.fullName}</h1>
        <p className="hero-role">{profile.professionalTitle}</p>
        <p className="lead">{profile.valueProposition}</p>
        <div className="cta-row" aria-label="Primary actions">
          <a
            className="button primary"
            href={profile.cta.primaryHref}
            onClick={() =>
              trackEvent('CTA Click', {
                location: 'hero',
                target: profile.cta.primaryHref.replace(/^#/, ''),
              })
            }
          >
            {profile.cta.primaryLabel}
          </a>
          <a
            className="button secondary"
            href={profile.cta.secondaryHref}
            onClick={() =>
              trackEvent('CTA Click', {
                location: 'hero',
                target: profile.cta.secondaryHref.replace(/^#/, ''),
              })
            }
          >
            {profile.cta.secondaryLabel}
          </a>
          <button className="button download" type="button" onClick={onOpenCV}>
            {profile.cta.resumeLabel}
          </button>
        </div>
      </div>
      <div className="image-placeholder hero-media" aria-label={profile.profileImage.alt}>
        {profile.profileImage.isAvailable ? (
          <img
            src={profile.profileImage.src}
            srcSet={profile.profileImage.srcSet}
            sizes="(min-width: 480px) 420px, 90vw"
            width={profile.profileImage.width}
            height={profile.profileImage.height}
            alt={profile.profileImage.alt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        ) : (
          <span>Profile photo coming soon</span>
        )}
      </div>
    </section>
  )
}
