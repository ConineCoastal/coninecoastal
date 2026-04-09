import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import { XLogo } from "./icons/x-logo"
import { LinkedInLogo } from "./icons/linkedin-logo"
import NewsletterSignup from "./newsletter-signup"
import ThemeToggle from "./theme-toggle"

export default function Footer() {
  return (
    <footer className="bg-coastal-navy dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup */}
        <div className="border-b border-white/20 pb-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Connected with Conine Coastal Group</h3>
            <p className="text-white/70 text-sm mb-4">
              News, updates, and insights from across our family of companies.
            </p>
            <NewsletterSignup />
            <p className="text-white/40 text-xs mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/favicon.png" alt="Conine Coastal Group Logo" width={48} height={48} className="h-12 sm:h-16 w-auto" />
            </div>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              A family of companies serving Northeast Florida across real estate, construction, development, home services, and travel.
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
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Our Companies</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  href="/companies/real-estate"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Conine Coastal Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/estates"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Conine Coastal Estates
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/development"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Conine Coastal Development
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/home-services"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Conine Coastal Home Services
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/travel"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Conine Coastal Travel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Company</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  About Us
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
                  href="/resources/blog"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Blog/News
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
                  href="/contact"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
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
                  href="/resources"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/market-updates"
                  className="hover:text-white transition-colors text-sm sm:text-base block py-1 touch-manipulation"
                >
                  Market Updates
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
              <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Conine Coastal Group. All rights reserved.</p>
              <p className="text-xs sm:text-sm mt-1">
                Northeast Florida&apos;s Premier Family of Companies
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
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
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
