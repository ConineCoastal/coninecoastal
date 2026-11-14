/**
 * QR contact cards (/card for Conine Coastal, /david for David personally) are single-purpose
 * pages opened from a QR code at an event. They render without the site's navigation, footer,
 * newsletter or trackers (components/site-chrome.tsx).
 */
export const BARE_PATHS = ["/card", "/david"] as const

export function isBarePath(pathname: string | null): boolean {
  return !!pathname && BARE_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))
}
