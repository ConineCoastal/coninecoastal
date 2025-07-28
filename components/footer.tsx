import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#18457C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/conine-coastal-logo.png" alt="Conine Coastal Logo" className="h-16 w-auto" />
            </div>
            <p className="text-white/80 mb-4">Your trusted partner for coastal real estate and home renovations.</p>
            <div className="space-y-2">
              <div className="flex items-center text-white/80">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:9045551212" className="hover:text-white transition-colors">
                  (904) 555-1212
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@coninecoastal.com" className="hover:text-white transition-colors">
                  info@coninecoastal.com
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Northeast Florida</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.instagram.com" className="text-white/60 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.facebook.com" className="text-white/60 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.twitter.com" className="text-white/60 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Real Estate Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/real-estate/buyers" className="hover:text-white transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link href="/real-estate/sellers" className="hover:text-white transition-colors">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link href="/real-estate/investment" className="hover:text-white transition-colors">
                  Investment Services
                </Link>
              </li>
              <li>
                <Link href="/real-estate/listings" className="hover:text-white transition-colors">
                  Current Listings
                </Link>
              </li>
              <li>
                <Link href="/real-estate/market-reports" className="hover:text-white transition-colors">
                  Market Reports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Renovation Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/renovations/kitchen" className="hover:text-white transition-colors">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/renovations/bathroom" className="hover:text-white transition-colors">
                  Bathroom Renovations
                </Link>
              </li>
              <li>
                <Link href="/renovations/repairs" className="hover:text-white transition-colors">
                  Home Repairs & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/renovations/flooring" className="hover:text-white transition-colors">
                  Flooring Services
                </Link>
              </li>
              <li>
                <Link href="/renovations/emergency" className="hover:text-white transition-colors">
                  Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources & Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/resources/buyers-guide" className="hover:text-white transition-colors">
                  Homebuyer's Guide
                </Link>
              </li>
              <li>
                <Link href="/resources/sellers-checklist" className="hover:text-white transition-colors">
                  Seller's Checklist
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-white transition-colors">
                  Blog/News
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-center md:text-left">
              <p>&copy; 2024 Conine Coastal. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
