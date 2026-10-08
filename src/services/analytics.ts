const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let isLoaded = false

function disableKey() {
  return GA_MEASUREMENT_ID ? `ga-disable-${GA_MEASUREMENT_ID}` : ''
}

function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || isLoaded || typeof window === 'undefined') return

  window.dataLayer = window.dataLayer ?? []
  window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args))
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`
  document.head.appendChild(script)

  isLoaded = true
}

export function applyAnalyticsConsent(enabled: boolean) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return

  ;(window as unknown as Record<string, boolean>)[disableKey()] = !enabled

  if (enabled) {
    loadGoogleAnalytics()
  }
}

export function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID || !isLoaded || typeof window === 'undefined') return

  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}
