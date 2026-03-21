import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import { XLogo } from "./icons/x-logo"
import { LinkedInLogo } from "./icons/linkedin-logo"
import NewsletterSignup from "./newsletter-signup"

export default function Footer() {
  return (
    <footer className="bg-coastal-navy dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup */}
        <div className="border-b border-white/20 pb-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Get First Coast Market Insights</h3>
            <p className="text-white/70 text-sm mb-4">
              Monthly market updates, renovation tips, and expert advice delivered to your inbox.
            </p>
            <NewsletterSignup />
            <p className="text-white/40 text-xs mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/favicon.png" alt="Conine Coastal Logo" width={48} height={48} className="h-12 sm:h-16 w-auto" />
            </div>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              Your trusted partner for coastal real estate and home renovations in Northeast Florida.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a
                  href="tel:+19046241722"
                  className="hover:text-white transition-colors text-sm sm:text-base touch-manipulation"
                >
                  (904) 624-1722
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@coninecoastal.com"
                  className="hover:text-white transition-colors text-sm sm:text-base break-all touch-manipulation"
                >
                  info@coninecoastal.com
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Northeast Florida</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.instagram.com/coninecoastal"
                className="text-white/60 hover:text-white transition-colors p-2 -m-2 touch-manipulation"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/coninecoastal"
                className="text-white/60 hover:text-white transition-colors p-2 -m-2 touch-manipulation"
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/coninecoastal"
                className="text-white/60 hover:text-white transition-colors p-2 -m-2 touch-manipulation"
                aria-label="Follow us on X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XLogo className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/coninecoastal"
                className="text-white/60 hover:text-white transition-colors p-2 -m-2 touch-manipulation"
                aria-label="Follow us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogo className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Real Estate Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  href="/real-estate/buyers"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  For Buyers
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate/sellers"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  For Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate/listings"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Current Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate/property-management"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate/market-reports"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Market Reports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Construction Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  href="/renovations/kitchen"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link
                  href="/renovations/bathroom"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Bathroom Renovations
                </Link>
              </li>
              <li>
                <Link
                  href="/renovations/repairs"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Home Repairs & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/renovations/flooring"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Flooring Services
                </Link>
              </li>
              <li>
                <Link
                  href="/renovations/interior"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Interior Renovations
                </Link>
              </li>
              <li>
                <Link
                  href="/renovations/emergency"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Emergency Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/renovations/whole-home"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Whole Home Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/renovations/additions"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Home Additions
                </Link>
              </li>
              <li>
                <Link
                  href="/renovations/exterior"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Exterior Renovation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Investor Services & Resources</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  href="/investor-services/investment"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Investment Services
                </Link>
              </li>
              <li>
                <Link
                  href="/investor-services/portfolio-management"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link
                  href="/investor-services/property-analysis"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Property Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/roi-calculator"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/buyers-guide"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Homebuyer's Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/sellers-checklist"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Seller's Checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/blog"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Blog/News
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portal"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-center md:text-left">
              <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Conine Coastal. All rights reserved.</p>
              <p className="text-xs sm:text-sm mt-1">
                Licensed Real Estate & Construction Services | Northeast Florida
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/privacy-policy"
                className="text-white/60 hover:text-white text-sm transition-colors text-center py-2 touch-manipulation"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-white/60 hover:text-white text-sm transition-colors text-center py-2 touch-manipulation"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-white/60 hover:text-white text-sm transition-colors text-center py-2 touch-manipulation"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
