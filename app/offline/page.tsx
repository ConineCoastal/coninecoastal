import type { Metadata } from "next"
import { WifiOff, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Offline",
}

export default function OfflinePage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <WifiOff className="h-16 w-16 text-coastal-grey/40 mx-auto mb-6" />
        <h1 className="text-3xl font-serif font-bold text-coastal-navy mb-4">
          You&apos;re Offline
        </h1>
        <p className="text-coastal-grey mb-8">
          It looks like you&apos;ve lost your internet connection. Check your connection and try again.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Try Again
          </button>
          <div className="flex items-center justify-center text-coastal-grey">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+19046241722" className="hover:text-coastal-navy transition-colors">
              (904) 624-1722
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
