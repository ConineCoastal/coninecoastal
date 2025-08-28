import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conine Coastal - Your Real Estate and Construction Expert",
  description:
    "Expert real estate services and home renovations in Northeast Florida. Combining 20 years of construction expertise with deep market knowledge for maximum value.",
  keywords:
    "real estate, home renovation, construction, Northeast Florida, St. Augustine, coastal homes, property management, investment properties",
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
    description: "Expert real estate services and home renovations in Northeast Florida",
    url: "https://www.coninecoastal.com",
    siteName: "Conine Coastal",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Conine Coastal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conine Coastal - Your Real Estate and Construction Expert",
    description: "Expert real estate services and home renovations in Northeast Florida",
    images: ["/favicon.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
        color: "#1e40af",
      },
    ],
  },
  manifest: "/site.webmanifest",
  generator: "Next.js",
  applicationName: "Conine Coastal",
  referrer: "origin-when-cross-origin",
  category: "business",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional favicon links for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon.png" color="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="theme-color" content="#ffffff" />

        {/* Business-specific meta tags */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Northeast Florida" />
        <meta name="geo.position" content="29.9012;-81.3124" />
        <meta name="ICBM" content="29.9012, -81.3124" />

        {/* Local business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Conine Coastal",
              description: "Expert real estate services and home renovations in Northeast Florida",
              url: "https://www.coninecoastal.com",
              telephone: "(555) 123-4567",
              email: "info@coninecoastal.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "FL",
                addressCountry: "US",
                addressLocality: "Northeast Florida",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.9012",
                longitude: "-81.3124",
              },
              areaServed: {
                "@type": "State",
                name: "Florida",
              },
              serviceType: ["Real Estate Services", "Home Renovation", "Construction", "Property Management"],
              priceRange: "$$",
              image: "https://www.coninecoastal.com/favicon.png",
              logo: "https://www.coninecoastal.com/favicon.png",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-20">
          <Breadcrumb />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
