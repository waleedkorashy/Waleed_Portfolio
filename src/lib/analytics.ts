type UmamiEventData = Record<string, string | number | boolean>

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: UmamiEventData) => void
    }
  }
}

export function trackEvent(eventName: string, eventData?: UmamiEventData) {
  if (typeof window === 'undefined') return
  window.umami?.track(eventName, eventData)
}
