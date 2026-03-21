import type { Metadata } from "next"
import InvestorServicesClientPage from "./InvestorServicesClientPage"

export const metadata: Metadata = {
  title: "Investor Services",
  description: "Real estate investment services in Northeast Florida. Property analysis, fix-and-flip guidance, portfolio management, and ROI optimization with construction expertise.",
  alternates: { canonical: "/investor-services" },
  openGraph: {
    title: "Investor Services",
    description: "Real estate investment services in Northeast Florida. Property analysis, fix-and-flip guidance, portfolio management, and ROI optimization with construction expertise.",
  },
}

export default function InvestorServicesPage() {
  return <InvestorServicesClientPage />
}
