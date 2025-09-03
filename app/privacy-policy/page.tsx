import type { Metadata } from "next"
import PrivacyPolicyClientPage from "./PrivacyPolicyClientPage"

export const metadata: Metadata = {
  title: "Privacy Policy | Conine Coastal Properties",
  description:
    "Privacy Policy for Conine Coastal Properties - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage />
}
