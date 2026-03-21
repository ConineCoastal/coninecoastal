"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"
import { captureUTMParams } from "@/lib/utm-tracker"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

function AnalyticsPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return

    // Capture UTM parameters for lead tracking
    captureUTMParams()

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // GA4 page view
    if (GA_MEASUREMENT_ID && typeof window !== "undefined" && "gtag" in window) {
      ;(window as unknown as Record<string, Function>).gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }

    // Facebook Pixel page view
    if (FB_PIXEL_ID && typeof window !== "undefined" && "fbq" in window) {
      ;(window as unknown as Record<string, Function>).fbq("track", "PageView")
    }
  }, [pathname, searchParams])

  return null
}

export default function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                send_page_view: true,
              });
            `}
          </Script>
        </>
      )}

      {/* Facebook Pixel */}
      {FB_PIXEL_ID && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* Page view tracking on route changes */}
      <Suspense fallback={null}>
        <AnalyticsPageTracker />
      </Suspense>
    </>
  )
}
