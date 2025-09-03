import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { XLogo } from "./icons/x-logo"
import { LinkedInLogo } from "./icons/linkedin-logo"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Conine Coastal Properties</h3>
            <p className="text-gray-300">
              Your trusted partner for coastal real estate and construction services. Building dreams along the coast.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/coninecoastal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/coninecoastal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/coninecoastal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on X"
              >
                <XLogo className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/coninecoastal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <LinkedInLogo className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/real-estate/buyers" className="hover:text-white transition-colors">
                  Home Buying
                </Link>
              </li>
              <li>
                <Link href="/real-estate/sellers" className="hover:text-white transition-colors">
                  Home Selling
                </Link>
              </li>
              <li>
                <Link href="/renovations" className="hover:text-white transition-colors">
                  Construction & Renovations
                </Link>
              </li>
              <li>
                <Link href="/investor-services" className="hover:text-white transition-colors">
                  Investor Services
                </Link>
              </li>
              <li>
                <Link href="/real-estate/property-management" className="hover:text-white transition-colors">
                  Property Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/resources/buyers-guide" className="hover:text-white transition-colors">
                  Buyer's Guide
                </Link>
              </li>
              <li>
                <Link href="/resources/sellers-checklist" className="hover:text-white transition-colors">
                  Seller's Checklist
                </Link>
              </li>
              <li>
                <Link href="/resources/market-updates" className="hover:text-white transition-colors">
                  Market Updates
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-white transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/roi-calculator" className="hover:text-white transition-colors">
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:5551234567" className="hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <a href="tel:5559876543" className="hover:text-white transition-colors">
                  (555) 987-6543 (Emergency)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:info@coninecoastal.com" className="hover:text-white transition-colors">
                  info@coninecoastal.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span>
                  123 Coastal Drive
                  <br />
                  Seaside, FL 32459
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Conine Coastal Properties. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
