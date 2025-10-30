import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Conine Coastal",
  description:
    "Review the terms and conditions that govern your use of Conine Coastal's real estate, construction, and investor services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
            Terms of Service
          </h1>
          <p className="text-lg text-[#707070]">Effective Date: October 30, 2025</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">1. Acceptance of Terms</h2>
          <p className="text-[#505050]">
            By accessing or using our website, services, or digital tools, you agree to comply with these Terms of Service.
            If you do not agree, please discontinue use of our platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">2. Services Provided</h2>
          <p className="text-[#505050]">
            Conine Coastal offers real estate brokerage, construction management, renovation, and investor advisory services
            across Northeast Florida. Project scopes, timing, and deliverables are outlined in individual agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">3. Client Responsibilities</h2>
          <p className="text-[#505050]">
            Clients agree to provide accurate information, maintain required insurance where applicable, and comply with
            project timelines. Delays caused by missing information or approvals may impact schedules and pricing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">4. Limitation of Liability</h2>
          <p className="text-[#505050]">
            While we strive for exceptional results, Conine Coastal is not liable for indirect, incidental, or consequential
            damages arising from service use, construction delays, or third-party actions beyond our control.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">5. Updates to These Terms</h2>
          <p className="text-[#505050]">
            We may revise these Terms periodically. Changes will become effective upon posting to this page. Your continued
            use of our services after updates constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#18457C]">6. Contact</h2>
          <p className="text-[#505050]">
            For questions about these Terms, email
            <a href="mailto:info@coninecoastal.com" className="text-[#229FD9] hover:underline ml-1">
              info@coninecoastal.com
            </a>
            , call
            <a href="tel:+19046241722" className="text-[#229FD9] hover:underline ml-1">
              (904) 624-1722
            </a>
            , or
            <Link href="/contact" className="text-[#229FD9] hover:underline ml-1">
              contact us online
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
