import { useLayoutEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'

export function useScrollReveal() {
  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    if (elements.length === 0) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    const siblingCounts = new Map<Element, number>()

    elements.forEach((element) => {
      const parent = element.parentElement
      const index = parent ? (siblingCounts.get(parent) ?? 0) : 0
      element.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 60}ms`)

      if (parent) {
        siblingCounts.set(parent, index + 1)
      }
    })

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        element.classList.add('is-revealed')
      }
    })

    const root = document.documentElement
    root.classList.add('reveal-enabled')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0 },
    )

    elements.forEach((element) => {
      if (!element.classList.contains('is-revealed')) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
      root.classList.remove('reveal-enabled')
    }
  }, [])
}
