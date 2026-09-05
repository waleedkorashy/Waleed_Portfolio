import type { Profile } from '../types/profile'

interface FooterProps {
  profile: Profile
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        {profile.preferredName} - {profile.targetRole}
      </p>
    </footer>
  )
}
