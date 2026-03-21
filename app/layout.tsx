import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { font, serifFont } from "@/styles/fonts"

export const metadata: Metadata = {
  title: {
    default: "Conine Coastal - Your Real Estate and Construction Expert",
    template: "%s | Conine Coastal",
  },
  description:
    "Northeast Florida's premier real estate and construction company. Combining 20 years of construction expertise with professional real estate services for buyers, sellers, and investors.",
  keywords:
    "real estate, construction, Northeast Florida, Jacksonville, St. Augustine, home renovation, property management, investment properties",
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
    title: "Conine Coastal - Your Real Estate and Construction Expert",
    description:
      "Northeast Florida's premier real estate and construction company. Expert services for buyers, sellers, investors, and renovation projects.",
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
    title: "Conine Coastal - Your Real Estate and Construction Expert",
    description:
      "Northeast Florida's premier real estate and construction company. Expert services for buyers, sellers, investors, and renovation projects.",
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
  category: "Real Estate and Construction",
  classification: "Business",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Northeast Florida",
    "geo.position": "30.3322;-81.6557",
    ICBM: "30.3322, -81.6557",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Conine Coastal",
  description:
    "Northeast Florida's premier real estate and construction company. 20+ years of construction expertise with professional real estate services.",
  url: "https://www.coninecoastal.com",
  telephone: "+1-904-624-1722",
  email: "info@coninecoastal.com",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 30.3322, longitude: -81.6557 },
    geoRadius: "80000",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "David Conine",
    jobTitle: "Licensed Realtor & Construction Expert",
  },
  knowsAbout: [
    "Real Estate",
    "Home Renovation",
    "Construction",
    "Property Management",
    "Investment Properties",
  ],
  serviceArea: [
    "Jacksonville, FL",
    "St. Augustine, FL",
    "Ponte Vedra Beach, FL",
    "Amelia Island, FL",
    "Fernandina Beach, FL",
    "Jacksonville Beach, FL",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${font.className} ${serifFont.variable}`}>
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
      </body>
    </html>
  )
}
