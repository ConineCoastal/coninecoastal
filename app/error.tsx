"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-6xl font-bold text-coastal-orange/30 mb-4 font-serif">Oops</div>
        <h1 className="text-3xl font-bold text-coastal-navy mb-4 font-serif">
          Something Went Wrong
        </h1>
        <p className="text-lg text-coastal-grey mb-8 leading-relaxed">
          We're sorry, but something unexpected happened. Please try again or head back to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-coastal-blue hover:bg-coastal-blue/90 text-white"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button asChild className="bg-coastal-navy hover:bg-coastal-navy/90 text-white">
            <Link href="/" className="flex items-center justify-center">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
