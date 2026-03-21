import type { Metadata } from "next"
import PropertyManagementClientPage from "./PropertyManagementClientPage"

export const metadata: Metadata = {
  title: "Property Management",
  description: "Professional property management in Northeast Florida. Tenant screening, maintenance coordination, and owner reporting with a construction expert's advantage.",
  alternates: { canonical: "/real-estate/property-management" },
  openGraph: {
    title: "Property Management",
    description: "Professional property management in Northeast Florida. Tenant screening, maintenance coordination, and owner reporting with a construction expert's advantage.",
  },
}

export default function PropertyManagementPage() {
  return <PropertyManagementClientPage />
}
