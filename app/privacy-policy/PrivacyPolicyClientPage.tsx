"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyClientPage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100 text-center">Effective Date: September 3, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong>Conine Coastal Properties</strong>, we respect your privacy and are committed to protecting
              your personal information. This Privacy Policy explains how we collect, use, and protect your information
              when you visit our website or use our services.
            </p>
          </div>

          {/* What Information Do We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              What Information Do We Collect?
            </h2>
            <p className="text-gray-700 mb-4">We collect information from you when you:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Visit our website</li>
              <li>Fill out contact forms or property inquiry forms</li>
              <li>Subscribe to our newsletter or property alerts</li>
              <li>Schedule property viewings</li>
              <li>Request market evaluations</li>
              <li>Call or email us directly</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information We May Collect:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Property preferences</li>
              <li>Budget range</li>
              <li>Timeline for buying/selling</li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-amber-800">
                <strong>Note:</strong> Any information we request that is not required will be marked as optional.
              </p>
            </div>
          </section>

          {/* How Do We Collect Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              How Do We Collect Information?
            </h2>
            <p className="text-gray-700 mb-4">We obtain your personal information from:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Directly from you:</strong> When you complete forms, call us, or email us
              </li>
              <li>
                <strong>Indirectly from you:</strong> Through cookies and website analytics when you browse our site
              </li>
              <li>
                <strong>Third parties:</strong> Such as MLS systems, public records, or referral partners (only with
                your consent)
              </li>
            </ul>
          </section>

          {/* What Do We Use Your Information For */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              What Do We Use Your Information For?
            </h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>
                <strong>Provide real estate services:</strong> Show you relevant properties, schedule viewings, provide
                market analyses
              </li>
              <li>
                <strong>Communicate with you:</strong> Respond to inquiries, send property alerts, provide updates on
                your transactions
              </li>
              <li>
                <strong>Improve our services:</strong> Better understand what properties and services our clients want
              </li>
              <li>
                <strong>Legal compliance:</strong> Maintain records as required by real estate regulations
              </li>
              <li>
                <strong>Marketing:</strong> Send newsletters or property updates (you can opt out anytime)
              </li>
            </ul>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="text-green-800">
                We will not use your personal information for purposes significantly different from those listed without
                notifying you first.
              </p>
            </div>
          </section>

          {/* How Do We Protect Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              How Do We Protect Your Information?
            </h2>
            <p className="text-gray-700 mb-4">We implement security measures to protect your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Secure servers:</strong> All sensitive information is transmitted using SSL encryption
              </li>
              <li>
                <strong>Access controls:</strong> Only authorized team members can access your personal information
              </li>
              <li>
                <strong>Regular updates:</strong> We keep our security systems current
              </li>
              <li>
                <strong>Data retention:</strong> We only keep your information as long as necessary for business and
                legal purposes
              </li>
            </ul>
          </section>

          {/* Do We Use Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              Do We Use Cookies?
            </h2>
            <p className="text-gray-700 mb-4">Yes. Cookies are small files stored on your device that help us:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>Remember your preferences</li>
              <li>Analyze website traffic</li>
              <li>Improve your browsing experience</li>
              <li>Show you relevant properties</li>
            </ul>
            <p className="text-gray-700">
              You can disable cookies in your browser settings, but this may limit some website functionality.
            </p>
          </section>

          {/* Do We Share Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              Do We Share Your Information?
            </h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-6">
              <p className="text-red-800 font-semibold">We do NOT sell your personal information.</p>
            </div>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>
                <strong>Service providers:</strong> Such as email services, website hosting, or CRM systems (under
                strict confidentiality agreements)
              </li>
              <li>
                <strong>Other real estate professionals:</strong> Only when you've authorized us to do so (like sharing
                your information with a lender you've approved)
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law, court orders, or to protect our rights and
                safety
              </li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-blue-800">
                <strong>MLS and Public Records:</strong> Some property transaction information becomes part of public
                records and MLS systems as required by law and industry standards.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Access:</strong> Request what personal information we have about you
              </li>
              <li>
                <strong>Correct:</strong> Update or correct your personal information
              </li>
              <li>
                <strong>Delete:</strong> Request deletion of your personal information (subject to legal and business
                requirements)
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing emails or newsletters
              </li>
            </ul>
          </section>

          {/* Exercising Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              Exercising Your Rights
            </h2>
            <p className="text-gray-700 mb-4">To exercise these rights, contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <a href="mailto:info@coninecoastal.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  info@coninecoastal.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <a href="tel:1234567890" className="text-blue-600 hover:text-blue-800 font-medium">
                  123-456-7890
                </a>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              We will respond to your request within 30 days and may need to verify your identity before processing
              certain requests.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our services are not directed to children under 13. We do not knowingly collect personal information from
              children under 13. If you believe we have collected information from a child under 13, please contact us
              immediately.
            </p>
          </section>

          {/* Third-Party Websites */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              Third-Party Websites
            </h2>
            <p className="text-gray-700">
              Our website may contain links to other websites (such as mortgage lenders, home inspectors, etc.). This
              privacy policy does not apply to those third-party sites. Please review their privacy policies before
              providing any information.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. When we make changes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>We'll post the updated policy on this page</li>
              <li>We'll update the "Effective Date" at the top</li>
              <li>For significant changes, we may notify you by email</li>
            </ul>
            <p className="text-gray-700">
              Your continued use of our website after changes are posted means you accept the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have questions about this privacy policy, please contact us:</p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Conine Coastal Properties</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <a href="tel:1234567890" className="text-blue-600 hover:text-blue-800 font-medium">
                    123-456-7890
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <a href="mailto:info@coninecoastal.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    info@coninecoastal.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Real Estate Specific Disclosures */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
              Real Estate Specific Disclosures
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">MLS Data:</h3>
                <p className="text-gray-700">
                  Property information displayed on our website comes from Multiple Listing Services (MLS). This
                  information is provided for consumers' personal, non-commercial use and may not be used for any
                  purpose other than identifying properties for potential purchase.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Data:</h3>
                <p className="text-gray-700">
                  Market statistics and property values are estimates based on available data and should not be
                  considered formal appraisals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transaction Records:</h3>
                <p className="text-gray-700">
                  Real estate transactions create public records as required by law. Some information about your
                  transaction may become publicly available through county records and MLS systems.
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">Last Updated: September 3, 2025</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          size="icon"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
