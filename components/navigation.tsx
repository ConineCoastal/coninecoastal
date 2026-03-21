"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, ChevronDown, Calendar } from "lucide-react"
import { trackEvent } from "@/lib/track-event"
import SiteSearch from "./site-search"
import ThemeToggle from "./theme-toggle"

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

  const closeAllSubmenus = () => {
    setRealEstateOpen(false)
    setRenovationOpen(false)
    setInvestorOpen(false)
    setResourcesOpen(false)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    closeAllSubmenus()
  }

  const handleSubmenuItemClick = () => {
    closeAllSubmenus()
  }

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 shadow-lg z-50">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coastal-navy via-coastal-blue to-coastal-navy opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <Image src="/favicon.png" alt="Conine Coastal Logo" width={48} height={48} className="h-10 sm:h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              href="/about"
              className={`font-serif font-medium transition-colors text-sm xl:text-base ${
                isActive("/about") ? "text-coastal-blue" : "text-coastal-navy hover:text-coastal-blue"
              }`}
            >
              About
            </Link>

            {/* Real Estate Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllSubmenus()
                setRealEstateOpen(true)
              }}
              onMouseLeave={closeAllSubmenus}
              onFocus={() => {
                closeAllSubmenus()
                setRealEstateOpen(true)
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setRealEstateOpen(false)
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={realEstateOpen}
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-coastal-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive("/real-estate") ? "text-coastal-blue" : "text-coastal-navy hover:text-coastal-blue"
                }`}
                onClick={() => {
                  const nextState = !realEstateOpen
                  closeAllSubmenus()
                  setRealEstateOpen(nextState)
                }}
              >
                Real Estate Services
                <ChevronDown
                  className={`ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform ${realEstateOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  realEstateOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  <Link
                    href="/real-estate"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/real-estate/buyers"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    For Buyers
                  </Link>
                  <Link
                    href="/real-estate/sellers"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    For Sellers
                  </Link>
                  <Link
                    href="/real-estate/listings"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Current Listings
                  </Link>
                  <Link
                    href="/real-estate/property-management"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Property Management
                  </Link>
                  <Link
                    href="/real-estate/market-reports"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Market Reports
                  </Link>
                </div>
              </div>
            </div>

            {/* Construction Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllSubmenus()
                setRenovationOpen(true)
              }}
              onMouseLeave={closeAllSubmenus}
              onFocus={() => {
                closeAllSubmenus()
                setRenovationOpen(true)
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setRenovationOpen(false)
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={renovationOpen}
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-coastal-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive("/renovations") ? "text-coastal-orange" : "text-coastal-navy hover:text-coastal-blue"
                }`}
                onClick={() => {
                  const nextState = !renovationOpen
                  closeAllSubmenus()
                  setRenovationOpen(nextState)
                }}
              >
                Construction Services
                <ChevronDown
                  className={`ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform ${renovationOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  renovationOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  <Link
                    href="/renovations"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/renovations/kitchen"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Kitchen Remodeling
                  </Link>
                  <Link
                    href="/renovations/bathroom"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Bathroom Renovations
                  </Link>
                  <Link
                    href="/renovations/repairs"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Home Repairs & Maintenance
                  </Link>
                  <Link
                    href="/renovations/flooring"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Flooring Services
                  </Link>
                  <Link
                    href="/renovations/interior"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Interior Renovations
                  </Link>
                  <Link
                    href="/renovations/emergency"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Emergency Repairs
                  </Link>
                  <Link
                    href="/renovations/whole-home"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Whole Home Renovation
                  </Link>
                  <Link
                    href="/renovations/additions"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Home Additions
                  </Link>
                  <Link
                    href="/renovations/exterior"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Exterior Renovation
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <Link
                    href="/renovations/portfolio"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-orange hover:text-coastal-orange/80 hover:bg-orange-50 text-sm font-medium transition-colors touch-manipulation"
                  >
                    Project Portfolio
                  </Link>
                </div>
              </div>
            </div>

            {/* Investor Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllSubmenus()
                setInvestorOpen(true)
              }}
              onMouseLeave={closeAllSubmenus}
              onFocus={() => {
                closeAllSubmenus()
                setInvestorOpen(true)
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setInvestorOpen(false)
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={investorOpen}
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-coastal-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive("/investor-services") ? "text-coastal-blue" : "text-coastal-navy hover:text-coastal-blue"
                }`}
                onClick={() => {
                  const nextState = !investorOpen
                  closeAllSubmenus()
                  setInvestorOpen(nextState)
                }}
              >
                Investor Services
                <ChevronDown
                  className={`ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform ${investorOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  investorOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  <Link
                    href="/investor-services"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/investor-services/investment"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Investment Services
                  </Link>
                  <Link
                    href="/investor-services/portfolio-management"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Portfolio Management
                  </Link>
                  <Link
                    href="/investor-services/property-analysis"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Property Analysis
                  </Link>
                  <Link
                    href="/investor-services/fix-and-flip"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Fix & Flip Services
                  </Link>
                  <Link
                    href="/roi-calculator"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    ROI Calculator
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllSubmenus()
                setResourcesOpen(true)
              }}
              onMouseLeave={closeAllSubmenus}
              onFocus={() => {
                closeAllSubmenus()
                setResourcesOpen(true)
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setResourcesOpen(false)
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-coastal-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive("/resources") ? "text-coastal-blue" : "text-coastal-navy hover:text-coastal-blue"
                }`}
                onClick={() => {
                  const nextState = !resourcesOpen
                  closeAllSubmenus()
                  setResourcesOpen(nextState)
                }}
              >
                Resources
                <ChevronDown
                  className={`ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  resourcesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  <Link
                    href="/resources"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/resources/buyers-guide"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Homebuyer's Guide
                  </Link>
                  <Link
                    href="/resources/sellers-checklist"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Seller's Checklist
                  </Link>
                  <Link
                    href="/resources/renovation-planning"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Renovation Planning
                  </Link>
                  <Link
                    href="/resources/blog"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Blog/News
                  </Link>
                  <Link
                    href="/resources/market-updates"
                    onClick={handleSubmenuItemClick}
                    className="block px-4 py-3 text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                  >
                    Market Updates
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={`font-serif font-medium transition-colors text-sm xl:text-base ${
                isActive("/contact") ? "text-coastal-blue" : "text-coastal-navy hover:text-coastal-blue"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Search + Theme + Phone + Schedule */}
          <div className="hidden lg:flex items-center space-x-4">
            <SiteSearch />
            <ThemeToggle />
            <a
              href="tel:+19046241722"
              onClick={() => trackEvent("phone_click", { location: "nav_desktop" })}
              className="flex items-center text-coastal-navy hover:text-coastal-blue transition-colors touch-manipulation"
            >
              <Phone className="h-3 w-3 xl:h-4 xl:w-4 mr-2" />
              <span className="font-serif font-medium text-sm xl:text-base">(904) 624-1722</span>
            </a>
            <Link
              href="/schedule"
              className="flex items-center bg-coastal-orange hover:bg-coastal-orange/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors touch-manipulation"
            >
              <Calendar className="h-4 w-4 mr-1.5" />
              Schedule
            </Link>
          </div>

          {/* Mobile Menu Button + Search + Theme */}
          <div className="lg:hidden flex items-center gap-1">
            <SiteSearch />
            <ThemeToggle />
            <button
              className="flex items-center justify-center w-12 h-12 rounded-md text-coastal-navy hover:text-coastal-blue hover:bg-gray-50 transition-colors touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <div className="pb-4 border-b border-gray-100">
              <a
                href="tel:+19046241722"
                onClick={() => trackEvent("phone_click", { location: "nav_mobile" })}
                className="flex items-center justify-center text-coastal-navy text-lg font-serif font-medium py-3 touch-manipulation"
              >
                <Phone className="h-5 w-5 mr-2" />
                (904) 624-1722
              </a>
            </div>

            <div className="space-y-1">
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                  isActive("/about")
                    ? "text-coastal-blue bg-blue-50"
                    : "text-coastal-navy hover:text-coastal-blue hover:bg-gray-50"
                }`}
              >
                About
              </Link>

              {/* Real Estate Services - Mobile Dropdown */}
              <div>
                <button
                  aria-haspopup="true"
                  aria-expanded={realEstateOpen}
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/real-estate")
                      ? "text-coastal-blue bg-blue-50"
                      : "text-coastal-navy hover:text-coastal-blue hover:bg-gray-50"
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
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      For Buyers
                    </Link>
                    <Link
                      href="/real-estate/sellers"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      For Sellers
                    </Link>
                    <Link
                      href="/real-estate/listings"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Current Listings
                    </Link>
                    <Link
                      href="/real-estate/property-management"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Property Management
                    </Link>
                    <Link
                      href="/real-estate/market-reports"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Market Reports
                    </Link>
                  </div>
                )}
              </div>

              {/* Construction Services - Mobile Dropdown */}
              <div>
                <button
                  aria-haspopup="true"
                  aria-expanded={renovationOpen}
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/renovations")
                      ? "text-coastal-orange bg-orange-50"
                      : "text-coastal-navy hover:text-coastal-blue hover:bg-gray-50"
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
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Kitchen Remodeling
                    </Link>
                    <Link
                      href="/renovations/bathroom"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Bathroom Renovations
                    </Link>
                    <Link
                      href="/renovations/repairs"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Home Repairs & Maintenance
                    </Link>
                    <Link
                      href="/renovations/flooring"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Flooring Services
                    </Link>
                    <Link
                      href="/renovations/interior"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Interior Renovations
                    </Link>
                    <Link
                      href="/renovations/emergency"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Emergency Repairs
                    </Link>
                    <Link
                      href="/renovations/whole-home"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Whole Home Renovation
                    </Link>
                    <Link
                      href="/renovations/additions"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Home Additions
                    </Link>
                    <Link
                      href="/renovations/exterior"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Exterior Renovation
                    </Link>
                    <div className="border-t border-gray-100 my-1" />
                    <Link
                      href="/renovations/portfolio"
                      onClick={closeMenu}
                      className="block text-coastal-orange font-medium hover:text-coastal-orange/80 hover:bg-orange-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Project Portfolio
                    </Link>
                  </div>
                )}
              </div>

              {/* Investor Services - Mobile Dropdown */}
              <div>
                <button
                  aria-haspopup="true"
                  aria-expanded={investorOpen}
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/investor-services")
                      ? "text-coastal-blue bg-blue-50"
                      : "text-coastal-navy hover:text-coastal-blue hover:bg-gray-50"
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
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Investment Services
                    </Link>
                    <Link
                      href="/investor-services/portfolio-management"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Portfolio Management
                    </Link>
                    <Link
                      href="/investor-services/property-analysis"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Property Analysis
                    </Link>
                    <Link
                      href="/investor-services/fix-and-flip"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Fix & Flip Services
                    </Link>
                    <Link
                      href="/roi-calculator"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      ROI Calculator
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources - Mobile Dropdown */}
              <div>
                <button
                  aria-haspopup="true"
                  aria-expanded={resourcesOpen}
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/resources")
                      ? "text-coastal-blue bg-blue-50"
                      : "text-coastal-navy hover:text-coastal-blue hover:bg-gray-50"
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
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Homebuyer's Guide
                    </Link>
                    <Link
                      href="/resources/sellers-checklist"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Seller's Checklist
                    </Link>
                    <Link
                      href="/resources/renovation-planning"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Renovation Planning
                    </Link>
                    <Link
                      href="/resources/blog"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Blog/News
                    </Link>
                    <Link
                      href="/resources/market-updates"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
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
                    ? "text-coastal-blue bg-blue-50"
                    : "text-coastal-navy hover:text-coastal-blue hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>

              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/schedule"
                  onClick={closeMenu}
                  className="flex items-center justify-center bg-coastal-orange hover:bg-coastal-orange/90 text-white font-medium py-3 px-4 rounded-lg transition-colors touch-manipulation"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
