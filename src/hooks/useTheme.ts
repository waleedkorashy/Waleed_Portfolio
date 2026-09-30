import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function getInitialDark(): boolean {
  if (typeof window === 'undefined') return false
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      window.localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
      return next
    })
  }, [])

  return { isDark, toggle }
}