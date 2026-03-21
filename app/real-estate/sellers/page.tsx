import type { Metadata } from "next"
import SellersClientPage from "./SellersClientPage"

export const metadata: Metadata = {
  title: "Seller Services",
  description: "Sell your Northeast Florida home for top dollar. Expert listing strategies, construction-backed property preparation, and market analysis for First Coast sellers.",
  alternates: { canonical: "/real-estate/sellers" },
  openGraph: {
    title: "Seller Services",
    description: "Sell your Northeast Florida home for top dollar. Expert listing strategies, construction-backed property preparation, and market analysis for First Coast sellers.",
  },
}

export default function SellersPage() {
  return <SellersClientPage />
}
