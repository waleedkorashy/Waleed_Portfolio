import type { Profile } from '../types/profile'

interface HeaderProps {
  profile: Profile
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function Header({ profile }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.preferredName} home`}>
        {profile.preferredName}
      </a>
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
