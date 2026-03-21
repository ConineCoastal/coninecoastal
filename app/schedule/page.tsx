import type { Metadata } from "next"
import { Suspense } from "react"
import ScheduleClientPage from "./ScheduleClientPage"

export const metadata: Metadata = {
  title: "Schedule a Free Consultation | Conine Coastal",
  description:
    "Book a free consultation with David Conine for real estate, renovation, or investment services in Northeast Florida. Phone, video, or in-person — your choice.",
  alternates: { canonical: "/schedule" },
  openGraph: {
    title: "Schedule a Free Consultation | Conine Coastal",
    description:
      "Book a free consultation with David Conine for real estate, renovation, or investment services in Northeast Florida.",
  },
}

export default function SchedulePage() {
  return (
    <Suspense>
      <ScheduleClientPage />
    </Suspense>
  )
}
