"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ListChecks, Lightbulb, Paintbrush, KeyRound, Camera, Home } from "lucide-react"

export default function SellersChecklistClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1667450799167-09e7dd903e59?auto=format&fit=crop&w=2000&q=80"
          alt="Beautifully staged living room prepared for sale"
          className="absolute inset-0 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18457C]/85 to-[#229FD9]/60 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">The Ultimate Seller's Checklist</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Maximize your home's value and attract top buyers with our proven pre-listing checklist.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-xl">
            Get Free Home Valuation
          </Button>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pre-Listing Checklist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these steps to prepare your home for a successful sale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ListChecks className="h-8 w-8 text-amber-600" />,
                title: "Initial Assessment",
                items: [
                  "Schedule professional home inspection",
                  "Get comparative market analysis",
                  "Review property disclosures",
                  "Gather important documents",
                ],
              },
              {
                icon: <Paintbrush className="h-8 w-8 text-amber-600" />,
                title: "Cosmetic Improvements",
                items: [
                  "Fresh paint throughout",
                  "Deep clean all surfaces",
                  "Update light fixtures",
                  "Replace worn hardware",
                ],
              },
              {
                icon: <Home className="h-8 w-8 text-amber-600" />,
                title: "Curb Appeal",
                items: [
                  "Landscape and lawn care",
                  "Power wash exterior",
                  "Update front door",
                  "Clean windows inside and out",
                ],
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
                title: "Staging Preparation",
                items: [
                  "Declutter all rooms",
                  "Depersonalize spaces",
                  "Arrange furniture optimally",
                  "Add neutral decor accents",
                ],
              },
              {
                icon: <Camera className="h-8 w-8 text-amber-600" />,
                title: "Marketing Preparation",
                items: [
                  "Professional photography",
                  "Virtual tour creation",
                  "Drone exterior shots",
                  "Floor plan drawings",
                ],
              },
              {
                icon: <KeyRound className="h-8 w-8 text-amber-600" />,
                title: "Final Steps",
                items: [
                  "Set competitive listing price",
                  "Schedule listing launch",
                  "Prepare for showings",
                  "Review offers strategy",
                ],
              },
            ].map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{section.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Sell Your Home?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts guide you through the selling process with personalized advice and proven strategies.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
