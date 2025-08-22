"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [realEstateOpen, setRealEstateOpen] = useState(false)
  const [renovationOpen, setRenovationOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setRealEstateOpen(false)
    setRenovationOpen(false)
    setResourcesOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#18457C] via-[#229FD9] to-[#18457C] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" onClick={closeMenu}>
              <img src="/conine-coastal-logo.png" alt="Conine Coastal Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/about"
              className={`font-serif font-medium transition-colors ${
                isActive("/about") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
              }`}
            >
              About
            </Link>

            {/* Real Estate Services Dropdown */}
            <div className="relative group">
              <Link
                href="/real-estate"
                className={`font-serif font-medium flex items-center transition-colors ${
                  isActive("/real-estate") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                Real Estate Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/real-estate/buyers"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    For Buyers
                  </Link>
                  <Link
                    href="/real-estate/sellers"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    For Sellers
                  </Link>
                  <Link
                    href="/real-estate/investment"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Investment Services
                  </Link>
                  <Link
                    href="/real-estate/listings"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Current Listings
                  </Link>
                  <Link
                    href="/real-estate/market-reports"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Market Reports
                  </Link>
                </div>
              </div>
            </div>

            {/* Construction Services Dropdown */}
            <div className="relative group">
              <Link
                href="/renovations"
                className={`font-serif font-medium flex items-center transition-colors ${
                  isActive("/renovations") ? "text-[#F16622]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                Construction Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/renovations/kitchen"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Kitchen Remodeling
                  </Link>
                  <Link
                    href="/renovations/bathroom"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Bathroom Renovations
                  </Link>
                  <Link
                    href="/renovations/repairs"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Home Repairs & Maintenance
                  </Link>
                  <Link
                    href="/renovations/flooring"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Flooring Services
                  </Link>
                  <Link
                    href="/renovations/interior"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Interior Renovations
                  </Link>
                  <Link
                    href="/renovations/emergency"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Emergency Repairs
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <Link
                href="/resources"
                className={`font-serif font-medium flex items-center transition-colors ${
                  isActive("/resources") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/resources/buyers-guide"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Homebuyer's Guide
                  </Link>
                  <Link
                    href="/resources/sellers-checklist"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Seller's Checklist
                  </Link>
                  <Link
                    href="/resources/renovation-planning"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Renovation Planning
                  </Link>
                  <Link
                    href="/resources/blog"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Blog/News
                  </Link>
                  <Link
                    href="/resources/market-updates"
                    className="block px-4 py-2 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50"
                  >
                    Market Updates
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={`font-serif font-medium transition-colors ${
                isActive("/contact") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Phone Only */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:5551234567"
              className="flex items-center text-[#18457C] hover:text-[#229FD9] transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-serif font-medium">(555) 123-4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#18457C] hover:text-[#229FD9] hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <div className="pb-4 border-b border-gray-100">
              <a
                href="tel:5551234567"
                className="flex items-center justify-center text-[#18457C] text-lg font-serif font-medium"
              >
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </a>
            </div>

            <div className="space-y-3">
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block font-serif font-medium py-2 ${
                  isActive("/about") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                About
              </Link>

              {/* Real Estate Services - Mobile Dropdown */}
              <div>
                <Link
                  href="/real-estate"
                  className={`flex items-center justify-between w-full font-serif font-medium py-2 ${
                    isActive("/real-estate") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                  }`}
                  onClick={(e) => {
                    if (realEstateOpen) {
                      e.preventDefault()
                      setRealEstateOpen(!realEstateOpen)
                    } else {
                      closeMenu()
                    }
                  }}
                >
                  Real Estate Services
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setRealEstateOpen(!realEstateOpen)
                    }}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${realEstateOpen ? "rotate-180" : ""}`} />
                  </button>
                </Link>
                {realEstateOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/real-estate/buyers"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      For Buyers
                    </Link>
                    <Link
                      href="/real-estate/sellers"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      For Sellers
                    </Link>
                    <Link
                      href="/real-estate/investment"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Investment Services
                    </Link>
                    <Link
                      href="/real-estate/listings"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Current Listings
                    </Link>
                    <Link
                      href="/real-estate/market-reports"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Market Reports
                    </Link>
                  </div>
                )}
              </div>

              {/* Construction Services - Mobile Dropdown */}
              <div>
                <Link
                  href="/renovations"
                  className={`flex items-center justify-between w-full font-serif font-medium py-2 ${
                    isActive("/renovations") ? "text-[#F16622]" : "text-[#18457C] hover:text-[#229FD9]"
                  }`}
                  onClick={(e) => {
                    if (renovationOpen) {
                      e.preventDefault()
                      setRenovationOpen(!renovationOpen)
                    } else {
                      closeMenu()
                    }
                  }}
                >
                  Construction Services
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setRenovationOpen(!renovationOpen)
                    }}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${renovationOpen ? "rotate-180" : ""}`} />
                  </button>
                </Link>
                {renovationOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/renovations/kitchen"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Kitchen Remodeling
                    </Link>
                    <Link
                      href="/renovations/bathroom"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Bathroom Renovations
                    </Link>
                    <Link
                      href="/renovations/repairs"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Home Repairs & Maintenance
                    </Link>
                    <Link
                      href="/renovations/flooring"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Flooring Services
                    </Link>
                    <Link
                      href="/renovations/interior"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Interior Renovations
                    </Link>
                    <Link
                      href="/renovations/emergency"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Emergency Repairs
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources - Mobile Dropdown */}
              <div>
                <Link
                  href="/resources"
                  className={`flex items-center justify-between w-full font-serif font-medium py-2 ${
                    isActive("/resources") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                  }`}
                  onClick={(e) => {
                    if (resourcesOpen) {
                      e.preventDefault()
                      setResourcesOpen(!resourcesOpen)
                    } else {
                      closeMenu()
                    }
                  }}
                >
                  Resources
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setResourcesOpen(!resourcesOpen)
                    }}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
                  </button>
                </Link>
                {resourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/resources/buyers-guide"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Homebuyer's Guide
                    </Link>
                    <Link
                      href="/resources/sellers-checklist"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Seller's Checklist
                    </Link>
                    <Link
                      href="/resources/renovation-planning"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Renovation Planning
                    </Link>
                    <Link
                      href="/resources/blog"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Blog/News
                    </Link>
                    <Link
                      href="/resources/market-updates"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] py-1"
                    >
                      Market Updates
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block font-serif font-medium py-2 ${
                  isActive("/contact") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
