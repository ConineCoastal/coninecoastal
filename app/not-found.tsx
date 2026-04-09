import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found | Conine Coastal",
  description: "The page you're looking for doesn't exist. Browse our family of companies serving Northeast Florida.",
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-8xl font-bold text-coastal-blue/20 mb-4 font-serif">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-coastal-navy mb-4 font-serif">
          Page Not Found
        </h1>
        <p className="text-lg text-coastal-grey mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-12">
          <Button asChild className="bg-coastal-blue hover:bg-coastal-blue/90 text-white">
            <Link href="/" className="flex items-center justify-center">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild className="bg-coastal-orange hover:bg-coastal-orange/90 text-white">
            <Link href="/contact" className="flex items-center justify-center">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-coastal-grey mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/companies/real-estate" className="text-coastal-blue hover:underline text-sm">
              Real Estate
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/companies/estates" className="text-coastal-blue hover:underline text-sm">
              Construction
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/companies/development" className="text-coastal-blue hover:underline text-sm">
              Development
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/companies/home-services" className="text-coastal-blue hover:underline text-sm">
              Home Services
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/companies/travel" className="text-coastal-blue hover:underline text-sm">
              Travel
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
