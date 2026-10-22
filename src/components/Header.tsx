import { useEffect, useRef, useState } from 'react'
import type { Profile } from '../types/profile'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  profile: Profile
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Header({ profile }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)')
    const onChange = () => {
      if (desktop.matches) setIsMenuOpen(false)
    }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  const openMenu = () => {
    setIsMenuOpen(true)
    requestAnimationFrame(() => {
      navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    })
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      menuButtonRef.current?.focus()
      return
    }
    openMenu()
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const target = document.querySelector<HTMLElement>(href)
    if (!target) return
    target.tabIndex = -1
    requestAnimationFrame(() => target.focus({ preventScroll: true }))
  }

  return (
    <header ref={headerRef} className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#top"
          aria-label={`${profile.preferredName} home`}
          onClick={() => setIsMenuOpen(false)}
        >
          {profile.preferredName}
        </a>
        <div className="header-actions">
          <nav
            ref={navRef}
            id="primary-navigation"
            className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
            aria-label="Main navigation"
          >
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => handleNavClick(item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
