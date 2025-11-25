"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MapPin, Home, Bath, Square, Heart, Phone, Mail } from "lucide-react"

export default function CurrentListingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState("all")
  const [propertyType, setPropertyType] = useState("all")
  const [bedrooms, setBedrooms] = useState("all")

  const listings = [
    {
      id: 1,
      title: "Oceanfront Paradise",
      address: "123 Ocean View Dr, St. Augustine, FL",
      price: "$485,000",
      beds: 3,
      baths: 2,
      sqft: "1,850",
      type: "Single Family",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Stunning oceanfront home with panoramic water views and private beach access.",
      features: ["Ocean Views", "Private Beach", "Updated Kitchen", "Hardwood Floors"],
    },
    {
      id: 2,
      title: "Historic Downtown Charm",
      address: "456 King Street, St. Augustine, FL",
      price: "$325,000",
      beds: 4,
      baths: 2,
      sqft: "2,100",
      type: "Historic Home",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Beautifully restored historic home in the heart of downtown St. Augustine.",
      features: ["Historic Character", "Downtown Location", "Original Details", "Garden Courtyard"],
    },
    {
      id: 3,
      title: "Modern Coastal Living",
      address: "789 Seaside Blvd, Ponte Vedra Beach, FL",
      price: "$595,000",
      beds: 3,
      baths: 3,
      sqft: "2,400",
      type: "Contemporary",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Contemporary home with luxury finishes and resort-style amenities.",
      features: ["Modern Design", "Luxury Finishes", "Pool", "Open Concept"],
    },
    {
      id: 4,
      title: "Waterfront Retreat",
      address: "321 Marina Way, Fernandina Beach, FL",
      price: "$425,000",
      beds: 2,
      baths: 2,
      sqft: "1,650",
      type: "Waterfront",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Peaceful waterfront home with dock and stunning sunset views.",
      features: ["Private Dock", "Sunset Views", "Boat Access", "Screened Porch"],
    },
    {
      id: 5,
      title: "Family-Friendly Neighborhood",
      address: "654 Oak Tree Lane, Jacksonville, FL",
      price: "$285,000",
      beds: 4,
      baths: 3,
      sqft: "2,200",
      type: "Single Family",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Spacious family home in desirable neighborhood with top-rated schools.",
      features: ["Great Schools", "Large Yard", "Updated Kitchen", "Master Suite"],
    },
    {
      id: 6,
      title: "Investment Opportunity",
      address: "987 Rental Row, Jacksonville Beach, FL",
      price: "$195,000",
      beds: 2,
      baths: 1,
      sqft: "1,200",
      type: "Investment",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Perfect rental property near the beach with strong rental history.",
      features: ["Rental Income", "Beach Proximity", "Low Maintenance", "Tenant in Place"],
    },
  ]

  const filteredListings = listings.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.address.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "under-300k" && Number.parseInt(listing.price.replace(/[$,]/g, "")) < 300000) ||
      (priceRange === "300k-500k" &&
        Number.parseInt(listing.price.replace(/[$,]/g, "")) >= 300000 &&
        Number.parseInt(listing.price.replace(/[$,]/g, "")) <= 500000) ||
      (priceRange === "over-500k" && Number.parseInt(listing.price.replace(/[$,]/g, "")) > 500000)

    const matchesType = propertyType === "all" || listing.type.toLowerCase().includes(propertyType.toLowerCase())

    const matchesBeds = bedrooms === "all" || listing.beds.toString() === bedrooms

    return matchesSearch && matchesPrice && matchesType && matchesBeds
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white">
        <img
          src="https://images.unsplash.com/photo-1761895564224-923498d06301?auto=format&fit=crop&w=2000&q=80"
          alt="Coastal Florida neighborhood with modern homes"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18457C]/90 via-[#18457C]/70 to-[#229FD9]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
            Current Listings
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover your perfect home in Northeast Florida's most desirable coastal communities
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From oceanfront estates to charming historic homes, find properties that match your lifestyle and budget.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search by location or property name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-2 border-gray-200 focus:border-[#229FD9]"
                  />
                </div>
              </div>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="h-12 px-4 border-2 border-gray-200 rounded-md focus:border-[#229FD9] focus:outline-none"
              >
                <option value="all">All Prices</option>
                <option value="under-300k">Under $300K</option>
                <option value="300k-500k">$300K - $500K</option>
                <option value="over-500k">Over $500K</option>
              </select>

              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="h-12 px-4 border-2 border-gray-200 rounded-md focus:border-[#229FD9] focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="single family">Single Family</option>
                <option value="historic">Historic</option>
                <option value="contemporary">Contemporary</option>
                <option value="waterfront">Waterfront</option>
                <option value="investment">Investment</option>
              </select>

              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="h-12 px-4 border-2 border-gray-200 rounded-md focus:border-[#229FD9] focus:outline-none"
              >
                <option value="all">Any Bedrooms</option>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
              {filteredListings.length} Properties Found
            </h2>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">Sort by: Price (Low to High)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((listing) => (
              <Card
                key={listing.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#229FD9] text-white">{listing.status}</Badge>
                  <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                      {listing.price}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{listing.title}</h4>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {listing.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      {listing.beds} bed
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {listing.baths} bath
                    </span>
                    <span className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {listing.sqft} sq ft
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{listing.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {listing.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-[#229FD9] hover:bg-[#229FD9]/90 text-white">
                      <Link href="/contact" className="flex items-center justify-center">
                        View Details
                      </Link>
                    </Button>
                    <Button asChild className="flex-1 bg-[#F16622] hover:bg-[#F16622]/90 text-white">
                      <Link href="/contact" className="flex items-center justify-center">
                        Schedule Tour
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us help you find the perfect property. We have access to off-market listings and coming-soon properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Talk with Our Team
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#18457C] hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Request Custom Search
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
