import type { Metadata } from "next"
import TermsOfServiceClientPage from "./TermsOfServiceClientPage"

export const metadata: Metadata = {
  title: "Terms of Service | Conine Coastal Properties",
  description:
    "Terms of Service for Conine Coastal Properties - Legal terms and conditions for using our website and services.",
}

export default function TermsOfServicePage() {
  return <TermsOfServiceClientPage />
}
