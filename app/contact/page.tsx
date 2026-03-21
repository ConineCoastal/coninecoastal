import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Conine Coastal for real estate and renovation services in Northeast Florida. Schedule a consultation or request a free estimate.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with Conine Coastal for real estate and renovation services in Northeast Florida. Schedule a consultation or request a free estimate.",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
