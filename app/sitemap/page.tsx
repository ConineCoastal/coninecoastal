import type { Metadata } from "next"
import Link from "next/link"

const sitemapLinks = [
  {
    title: "Home",
    items: [
      { label: "Overview", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Real Estate",
    items: [
      { label: "Real Estate Services", href: "/real-estate" },
      { label: "For Buyers", href: "/real-estate/buyers" },
      { label: "For Sellers", href: "/real-estate/sellers" },
      { label: "Current Listings", href: "/real-estate/listings" },
      { label: "Property Management", href: "/real-estate/property-management" },
      { label: "Market Reports", href: "/real-estate/market-reports" },
    ],
  },
  {
    title: "Renovations",
    items: [
      { label: "Renovation Services", href: "/renovations" },
      { label: "Kitchen Remodeling", href: "/renovations/kitchen" },
      { label: "Bathroom Renovations", href: "/renovations/bathroom" },
      { label: "Whole-Home Remodeling", href: "/renovations/whole-home" },
      { label: "Emergency Repairs", href: "/renovations/emergency" },
    ],
  },
  {
    title: "Investor Services",
    items: [
      { label: "Overview", href: "/investor-services" },
      { label: "Investment Services", href: "/investor-services/investment" },
      { label: "Portfolio Management", href: "/investor-services/portfolio-management" },
      { label: "Property Analysis", href: "/investor-services/property-analysis" },
      { label: "Fix & Flip", href: "/investor-services/fix-and-flip" },
      { label: "ROI Calculator", href: "/roi-calculator" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Resource Hub", href: "/resources" },
      { label: "Buyer's Guide", href: "/resources/buyers-guide" },
      { label: "Seller's Checklist", href: "/resources/sellers-checklist" },
      { label: "Renovation Planning", href: "/resources/renovation-planning" },
      { label: "Blog & News", href: "/resources/blog" },
      { label: "Market Updates", href: "/resources/market-updates" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
]

export const metadata: Metadata = {
  title: "Sitemap | Conine Coastal",
  description: "Quickly navigate to any Conine Coastal page, including real estate services, renovation offerings, and resources.",
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
            Sitemap
          </h1>
          <p className="text-lg text-[#707070]">
            Explore every section of Conine Coastal in a single view.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {sitemapLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#18457C]">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[#229FD9] hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="text-center text-sm text-[#909090]">
          <p>
            Need help finding something specific? Email
            <a href="mailto:info@coninecoastal.com" className="text-[#229FD9] hover:underline ml-1">
              info@coninecoastal.com
            </a>
            or call
            <a href="tel:+19046241722" className="text-[#229FD9] hover:underline ml-1">
              (904) 624-1722
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}
