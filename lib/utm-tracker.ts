const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const
const STORAGE_KEY = "cc_utm"

export interface UTMData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  referrer?: string
  landing_page?: string
}

export function captureUTMParams(): void {
  if (typeof window === "undefined") return

  const params = new URLSearchParams(window.location.search)
  const hasUTM = UTM_PARAMS.some((key) => params.has(key))

  if (hasUTM) {
    const data: UTMData = {}
    for (const key of UTM_PARAMS) {
      const value = params.get(key)
      if (value) data[key] = value
    }
    data.referrer = document.referrer || undefined
    data.landing_page = window.location.pathname

    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {
      // Storage unavailable
    }
  } else if (!getStoredUTM()) {
    // No UTM params and nothing stored — capture organic referrer
    const data: UTMData = {
      referrer: document.referrer || undefined,
      landing_page: window.location.pathname,
    }
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {
      // Storage unavailable
    }
  }
}

function getStoredUTM(): UTMData | null {
  if (typeof window === "undefined") return null
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function getUTMData(): UTMData | undefined {
  const data = getStoredUTM()
  if (!data) return undefined
  // Only return if there's meaningful data
  const hasData = Object.values(data).some(Boolean)
  return hasData ? data : undefined
}
