import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import Analytics from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import PWARegister from "@/components/pwa-register"
import JsonLd from "@/components/json-ld"
import { siteGraph } from "@/lib/schema"
import { font, serifFont } from "@/styles/fonts"

export const metadata: Metadata = {
  title: {
    default: "Conine Coastal Group - Northeast Florida's Premier Family of Companies",
    template: "%s | Conine Coastal Group",
  },
  description:
    "Conine Coastal Group is a family of companies serving Northeast Florida across real estate, construction, land development, home services, and travel & hospitality.",
  keywords:
    "Conine Coastal Group, Northeast Florida, Jacksonville, St. Augustine, real estate, construction, land development, home services, travel, holding company",
  authors: [{ name: "Conine Coastal" }],
  creator: "Conine Coastal",
  publisher: "Conine Coastal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.coninecoastal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Conine Coastal Group - Northeast Florida's Premier Family of Companies",
    description:
      "A family of companies serving Northeast Florida across real estate, construction, land development, home services, and travel & hospitality.",
    url: "https://www.coninecoastal.com",
    siteName: "Conine Coastal",
    images: [
      {
        url: "/conine-coastal-logo.png",
        alt: "Conine Coastal - Real Estate and Construction Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conine Coastal Group - Northeast Florida's Premier Family of Companies",
    description:
      "A family of companies serving Northeast Florida across real estate, construction, land development, home services, and travel & hospitality.",
    images: ["/conine-coastal-logo.png"],
    creator: "@coninecoastal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Holding Company",
  classification: "Business",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Northeast Florida",
    "geo.position": "30.3322;-81.6557",
    ICBM: "30.3322, -81.6557",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#18457C" />
        <meta name="msapplication-TileColor" content="#18457C" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <JsonLd data={siteGraph} />
      </head>
      <body className={`${font.className} ${serifFont.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-coastal-navy focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm"
          >
            Skip to main content
          </a>
          <Navigation />
          <div className="flex min-h-screen flex-col">
            <div className="h-16 sm:h-20" aria-hidden="true" />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
          <BackToTop />
          <Analytics />
          <PWARegister />
        </ThemeProvider>
      </body>
    </html>
  )
}
