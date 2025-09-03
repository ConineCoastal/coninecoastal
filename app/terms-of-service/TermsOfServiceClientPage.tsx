"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServiceClientPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight tracking-normal">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-200 text-center leading-relaxed font-semibold">
            Effective Date: September 3, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-10 p-6 bg-slate-50 rounded-lg border-l-4 border-slate-600">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms of Service for Conine Coastal Properties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conine Coastal Properties ("Company," "we," "us," or "our") operates this website to provide online access
              to information about our real estate services, property listings, and market information (the "Services").
              By accessing and using this website, you agree to each of the terms and conditions set forth herein
              ("Terms of Service").
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Service at any time without prior notice. Your continued use
              of the website following any modifications constitutes your agreement to follow and be bound by the Terms
              of Service as modified.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mt-4">
              <p className="text-amber-800 font-semibold">
                BY USING THIS WEBSITE, YOU AGREE TO THESE TERMS OF SERVICE. IF YOU DO NOT AGREE, DO NOT USE THE WEBSITE.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                1
              </span>
              Use of Website
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You may use this website and the information, images, property listings, and other content (the
                "Content") solely for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Personal, non-commercial purposes</li>
                <li>Researching properties for potential purchase or sale</li>
                <li>Learning about our real estate services</li>
                <li>Contacting us for legitimate business purposes</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-6">
                <h3 className="font-semibold text-red-800 mb-2">You may NOT:</h3>
                <ul className="list-disc list-inside text-red-700 space-y-1 ml-4">
                  <li>Copy, distribute, or republish property listings without permission</li>
                  <li>Use automated systems (bots, scrapers) to collect data from our website</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Use the website for any illegal or unauthorized purpose</li>
                  <li>Interfere with the website's security or functionality</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                No right, title, or interest in any Content is transferred to you. We retain complete ownership and
                intellectual property rights in all Content.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                2
              </span>
              Property Listings and MLS Data
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Information:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Property listings are provided for informational purposes only</li>
                  <li>Listings may be removed, changed, or become unavailable without notice</li>
                  <li>We do not guarantee the accuracy, completeness, or timeliness of listing information</li>
                  <li>
                    Property information comes from Multiple Listing Services (MLS) and other sources believed reliable
                    but not guaranteed
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">MLS Usage:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>MLS data is provided for consumers' personal, non-commercial use only</li>
                  <li>You may not use MLS data for any commercial purpose without authorization</li>
                  <li>Reproduction or redistribution of MLS data is prohibited</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                3
              </span>
              Real Estate Services Disclaimer
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Professional Relationship:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Viewing this website does not create a real estate professional relationship</li>
                  <li>We are not your agent or representative until a formal agreement is signed</li>
                  <li>Information provided is not legal, financial, or investment advice</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Values and Market Data:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Market statistics and property valuations are estimates only</li>
                  <li>Formal appraisals should be obtained for accurate property values</li>
                  <li>Market conditions change frequently; information may become outdated</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transaction Representation:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>We may represent buyers, sellers, or both in real estate transactions</li>
                  <li>Dual agency relationships will be disclosed as required by law</li>
                  <li>Our fiduciary duties vary depending on our representation role</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                4
              </span>
              Copyright and Intellectual Property
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Content:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All website content is protected by copyright laws</li>
                  <li>Content belongs to Conine Coastal Properties or licensed third parties</li>
                  <li>You may view and print content for personal use only</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Photos and Materials:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Property photos and marketing materials are owned by us or used with permission</li>
                  <li>Unauthorized use of photos or marketing materials is prohibited</li>
                  <li>Some photos may be digitally enhanced or staged</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Trademarks:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Company name, logos, and trademarks may not be used without written permission</li>
                  <li>MLS and other third-party trademarks remain property of their respective owners</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                5
              </span>
              User Conduct
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-3">You agree to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Use the website only for lawful purposes</li>
                  <li>Provide accurate information when contacting us</li>
                  <li>Respect the privacy and property rights of others</li>
                  <li>Not interfere with website operations or security</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h3 className="font-semibold text-red-800 mb-2">Prohibited Activities:</h3>
                <ul className="list-disc list-inside text-red-700 space-y-1 ml-4">
                  <li>Harassment or inappropriate communication with our staff</li>
                  <li>Submitting false or misleading information</li>
                  <li>Attempting to bypass security measures</li>
                  <li>Using the website to compete with our business</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                6
              </span>
              Privacy and Data Collection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of this website is also governed by our Privacy Policy. By using this website, you consent to our
              collection and use of your information as described in our Privacy Policy.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                7
              </span>
              Third-Party Websites
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites (lenders, inspectors, contractors, etc.). These
              links are provided for convenience only. We do not endorse or take responsibility for the content, privacy
              policies, or practices of third-party websites.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                8
              </span>
              Disclaimers and Warranties
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Website "As Is":</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We provide this website and all content "AS IS" and "AS AVAILABLE" without warranties of any kind,
                  either express or implied, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Merchantability or fitness for a particular purpose</li>
                  <li>Accuracy, completeness, or timeliness of information</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security or freedom from viruses</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Real Estate Market Disclaimers:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Real estate markets are subject to change</li>
                  <li>Property values may fluctuate</li>
                  <li>Market conditions affect buying and selling opportunities</li>
                  <li>Past performance does not guarantee future results</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                9
              </span>
              Limitation of Liability
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, Conine Coastal Properties shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Any direct, indirect, incidental, consequential, or punitive damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Errors or omissions in property information</li>
                <li>Technical problems or website downtime</li>
                <li>Actions of third parties or linked websites</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mt-4">
                <h3 className="font-semibold text-amber-800 mb-2">Maximum Liability:</h3>
                <p className="text-amber-700">
                  In jurisdictions that do not allow exclusion of liability, our total liability shall not exceed
                  $100.00.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                10
              </span>
              Indemnification
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless Conine Coastal Properties, its employees, agents, and
                affiliates from any claims, damages, losses, or expenses (including attorney fees) arising from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Your use or misuse of the website</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any third-party rights</li>
                <li>Any false or misleading information you provide</li>
              </ul>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                11
              </span>
              User Submissions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Information You Provide:</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you contact us or submit information through our website:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>You grant us the right to use your information to provide services</li>
                  <li>You warrant that your information is accurate and lawful</li>
                  <li>You consent to our retention and use of your information per our Privacy Policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Feedback and Ideas:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Any feedback, suggestions, or ideas you provide become our property</li>
                  <li>We may use your feedback without compensation or acknowledgment</li>
                  <li>Do not submit confidential or proprietary information unless requested</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                12
              </span>
              Compliance with Real Estate Laws
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Licensing:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>We are licensed real estate professionals in the states where we practice</li>
                  <li>All transactions are subject to applicable real estate laws and regulations</li>
                  <li>Fair housing laws apply to all our services and interactions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Disclosure Requirements:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>We will provide all required disclosures as mandated by law</li>
                  <li>Agency relationships will be confirmed in writing</li>
                  <li>Material facts about properties will be disclosed as required</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                13
              </span>
              Dispute Resolution
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law:</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service are governed by the laws of the state where our business is located, without
                  regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution:</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Any disputes arising from your use of this website or our services shall be resolved through:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                  <li>Good faith negotiation</li>
                  <li>Mediation if negotiation fails</li>
                  <li>Binding arbitration if mediation fails</li>
                  <li>Court proceedings only if arbitration is unavailable</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 14 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300 flex items-center">
              <span className="bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                14
              </span>
              General Provisions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entire Agreement:</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you
                  and Conine Coastal Properties regarding use of this website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Severability:</h3>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms of Service is found invalid or unenforceable, the remaining provisions
                  will continue in full effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Waiver:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our failure to enforce any provision does not constitute a waiver of that provision or any other
                  provision.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Updates:</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms of Service at any time. Continued use of the website constitutes acceptance
                  of updated terms.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-300">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">If you have questions about these Terms of Service, please contact us:</p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Conine Coastal Properties</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-slate-600 mr-3" />
                  <a href="tel:1234567890" className="text-slate-600 hover:text-slate-800 font-medium">
                    123-456-7890
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-600 mr-3" />
                  <a href="mailto:info@coninecoastal.com" className="text-slate-600 hover:text-slate-800 font-medium">
                    info@coninecoastal.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t-2 border-slate-200 pt-8 text-center">
            <p className="text-gray-500 text-sm mb-2">Last Updated: September 3, 2025</p>
            <p className="text-gray-500 text-sm">© 2025 Conine Coastal Properties. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-slate-600 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          size="icon"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
