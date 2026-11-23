import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'

const SECTIONS = [
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'skills', label: 'skills' },
  { id: 'services', label: 'services' },
  { id: 'contact', label: 'contact' },
] as const

const STORAGE_KEY = 'portfolio:viewed-sections:v1'

function readViewed(): Set<string> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()

    const parsed: unknown = JSON.parse(raw)
    return new Set(
      Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === 'string')
        : [],
    )
  } catch {
    return new Set()
  }
}

function writeViewed(viewed: Set<string>) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...viewed]))
  } catch {
    // Ignore storage failures (private mode, quota).
  }
}

export function useSectionTracking() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const viewed = readViewed()
    const labels = new Map<Element, string>()
    const elements: HTMLElement[] = []

    SECTIONS.forEach(({ id, label }) => {
      const element = document.getElementById(id)
      if (!element) return
      labels.set(element, label)
      elements.push(element)
    })

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const label = labels.get(entry.target)
          if (!label || viewed.has(label)) return

          viewed.add(label)
          writeViewed(viewed)
          trackEvent('Section View', { section: label })
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '-15% 0px -15% 0px', threshold: 0 },
    )

    elements.forEach((element) => {
      const label = labels.get(element)
      if (label && !viewed.has(label)) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])
}
