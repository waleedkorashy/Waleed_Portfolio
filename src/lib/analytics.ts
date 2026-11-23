type UmamiEventData = Record<string, string | number | boolean>

export type AnalyticsEvent =
  | 'CV Preview'
  | 'CV Download'
  | 'Project Image Open'
  | 'Project Link'
  | 'GitHub Click'
  | 'LinkedIn Click'
  | 'Email Click'
  | 'Phone Click'
  | 'Nav Click'
  | 'CTA Click'
  | 'Section View'
  | 'Contact Form Submit'

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: UmamiEventData) => void
    }
  }
}

const pending: Array<{ name: AnalyticsEvent; data?: UmamiEventData }> = []
let retryTimer: number | undefined

function flushPending() {
  if (typeof window === 'undefined' || !window.umami?.track) return

  if (retryTimer !== undefined) {
    window.clearInterval(retryTimer)
    retryTimer = undefined
  }

  pending.splice(0).forEach(({ name, data }) => window.umami?.track(name, data))
}

export function trackEvent(name: AnalyticsEvent, data?: UmamiEventData) {
  if (typeof window === 'undefined') return

  if (window.umami?.track) {
    window.umami.track(name, data)
    return
  }

  // The tracker is deferred, so keep early events until it is ready.
  pending.push({ name, data })
  if (retryTimer !== undefined) return

  let attempts = 0
  retryTimer = window.setInterval(() => {
    attempts += 1
    if (window.umami?.track) {
      flushPending()
    } else if (attempts >= 40) {
      window.clearInterval(retryTimer)
      retryTimer = undefined
      pending.length = 0
    }
  }, 250)
}
