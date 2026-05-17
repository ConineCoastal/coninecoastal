import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import { Star, Mail, ArrowRight } from "lucide-react"

// Coming-soon placeholder per ai-infra SYS-011 Q3-R1 Flag #3 (2026-05-17):
// the Conine Coastal Group is pre-launch; client reviews / testimonials do not yet
// exist. The prior /reviews page presented fabricated testimonials sourced from
// `@/lib/testimonials-data` — replaced here with an honest pre-launch placeholder.
// Restore full reviews component (with real testimonials populated) once subsidiaries
// have closed transactions and client letters have been collected per phase below.

export const metadata: Metadata = {
  title: "Client Reviews — Coming Soon",
  description:
    "Client reviews and testimonials for the Conine Coastal family of companies will be published as each subsidiary brand launches. Inquiries welcome via Contact.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Client Reviews — Coming Soon | Conine Coastal",
    description:
      "Client reviews and testimonials will be published as the Conine Coastal subsidiary brands launch. Inquiries welcome.",
  },
}

export default function ReviewsPage() {
  return (
    <main className="bg-white">
      <Breadcrumb />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto text-coastal-orange mb-6" aria-hidden="true" />
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-coastal-navy mb-4">
                Client Reviews — Coming Soon
              </h1>
              <p className="text-xl text-coastal-grey mb-2">Honest, pre-launch.</p>
              <p className="text-base text-coastal-grey max-w-2xl mx-auto">
                The Conine Coastal Group is pre-launch. Client reviews and testimonials will be
                published as each subsidiary brand begins serving clients. We&rsquo;d rather show
                you nothing than show you reviews that don&rsquo;t yet exist.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="mt-12 border-coastal-blue/20">
              <CardContent className="p-8 sm:p-10">
                <h2 className="font-serif text-2xl font-semibold text-coastal-navy mb-4">
                  Launch sequence (planned)
                </h2>
                <ul className="space-y-3 text-coastal-grey">
                  <li>
                    <strong className="text-coastal-navy">Phase 1 (Months 1–6):</strong> Conine
                    Coastal Real Estate — first subsidiary to launch; reviews will publish as
                    transactions close.
                  </li>
                  <li>
                    <strong className="text-coastal-navy">Phase 2 (Months 7–18):</strong> Conine
                    Coastal Home Services — reviews will publish after first service plans
                    activate.
                  </li>
                  <li>
                    <strong className="text-coastal-navy">Phase 3 (Months 19–36):</strong> Conine
                    Coastal Development — investor and partner references will publish
                    post-first-project close.
                  </li>
                  <li>
                    <strong className="text-coastal-navy">Phase 4 (Months 25–36+):</strong> Conine
                    Coastal Estates — project portfolio and client letters publish as builds
                    complete.
                  </li>
                  <li>
                    <strong className="text-coastal-navy">Phase 5:</strong> Conine Coastal Travel —
                    client journeys publish post-first-trip.
                  </li>
                </ul>
                <p className="text-sm text-coastal-grey mt-6 italic">
                  Timing depends on entity formation, licensing, and operational readiness.
                  Phase numbers reference the Conine Coastal Group launch sequencing plan.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-base text-coastal-grey mb-6">
                Looking to engage one of the subsidiaries today? Reach out — we&rsquo;ll match your
                inquiry to the right team.
              </p>
              <Button asChild className="bg-coastal-orange hover:bg-coastal-orange/90 text-white">
                <Link href="/contact" className="inline-flex items-center">
                  <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                  Contact Conine Coastal
                  <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
