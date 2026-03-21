import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, DollarSign, Search, Shield, Eye, Calculator, MapPin, Home } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Buyer Services",
  description: "Find your dream home on the First Coast with a construction expert's eye. Comprehensive buyer representation, property evaluation, and negotiation support in Northeast Florida.",
  alternates: { canonical: "/real-estate/buyers" },
  openGraph: {
    title: "Buyer Services",
    description: "Find your dream home on the First Coast with a construction expert's eye. Comprehensive buyer representation, property evaluation, and negotiation support in Northeast Florida.",
  },
}

export default function BuyersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Modern coastal home for sale in Northeast Florida - Conine Coastal buyer services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg font-serif">
            Home Buying Made Smarter
          </h1>
          <p className="text-2xl lg:text-3xl mb-12 leading-relaxed drop-shadow-md">
            Why guess at renovation costs when you can know for certain?
          </p>

          <Button asChild size="lg" className="bg-coastal-blue hover:bg-coastal-blue/90 text-white px-10 py-4 text-xl shadow-lg">
            <Link href="/contact?service=buying">Start Your Home Search</Link>
          </Button>
        </div>
      </section>

      {/* The Conine Coastal Buyer Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-coastal-navy mb-4 font-serif">
                The Conine Coastal Buyer Advantage
              </h2>
              <p className="text-xl text-coastal-grey max-w-4xl mx-auto">
                Get the insider advantage that comes from 20 years of construction experience combined with deep real
                estate market knowledge.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Home inspection and evaluation by construction expert in Jacksonville FL"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <FadeIn delay={0}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coastal-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calculator className="h-6 w-6 text-coastal-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-coastal-navy mb-2">Instant Renovation Estimates</h3>
                    <p className="text-coastal-grey leading-relaxed">
                      Walk through any property and get accurate renovation costs on the spot. No more guessing if that
                      kitchen remodel will cost $15,000 or $50,000 - you'll know before you make an offer.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coastal-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-coastal-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-coastal-navy mb-2">Hidden Problem Detection</h3>
                    <p className="text-coastal-grey leading-relaxed">
                      20 years of construction experience means spotting issues before they become expensive surprises.
                      Foundation problems, electrical issues, plumbing concerns - we catch them early.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coastal-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-coastal-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-coastal-navy mb-2">True Value Assessment</h3>
                    <p className="text-coastal-grey leading-relaxed">
                      Understand what a property will really be worth after improvements, not just its current condition.
                      Make offers based on true potential, not surface appearances.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={450}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coastal-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-coastal-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-coastal-navy mb-2">Renovation Timeline Planning</h3>
                    <p className="text-coastal-grey leading-relaxed">
                      Know exactly how long projects will take before you buy. Plan your move-in date with confidence,
                      understanding realistic timelines for any needed improvements.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Buyer Services */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy/5 to-coastal-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-coastal-navy mb-4 font-serif">
                Our Buyer Services
              </h2>
              <p className="text-xl text-coastal-grey">Comprehensive support from search to closing and beyond</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "First-Time Homebuyer Guidance",
                desc: "Navigate the process with confidence, understanding every step from pre-approval to closing.",
              },
              {
                icon: Search,
                title: "Investment Property Evaluation",
                desc: "Identify properties with the best potential for appreciation and rental income.",
                color: "#FFCA05",
              },
              {
                icon: Calculator,
                title: "Fixer-Upper Potential Analysis",
                desc: "See beyond surface issues to identify diamonds in the rough with real potential.",
              },
              {
                icon: MapPin,
                title: "Market Trend Analysis",
                desc: "Understand local market conditions and timing for the best buying opportunities.",
              },
              {
                icon: Shield,
                title: "Neighborhood Expertise",
                desc: "Deep knowledge of Northeast Florida communities from St. Augustine to Amelia Island.",
              },
              {
                icon: CheckCircle,
                title: "Closing Coordination",
                desc: "Smooth transaction management with attention to every detail through closing.",
              },
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 150}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-coastal-blue" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-coastal-navy mb-3 font-serif">
                      {service.title}
                    </h3>
                    <p className="text-coastal-grey text-sm leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-coastal-navy mb-4 font-serif">
                Our Home Buying Process
              </h2>
              <p className="text-xl text-coastal-grey">A proven 5-step approach to finding your perfect home</p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Discuss your needs, budget, and timeline. Understand your financing options and get pre-approved.",
                bg: "bg-coastal-blue",
              },
              {
                step: "02",
                title: "Search Strategy",
                desc: "Target properties that match your goals, including fixer-uppers with potential you might not see.",
                bg: "bg-coastal-orange",
              },
              {
                step: "03",
                title: "Property Evaluation",
                desc: "Professional assessment including renovation potential, hidden issues, and true market value.",
                bg: "bg-coastal-yellow",
              },
              {
                step: "04",
                title: "Negotiation",
                desc: "Leverage our construction knowledge for better deals, factoring in real renovation costs.",
                bg: "bg-coastal-navy",
              },
              {
                step: "05",
                title: "Closing Support",
                desc: "Smooth transaction management with coordination of inspections, appraisals, and final walkthrough.",
                bg: "bg-coastal-grey",
              },
            ].map((step, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="flex items-center space-x-8">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 ${step.bg}`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-coastal-navy mb-2 font-serif">
                      {step.title}
                    </h3>
                    <p className="text-coastal-grey text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy/5 to-coastal-blue/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-coastal-navy mb-4 text-center font-serif">
              Buyer FAQs
            </h2>
            <p className="text-xl text-coastal-grey text-center mb-12">
              Answers to common home buying questions
            </p>
          </FadeIn>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                How does your construction expertise help me as a buyer?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                When you tour homes with us, you get instant renovation cost estimates, hidden problem detection, and a true assessment of what a property will be worth after improvements. This means you can make smarter offers based on real numbers, not guesswork.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                What should I budget for as a first-time homebuyer?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                Beyond the purchase price, plan for closing costs (typically 2-5% of the loan amount), home inspection ($300-500), appraisal ($400-600), and a reserve fund for immediate repairs or improvements. We'll walk you through all costs during your consultation so there are no surprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                How long does the home buying process take?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                From the time you get pre-approved to closing day, the typical timeline is 30-60 days after your offer is accepted. The search phase varies — some buyers find their home in a week, others take a few months. We work at your pace and never pressure you into a decision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                Should I get pre-approved before looking at homes?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                Yes, we strongly recommend it. Pre-approval tells you exactly what you can afford, makes your offer more competitive, and speeds up the closing process. We can connect you with trusted local lenders who offer competitive rates for First Coast buyers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                Can you help me find a home that needs work but has great potential?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                This is one of our biggest strengths. We actively seek out properties where our construction knowledge gives you an edge — homes other buyers pass over because they can't see the potential. We'll tell you exactly what it costs to transform them and how much value you'll gain.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does your construction expertise help me as a buyer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When you tour homes with us, you get instant renovation cost estimates, hidden problem detection, and a true assessment of what a property will be worth after improvements. This means you can make smarter offers based on real numbers, not guesswork."
                }
              },
              {
                "@type": "Question",
                "name": "What should I budget for as a first-time homebuyer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beyond the purchase price, plan for closing costs (typically 2-5% of the loan amount), home inspection ($300-500), appraisal ($400-600), and a reserve fund for immediate repairs or improvements. We'll walk you through all costs during your consultation so there are no surprises."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the home buying process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "From the time you get pre-approved to closing day, the typical timeline is 30-60 days after your offer is accepted. The search phase varies — some buyers find their home in a week, others take a few months. We work at your pace and never pressure you into a decision."
                }
              },
              {
                "@type": "Question",
                "name": "Should I get pre-approved before looking at homes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we strongly recommend it. Pre-approval tells you exactly what you can afford, makes your offer more competitive, and speeds up the closing process. We can connect you with trusted local lenders who offer competitive rates for First Coast buyers."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help me find a home that needs work but has great potential?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This is one of our biggest strengths. We actively seek out properties where our construction knowledge gives you an edge — homes other buyers pass over because they can't see the potential. We'll tell you exactly what it costs to transform them and how much value you'll gain."
                }
              }
            ]
          })
        }}
      />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-coastal-navy mb-8 font-serif">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/renovations" className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-coastal-navy mb-2 font-serif">Renovation Services</h3>
              <p className="text-sm text-coastal-grey">Transform your new home after purchase</p>
            </Link>
            <Link href="/resources/buyers-guide" className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-coastal-navy mb-2 font-serif">Buyer's Guide</h3>
              <p className="text-sm text-coastal-grey">Step-by-step guide for first-time buyers</p>
            </Link>
            <Link href="/roi-calculator" className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-coastal-navy mb-2 font-serif">ROI Calculator</h3>
              <p className="text-sm text-coastal-grey">Estimate renovation return on investment</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coastal-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Start Your Home Search?
          </h2>
          <p className="text-xl text-white/90">
            Let's find your perfect home with the confidence that comes from knowing true costs and potential.
          </p>

          <Button asChild size="lg" className="bg-coastal-blue hover:bg-coastal-blue/90 text-white px-8 py-4 text-lg">
            <Link href="/contact?service=buying">Schedule Buyer Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
