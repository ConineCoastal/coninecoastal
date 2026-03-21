import type { Metadata } from "next"
import ListingsClientPage from "./ListingsClientPage"

export const metadata: Metadata = {
  title: "Current Listings",
  description: "Browse current real estate listings in Northeast Florida. Oceanfront homes, historic properties, and investment opportunities on the First Coast.",
  alternates: { canonical: "/real-estate/listings" },
  openGraph: {
    title: "Current Listings",
    description: "Browse current real estate listings in Northeast Florida. Oceanfront homes, historic properties, and investment opportunities on the First Coast.",
  },
}

export default function CurrentListingsPage() {
  return <ListingsClientPage />
}
