"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [realEstateOpen, setRealEstateOpen] = useState(false)
  const [renovationOpen, setRenovationOpen] = useState(false)
  const [investorOpen, setInvestorOpen] = useState(false)
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
    setInvestorOpen(false)
    setResourcesOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#18457C] via-[#229FD9] to-[#18457C] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <img src="/conine-coastal-logo.png" alt="Conine Coastal Logo" className="h-10 sm:h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              href="/about"
              className={`font-serif font-medium transition-colors text-sm xl:text-base ${
                isActive("/about") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
              }`}
            >
              About
            </Link>

            {/* Real Estate Services Dropdown */}
            <div className="relative group">
              <Link
                href="/real-estate"
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base ${
                  isActive("/real-estate") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                Real Estate Services
                <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/real-estate/buyers"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    For Buyers
                  </Link>
                  <Link
                    href="/real-estate/sellers"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    For Sellers
                  </Link>
                  <Link
                    href="/real-estate/listings"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Current Listings
                  </Link>
                  <Link
                    href="/real-estate/property-management"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Property Management
                  </Link>
                </div>
              </div>
            </div>

            {/* Construction Services Dropdown */}
            <div className="relative group">
              <Link
                href="/renovations"
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base ${
                  isActive("/renovations") ? "text-[#F16622]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                Construction Services
                <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/renovations/kitchen"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Kitchen Remodeling
                  </Link>
                  <Link
                    href="/renovations/bathroom"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Bathroom Renovations
                  </Link>
                  <Link
                    href="/renovations/repairs"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Home Repairs & Maintenance
                  </Link>
                  <Link
                    href="/renovations/flooring"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Flooring Services
                  </Link>
                  <Link
                    href="/renovations/interior"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Interior Renovations
                  </Link>
                  <Link
                    href="/renovations/emergency"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Emergency Repairs
                  </Link>
                </div>
              </div>
            </div>

            {/* Investor Services Dropdown */}
            <div className="relative group">
              <Link
                href="/investor-services"
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base ${
                  isActive("/investor-services") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                Investor Services
                <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/investor-services/investment"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Investment Services
                  </Link>
                  <Link
                    href="/investor-services/portfolio-management"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Portfolio Management
                  </Link>
                  <Link
                    href="/investor-services/property-analysis"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Property Analysis
                  </Link>
                  <Link
                    href="/investor-services/fix-and-flip"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Fix & Flip Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <Link
                href="/resources"
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base ${
                  isActive("/resources") ? "text-[#229FD9]" : "text-[#18457C] hover:text-[#229FD9]"
                }`}
              >
                Resources
                <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/resources/buyers-guide"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Homebuyer's Guide
                  </Link>
                  <Link
                    href="/resources/sellers-checklist"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Seller's Checklist
                  </Link>
                  <Link
                    href="/resources/renovation-planning"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Renovation Planning
                  </Link>
                  <Link
                    href="/resources/blog"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Blog/News
                  </Link>
                  <Link
                    href="/resources/market-updates"
                    className="block px-4 py-3 text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Market Updates
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={`font-serif font-medium transition-colors text-sm xl:text-base ${
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
              className="flex items-center text-[#18457C] hover:text-[#229FD9] transition-colors touch-manipulation"
            >
              <Phone className="h-3 w-3 xl:h-4 xl:w-4 mr-2" />
              <span className="font-serif font-medium text-sm xl:text-base">(555) 123-4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-md text-[#18457C] hover:text-[#229FD9] hover:bg-gray-50 transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <div className="pb-4 border-b border-gray-100">
              <a
                href="tel:5551234567"
                className="flex items-center justify-center text-[#18457C] text-lg font-serif font-medium py-3 touch-manipulation"
              >
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </a>
            </div>

            <div className="space-y-1">
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                  isActive("/about")
                    ? "text-[#229FD9] bg-blue-50"
                    : "text-[#18457C] hover:text-[#229FD9] hover:bg-gray-50"
                }`}
              >
                About
              </Link>

              {/* Real Estate Services - Mobile Dropdown */}
              <div>
                <button
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/real-estate")
                      ? "text-[#229FD9] bg-blue-50"
                      : "text-[#18457C] hover:text-[#229FD9] hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    if (realEstateOpen) {
                      setRealEstateOpen(false)
                    } else {
                      setRealEstateOpen(true)
                      setRenovationOpen(false)
                      setInvestorOpen(false)
                      setResourcesOpen(false)
                    }
                  }}
                >
                  Real Estate Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${realEstateOpen ? "rotate-180" : ""}`} />
                </button>
                {realEstateOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/real-estate/buyers"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      For Buyers
                    </Link>
                    <Link
                      href="/real-estate/sellers"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      For Sellers
                    </Link>
                    <Link
                      href="/real-estate/listings"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Current Listings
                    </Link>
                    <Link
                      href="/real-estate/property-management"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Property Management
                    </Link>
                  </div>
                )}
              </div>

              {/* Construction Services - Mobile Dropdown */}
              <div>
                <button
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/renovations")
                      ? "text-[#F16622] bg-orange-50"
                      : "text-[#18457C] hover:text-[#229FD9] hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    if (renovationOpen) {
                      setRenovationOpen(false)
                    } else {
                      setRenovationOpen(true)
                      setRealEstateOpen(false)
                      setInvestorOpen(false)
                      setResourcesOpen(false)
                    }
                  }}
                >
                  Construction Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${renovationOpen ? "rotate-180" : ""}`} />
                </button>
                {renovationOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/renovations/kitchen"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Kitchen Remodeling
                    </Link>
                    <Link
                      href="/renovations/bathroom"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Bathroom Renovations
                    </Link>
                    <Link
                      href="/renovations/repairs"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Home Repairs & Maintenance
                    </Link>
                    <Link
                      href="/renovations/flooring"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Flooring Services
                    </Link>
                    <Link
                      href="/renovations/interior"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Interior Renovations
                    </Link>
                    <Link
                      href="/renovations/emergency"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Emergency Repairs
                    </Link>
                  </div>
                )}
              </div>

              {/* Investor Services - Mobile Dropdown */}
              <div>
                <button
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/investor-services")
                      ? "text-[#229FD9] bg-blue-50"
                      : "text-[#18457C] hover:text-[#229FD9] hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    if (investorOpen) {
                      setInvestorOpen(false)
                    } else {
                      setInvestorOpen(true)
                      setRealEstateOpen(false)
                      setRenovationOpen(false)
                      setResourcesOpen(false)
                    }
                  }}
                >
                  Investor Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${investorOpen ? "rotate-180" : ""}`} />
                </button>
                {investorOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/investor-services/investment"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Investment Services
                    </Link>
                    <Link
                      href="/investor-services/portfolio-management"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Portfolio Management
                    </Link>
                    <Link
                      href="/investor-services/property-analysis"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Property Analysis
                    </Link>
                    <Link
                      href="/investor-services/fix-and-flip"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Fix & Flip Services
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources - Mobile Dropdown */}
              <div>
                <button
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/resources")
                      ? "text-[#229FD9] bg-blue-50"
                      : "text-[#18457C] hover:text-[#229FD9] hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    if (resourcesOpen) {
                      setResourcesOpen(false)
                    } else {
                      setResourcesOpen(true)
                      setRealEstateOpen(false)
                      setRenovationOpen(false)
                      setInvestorOpen(false)
                    }
                  }}
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/resources/buyers-guide"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Homebuyer's Guide
                    </Link>
                    <Link
                      href="/resources/sellers-checklist"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Seller's Checklist
                    </Link>
                    <Link
                      href="/resources/renovation-planning"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Renovation Planning
                    </Link>
                    <Link
                      href="/resources/blog"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Blog/News
                    </Link>
                    <Link
                      href="/resources/market-updates"
                      onClick={closeMenu}
                      className="block text-[#707070] hover:text-[#229FD9] hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Market Updates
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                  isActive("/contact")
                    ? "text-[#229FD9] bg-blue-50"
                    : "text-[#18457C] hover:text-[#229FD9] hover:bg-gray-50"
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
