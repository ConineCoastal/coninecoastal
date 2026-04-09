"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, ChevronDown, Calendar } from "lucide-react"
import { trackEvent } from "@/lib/track-event"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [companiesOpen, setCompaniesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const closeAllSubmenus = () => {
    setCompaniesOpen(false)
    setResourcesOpen(false)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    closeAllSubmenus()
  }

  const handleSubmenuItemClick = () => {
    closeAllSubmenus()
  }

  const companies = [
    { name: "Conine Coastal Real Estate", href: "/companies/real-estate", description: "Residential & Commercial Real Estate" },
    { name: "Conine Coastal Estates", href: "/companies/estates", description: "Construction & Design-Build" },
    { name: "Conine Coastal Development", href: "/companies/development", description: "Land Development & Planning" },
    { name: "Conine Coastal Home Services", href: "/companies/home-services", description: "Property Maintenance & Repairs" },
    { name: "Conine Coastal Travel", href: "/companies/travel", description: "Vacation Rentals & Experiences" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 shadow-lg z-50">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coastal-navy via-coastal-blue to-coastal-navy opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <Image src="/favicon.png" alt="Conine Coastal Group Logo" width={48} height={48} className="h-10 sm:h-12 w-auto" />
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

            {/* Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllSubmenus()
                setCompaniesOpen(true)
              }}
              onMouseLeave={closeAllSubmenus}
              onFocus={() => {
                closeAllSubmenus()
                setCompaniesOpen(true)
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setCompaniesOpen(false)
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={companiesOpen}
                className={`font-serif font-medium flex items-center transition-colors text-sm xl:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-coastal-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive("/companies") ? "text-coastal-blue" : "text-coastal-navy hover:text-coastal-blue"
                }`}
                onClick={() => {
                  const nextState = !companiesOpen
                  closeAllSubmenus()
                  setCompaniesOpen(nextState)
                }}
              >
                Companies
                <ChevronDown
                  className={`ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform ${companiesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  companiesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  {companies.map((company) => (
                    <Link
                      key={company.href}
                      href={company.href}
                      onClick={handleSubmenuItemClick}
                      className="block px-4 py-3 hover:bg-gray-50 text-sm transition-colors touch-manipulation"
                    >
                      <span className="font-medium text-coastal-navy">{company.name}</span>
                      <span className="block text-xs text-coastal-grey mt-0.5">{company.description}</span>
                    </Link>
                  ))}
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

          {/* Right Side - Phone + Schedule */}
          <div className="hidden lg:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-1">
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

              {/* Companies - Mobile Dropdown */}
              <div>
                <button
                  aria-haspopup="true"
                  aria-expanded={companiesOpen}
                  className={`flex items-center justify-between w-full font-serif font-medium py-3 px-2 rounded-md transition-colors touch-manipulation ${
                    isActive("/companies")
                      ? "text-coastal-blue bg-blue-50"
                      : "text-coastal-navy hover:text-coastal-blue hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    if (companiesOpen) {
                      setCompaniesOpen(false)
                    } else {
                      setCompaniesOpen(true)
                      setResourcesOpen(false)
                    }
                  }}
                >
                  Companies
                  <ChevronDown className={`h-4 w-4 transition-transform ${companiesOpen ? "rotate-180" : ""}`} />
                </button>
                {companiesOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {companies.map((company) => (
                      <Link
                        key={company.href}
                        href={company.href}
                        onClick={closeMenu}
                        className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                      >
                        <span className="block font-medium">{company.name}</span>
                        <span className="block text-xs text-coastal-grey/70 mt-0.5">{company.description}</span>
                      </Link>
                    ))}
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
                      setCompaniesOpen(false)
                    }
                  }}
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/resources"
                      onClick={closeMenu}
                      className="block text-coastal-grey hover:text-coastal-blue hover:bg-gray-50 py-3 px-2 rounded-md transition-colors touch-manipulation"
                    >
                      Overview
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
