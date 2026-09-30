import type { Profile } from '../types/profile'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  profile: Profile
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function Header({ profile }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label={`${profile.preferredName} home`}>
          {profile.preferredName}
        </a>
        <div className="header-actions">
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
