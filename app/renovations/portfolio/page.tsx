import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import PortfolioClientPage from "./PortfolioClientPage"

export const metadata: Metadata = {
  title: "Project Portfolio | Before & After Renovation Gallery",
  description:
    "Browse our before and after renovation portfolio showcasing kitchen remodels, bathroom transformations, whole-home renovations, and more across Northeast Florida. See the Conine Coastal difference.",
  alternates: { canonical: "/renovations/portfolio" },
  openGraph: {
    title: "Project Portfolio | Before & After Renovation Gallery",
    description:
      "Browse our before and after renovation portfolio showcasing kitchen remodels, bathroom transformations, whole-home renovations, and more across Northeast Florida.",
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <PortfolioClientPage />
    </div>
  )
}
