import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conine Coastal - Your Real Estate and Construction Expert",
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
        url: "/favicon.png",
        width: 1200,
        height: 630,
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
    images: ["/favicon.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "Real Estate and Construction",
  classification: "Business",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Northeast Florida",
    "geo.position": "30.3322;-81.6557",
    ICBM: "30.3322, -81.6557",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#18457C" />
        <meta name="msapplication-TileColor" content="#18457C" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
