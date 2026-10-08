export interface CookiePreferences {
  necessary: true
  analytics: boolean
}

export interface StoredCookieConsent {
  version: 1
  updatedAt: string
  preferences: CookiePreferences
}

const STORAGE_KEY = 'vexus_cookie_consent'

export const defaultCookiePreferences = (): CookiePreferences => ({
  necessary: true,
  analytics: false,
})

export function readCookieConsent(): StoredCookieConsent | null {
  if (typeof window === 'undefined') return null

  try {
    const rawConsent = window.localStorage.getItem(STORAGE_KEY)
    if (!rawConsent) return null

    const parsed = JSON.parse(rawConsent) as Partial<StoredCookieConsent>
    if (parsed.version !== 1 || !parsed.preferences) return null

    return {
      version: 1,
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
      preferences: {
        necessary: true,
        analytics: Boolean(parsed.preferences.analytics),
      },
    }
  } catch {
    return null
  }
}

export function saveCookieConsent(preferences: CookiePreferences): StoredCookieConsent {
  const consent: StoredCookieConsent = {
    version: 1,
    updatedAt: new Date().toISOString(),
    preferences: {
      necessary: true,
      analytics: preferences.analytics,
    },
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  return consent
}

export function hasAnalyticsConsent(): boolean {
  return readCookieConsent()?.preferences.analytics === true
}
