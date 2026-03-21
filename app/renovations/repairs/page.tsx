import type { Metadata } from "next"
import RepairsClientPage from "./RepairsClientPage"

export const metadata: Metadata = {
  title: "Home Repairs & Maintenance",
  description: "Professional home repair and maintenance services in Northeast Florida. From minor fixes to major structural repairs, handled by experienced construction professionals.",
  alternates: { canonical: "/renovations/repairs" },
  openGraph: {
    title: "Home Repairs & Maintenance",
    description: "Professional home repair and maintenance services in Northeast Florida. From minor fixes to major structural repairs, handled by experienced construction professionals.",
  },
}

export default function HomeRepairsMaintenancePage() {
  return <RepairsClientPage />
}
