import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Conine Coastal",
  description:
    "Learn how Conine Coastal collects, uses, and protects your personal information across our real estate and construction services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-[#707070]">
            Effective Date: October 30, 2025
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">1. Information We Collect</h2>
          <p className="text-[#505050]">
            We collect personal information that you provide directly to us, including your name, email address, phone
            number, property preferences, and project details. We also gather usage data related to how you interact with
            our website and services to improve the experience we deliver.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">2. How We Use Your Information</h2>
          <p className="text-[#505050]">
            Your information enables us to respond to inquiries, prepare market and renovation analyses, manage projects,
            and keep you informed about services that may be relevant to your goals. We do not sell your personal
            information to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">3. Sharing and Security</h2>
          <p className="text-[#505050]">
            We share data only with trusted partners who assist in delivering our services—such as inspectors, lenders, or
            contractors—and only when necessary. Industry-standard safeguards protect your information, and we limit
            access to authorized personnel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">4. Your Choices</h2>
          <p className="text-[#505050]">
            You may request updates or deletion of your personal data, opt out of marketing communications, or ask for a
            summary of what we store. Contact us using the information below to submit a request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">5. Contact Us</h2>
          <p className="text-[#505050]">
            If you have questions about this policy or how we handle your data, reach out to our team at
            <a href="mailto:info@coninecoastal.com" className="text-[#229FD9] hover:underline ml-1">
              info@coninecoastal.com
            </a>
            or call
            <a href="tel:+19046241722" className="text-[#229FD9] hover:underline ml-1">
              (904) 624-1722
            </a>
            . For additional assistance, you can also
            <Link href="/contact" className="text-[#229FD9] hover:underline ml-1">
              contact us online
            </Link>
            .
          </p>
        </section>

        <footer className="text-sm text-[#909090] text-center">
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or regulatory requirements.
            Significant updates will be posted on this page with a revised effective date.
          </p>
        </footer>
      </div>
    </div>
  )
}
