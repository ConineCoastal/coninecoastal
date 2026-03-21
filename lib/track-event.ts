/**
 * Track custom conversion events for GA4 and Facebook Pixel.
 *
 * Usage:
 *   trackEvent("contact_form_submit", { service: "kitchen-remodeling" })
 *   trackEvent("schedule_consultation", { service: "buying", type: "phone" })
 *   trackEvent("phone_click")
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return

  // Google Analytics 4
  if ("gtag" in window) {
    ;(window as unknown as Record<string, Function>).gtag("event", eventName, params)
  }

  // Facebook Pixel — map to standard events where applicable
  if ("fbq" in window) {
    const fbq = (window as unknown as Record<string, Function>).fbq
    switch (eventName) {
      case "contact_form_submit":
        fbq("track", "Lead", params)
        break
      case "schedule_consultation":
        fbq("track", "Schedule", params)
        break
      case "phone_click":
        fbq("track", "Contact", params)
        break
      default:
        fbq("trackCustom", eventName, params)
    }
  }
}
