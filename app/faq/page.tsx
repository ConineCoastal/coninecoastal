import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import { Phone, Mail, Home, Wrench, TrendingUp, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about real estate, home renovations, investment properties, and construction services in Northeast Florida.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Conine Coastal",
    description:
      "Find answers to common questions about real estate, home renovations, investment properties, and construction services in Northeast Florida.",
  },
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  icon: React.ReactNode
  color: string
  faqs: FAQItem[]
}

const faqCategories: FAQCategory[] = [
  {
    title: "Real Estate",
    icon: <Home className="h-6 w-6" />,
    color: "text-coastal-blue",
    faqs: [
      {
        question: "What areas of Northeast Florida do you serve?",
        answer:
          "We serve the entire First Coast region including Jacksonville and its beaches (Jacksonville Beach, Neptune Beach, Atlantic Beach), Ponte Vedra Beach, Nocatee, St. Augustine, St. Augustine Beach, Amelia Island, Fernandina Beach, and surrounding areas in Duval, St. Johns, and Nassau counties.",
      },
      {
        question: "What makes Conine Coastal different from other real estate agents?",
        answer:
          "Our unique advantage is the combination of 20+ years of construction expertise with professional real estate services. When you tour a home with us, you're getting a realtor who can immediately identify structural issues, estimate renovation costs, and evaluate which improvements will maximize value. Most agents can tell you the price — we can tell you the true cost of ownership.",
      },
      {
        question: "Do I need to be pre-approved for a mortgage before working with you?",
        answer:
          "While you don't need pre-approval to start the conversation, we strongly recommend getting pre-approved before seriously touring homes. Pre-approval gives you a clear budget, makes your offers stronger in competitive situations, and helps us target the right properties for your financial situation. We can recommend trusted local lenders if you need one.",
      },
      {
        question: "How long does it typically take to buy a home on the First Coast?",
        answer:
          "From the start of your search to closing, the process typically takes 60-90 days. This includes 2-4 weeks of active searching, 1-2 weeks for offer negotiation, and 30-45 days from contract to closing for inspections, appraisal, and financing. Cash purchases can close in as little as 2-3 weeks. We'll keep you informed at every step.",
      },
      {
        question: "What should I do to prepare my home for sale?",
        answer:
          "Start with a pre-listing consultation with us. We'll walk your property and identify the specific improvements that will maximize your sale price — and just as importantly, which ones to skip. Generally, focus on curb appeal, decluttering, deep cleaning, and strategic cosmetic updates. Our construction background means we can give you accurate cost estimates for any recommended improvements.",
      },
    ],
  },
  {
    title: "Renovations & Construction",
    icon: <Wrench className="h-6 w-6" />,
    color: "text-coastal-orange",
    faqs: [
      {
        question: "How long does a typical kitchen renovation take?",
        answer:
          "A typical kitchen renovation takes 6-10 weeks depending on the scope. Simple cosmetic updates like cabinet refacing and new countertops can be completed in 3-4 weeks, while a full gut renovation with layout changes takes 8-12 weeks. We provide a detailed timeline during your consultation so you know exactly what to expect.",
      },
      {
        question: "Do I need to move out during a renovation?",
        answer:
          "For most projects, you can stay in your home. We carefully plan work phases to minimize disruption. For whole-home renovations, we may recommend temporary relocation for 2-4 weeks during the most intensive phases. For kitchen renovations, we'll set up a temporary kitchen area so you can still prepare meals. We'll discuss this during planning and help you prepare.",
      },
      {
        question: "How do you handle permits and inspections?",
        answer:
          "We handle all permitting and inspections as part of our service. With 20+ years of construction experience in Northeast Florida, we know the local building codes and requirements in Duval, St. Johns, and Nassau counties. Permit costs are included in your project estimate, and we coordinate all required inspections so you don't have to.",
      },
      {
        question: "What's included in your renovation estimate?",
        answer:
          "Our detailed estimates include all materials, labor, permits, inspections, and project management. We itemize everything so you can see exactly where your money is going. There are no hidden fees. If unexpected issues arise during construction (which can happen, especially in older homes), we discuss them with you before proceeding and get written approval for any changes.",
      },
      {
        question: "Do you provide warranties on your work?",
        answer:
          "Yes. All our renovation work comes with a workmanship warranty, and manufacturer warranties apply to all materials and fixtures we install. We stand behind the quality of our work and are always available if any issues arise after project completion. Specific warranty terms are outlined in your project contract.",
      },
      {
        question: "How do I know which renovations will add the most value?",
        answer:
          "This is exactly where our dual expertise shines. As both a licensed contractor and realtor, David can evaluate your home's current market position and recommend the specific improvements that will deliver the highest ROI for your property, neighborhood, and price point. Not all renovations are created equal — a $50K kitchen remodel makes sense in a $500K home but not in a $200K home.",
      },
      {
        question: "Do you work with coastal-specific materials?",
        answer:
          "Absolutely. Northeast Florida's coastal climate demands special attention to materials. We specify salt-air resistant fixtures, moisture-resistant underlayments, impact-rated windows, and finishes that withstand humidity. We've seen too many renovations fail prematurely because inland-appropriate materials were used in a coastal environment.",
      },
    ],
  },
  {
    title: "Investment Properties",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-coastal-navy",
    faqs: [
      {
        question: "Is Northeast Florida a good market for real estate investment?",
        answer:
          "Northeast Florida offers strong fundamentals for real estate investment: consistent population growth driven by corporate relocations and lifestyle migration, no state income tax, a diverse economy anchored by logistics, healthcare, finance, and military, and year-round tourism in destinations like St. Augustine and Amelia Island. Rental demand remains strong across most submarkets.",
      },
      {
        question: "What's the typical ROI on a fix-and-flip in this area?",
        answer:
          "Well-executed fix-and-flip projects on the First Coast typically yield 15-25% returns after all costs. The key variables are purchase price, renovation scope and accuracy of cost estimates, holding time, and market conditions at sale. Our construction expertise gives us a significant edge in estimating renovation costs accurately, which is often where inexperienced flippers lose money.",
      },
      {
        question: "Can you help me analyze a potential investment property?",
        answer:
          "Yes — property analysis is one of our core services. We evaluate investment opportunities from both a real estate and construction perspective, providing detailed analysis of purchase price vs. market value, estimated renovation costs, projected after-repair value (ARV), expected rental income, cap rate, and cash-on-cash return. Use our online ROI calculator for quick estimates, or schedule a consultation for a detailed analysis.",
      },
      {
        question: "Do you manage rental properties?",
        answer:
          "Yes, we offer property management services for investment properties in Northeast Florida. Our management approach leverages our construction background — we handle maintenance proactively and cost-effectively because we understand buildings, not just leases. Services include tenant screening, rent collection, maintenance coordination, financial reporting, and regular property inspections.",
      },
    ],
  },
  {
    title: "Working with Us",
    icon: <HelpCircle className="h-6 w-6" />,
    color: "text-coastal-grey",
    faqs: [
      {
        question: "How much does a consultation cost?",
        answer:
          "Initial consultations are completely free with no obligation. Whether you're exploring buying, selling, renovating, or investing, we're happy to sit down (in person, by phone, or video) and discuss your goals. We believe in building relationships first and earning your business through expertise and trust.",
      },
      {
        question: "What credentials and licenses do you hold?",
        answer:
          "David Conine holds an active Florida Real Estate license and a Florida General Contractor license, backed by a Construction Management degree from the University of North Florida and a Real Estate Certificate from Harvard University. He carries full general liability and workers' compensation insurance. All licenses can be verified at myfloridalicense.com.",
      },
      {
        question: "Can you handle both the real estate transaction and the renovation?",
        answer:
          "Yes — this is our specialty. We can help you find the right property, negotiate the purchase, plan and execute the renovation, and even list and sell it if you're flipping. Having one team manage the entire process eliminates coordination headaches, reduces costs, and ensures every decision is made with both construction quality and market value in mind.",
      },
      {
        question: "How do I get started?",
        answer:
          "The easiest way is to schedule a free consultation through our website or call us directly at (904) 624-1722. Tell us about your goals — whether that's buying your first home, selling for maximum value, planning a renovation, or building an investment portfolio. We'll take it from there.",
      },
    ],
  },
]

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap((cat) => cat.faqs)

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=80"
          alt="Frequently asked questions about real estate and construction"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-coastal-orange text-white px-6 py-2 text-base">FAQ</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Answers to common questions about real estate, renovations, and investing on the First Coast.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((cat) => (
              <a
                key={cat.title}
                href={`#${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-coastal-navy hover:shadow border border-gray-200 transition-all"
              >
                <span className={cat.color}>{cat.icon}</span>
                {cat.title}
                <span className="text-xs text-coastal-grey">({cat.faqs.length})</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={catIndex * 100}>
              <div
                id={category.title.toLowerCase().replace(/\s+/g, "-")}
                className="mb-12 scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={category.color}>{category.icon}</div>
                  <h2 className="text-2xl font-bold text-coastal-navy font-serif">
                    {category.title}
                  </h2>
                  <Badge variant="outline" className="text-xs">
                    {category.faqs.length} questions
                  </Badge>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${category.title}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-coastal-navy">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-coastal-grey leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help. Schedule a free consultation or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/schedule" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
