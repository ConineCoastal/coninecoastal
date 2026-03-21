import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import {
  LayoutDashboard,
  FileText,
  Camera,
  MessageSquare,
  Calendar,
  TrendingUp,
  Bell,
  Shield,
  Phone,
} from "lucide-react"
import PortalSignup from "./PortalSignup"

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Access your project dashboard, track renovation progress, view documents, and communicate with the Conine Coastal team.",
  alternates: { canonical: "/portal" },
  openGraph: {
    title: "Client Portal | Conine Coastal",
    description:
      "Access your project dashboard, track renovation progress, view documents, and communicate with the Conine Coastal team.",
  },
}

const features = [
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Project Dashboard",
    description:
      "Real-time overview of your project status, milestones, and upcoming tasks. See exactly where your renovation or transaction stands.",
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Photo Updates",
    description:
      "Daily photo documentation of renovation progress. See your project come to life with before, during, and after shots.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Document Center",
    description:
      "All your contracts, permits, invoices, and inspection reports in one secure location. Download anytime.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Direct Messaging",
    description:
      "Communicate directly with your project manager. Ask questions, request changes, and get quick responses.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Schedule & Timeline",
    description:
      "View your complete project timeline with key milestones, inspection dates, and estimated completion.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Budget Tracker",
    description:
      "Track spending against your budget in real time. See itemized costs, change orders, and remaining contingency.",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Notifications",
    description:
      "Get instant alerts for milestone completions, inspection results, document uploads, and messages.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Warranty & Support",
    description:
      "Access your warranty documentation and submit support requests after project completion.",
  },
]

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
          alt="Modern dashboard interface on laptop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-coastal-blue text-white px-6 py-2 text-base">Client Portal</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Your Project, Your Dashboard
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Track progress, view documents, and stay connected with your Conine Coastal team — all in one place.
          </p>
        </div>
      </section>

      {/* Portal Access */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-coastal-navy dark:text-white font-serif mb-6">
                Request Portal Access
              </h2>
              <p className="text-coastal-grey dark:text-white/70 mb-6">
                Our client portal is available to active clients with ongoing projects. Enter your details
                below and we&apos;ll set up your account.
              </p>

              <PortalSignup />

              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm text-coastal-grey dark:text-white/60">
                  <strong className="text-coastal-navy dark:text-white">Already have access?</strong>{" "}
                  Your portal login link was sent to your email when your project started. Check your inbox
                  or contact us at{" "}
                  <a href="tel:+19046241722" className="text-coastal-blue hover:underline">
                    (904) 624-1722
                  </a>{" "}
                  for help.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-coastal-navy to-coastal-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-6">What You Get</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <LayoutDashboard className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Real-time project status and milestone tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Camera className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Daily photo updates of your renovation progress</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Secure document storage for contracts and permits</span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Direct messaging with your project manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Budget tracking with real-time cost updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-coastal-navy dark:text-white font-serif mb-4">
              Portal Features
            </h2>
            <p className="text-lg text-coastal-grey dark:text-white/70 max-w-3xl mx-auto">
              Everything you need to stay informed and connected throughout your project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 75}>
                <Card className="h-full hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="text-coastal-blue mb-3">{feature.icon}</div>
                    <CardTitle className="text-coastal-navy dark:text-white font-serif text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-coastal-grey dark:text-white/60">{feature.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">Not a Client Yet?</h2>
          <p className="text-xl text-white/90 mb-8">
            Start your real estate or renovation journey with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/schedule">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
