import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conine Coastal - Real Estate & Renovation Experts | Northeast Florida",
  description:
    "Expert real estate services and home renovations in Northeast Florida. Combining 20 years of construction expertise with deep market knowledge for maximum value.",
  keywords: "real estate, home renovation, construction, Northeast Florida, St. Augustine, coastal homes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
