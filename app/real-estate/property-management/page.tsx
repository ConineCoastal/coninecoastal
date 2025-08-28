"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Wrench,
  MapPin,
  Shield,
  Users,
  DollarSign,
  Settings,
  Search,
  FileText,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Download,
  ArrowRight,
} from "lucide-react"
import type React from "react"
import { useState } from "react"

export default function PropertyManagementPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "",
    currentStatus: "",
    currentRent: "",
    timeframe: "",
    comments: "",
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Property management inquiry submitted:", formData)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const services = [
    {
      title: "Tenant Screening & Placement",
      icon: <Users className="h-8 w-8 text-[#229FD9]" />,
      description:
        "Background checks, credit verification, employment verification, professional photography and listing creation, showings and application processing",
    },
    {
      title: "Rent Collection & Financial Management",
      icon: <DollarSign className="h-8 w-8 text-[#229FD9]" />,
      description: "Online rent collection portal, monthly financial statements, annual tax reporting (1099s)",
    },
    {
      title: "Maintenance & Repairs",
      icon: <Wrench className="h-8 w-8 text-[#229FD9]" />,
      description:
        "24/7 emergency maintenance line, network of licensed, insured contractors, in-house construction expertise for major repairs",
    },
    {
      title: "Property Inspections",
      icon: <Search className="h-8 w-8 text-[#229FD9]" />,
      description:
        "Move-in/move-out inspections with photos, regular property condition assessments, preventive maintenance scheduling",
    },
    {
      title: "Legal Compliance & Evictions",
      icon: <FileText className="h-8 w-8 text-[#229FD9]" />,
      description: "Lease agreement preparation, eviction processing when necessary, fair housing law compliance",
    },
    {
      title: "Marketing & Leasing",
      icon: <Settings className="h-8 w-8 text-[#229FD9]" />,
      description: "Professional property marketing, competitive rent analysis, lease renewals and rent adjustments",
    },
    {
      title: "Insurance Claims Assistance",
      icon: <Shield className="h-8 w-8 text-[#229FD9]" />,
      description:
        "Damage assessment and documentation, insurance company coordination, repair oversight and completion",
    },
    {
      title: "Owner Communication",
      icon: <Mail className="h-8 w-8 text-[#229FD9]" />,
      description: "Monthly reporting and updates, online owner portal access, transparent communication on all issues",
    },
  ]

  const testimonials = [
    {
      name: "Patricia Williams",
      title: "Property Owner (3 rental properties)",
      text: "Conine Coastal's construction background has saved me thousands. They caught a foundation issue during their inspection that could have been a major problem. Their proactive approach to maintenance keeps my properties in excellent condition.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "Real Estate Investor",
      text: "After switching from my previous property manager, my vacancy rate dropped significantly. Conine Coastal knows the local market and prices my units competitively while maintaining quality tenants.",
      rating: 5,
    },
    {
      name: "Sarah Rodriguez",
      title: "Multi-property Owner",
      text: "The transparency in their reporting and no markup on repairs policy sets them apart. I always know exactly what's happening with my properties and where my money is going.",
      rating: 5,
    },
  ]

  const serviceAreas = [
    "Jacksonville and surrounding areas",
    "St. Augustine",
    "Ponte Vedra Beach",
    "Fernandina Beach",
    "Orange Park",
    "And surrounding communities",
  ]

  const advantages = [
    "Construction expertise means accurate repair estimates",
    "Local market knowledge maximizes rental income",
    "No markup on repairs - you pay actual contractor costs",
    "Professional real estate license and experience",
    "20+ years of Northeast Florida market experience",
    "Responsive communication and transparent reporting",
    "Technology-enabled for owners and tenants",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-[#229FD9] text-white px-6 py-3 text-lg shadow-lg">
            Property Management Services
          </Badge>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl"
            style={{ fontFamily: "serif" }}
          >
            Professional Property Management with Construction Expertise
          </h1>
          <p className="text-2xl lg:text-3xl text-white/95 mb-8 leading-relaxed drop-shadow-lg">
            Maximize your rental income while we handle the day-to-day management of your Northeast Florida properties
          </p>
          <p className="text-xl text-white/90 mb-12 max-w-5xl mx-auto leading-relaxed drop-shadow-lg">
            Unlike traditional property managers, our 20 years of construction experience means we understand
            maintenance costs and can handle repairs efficiently, saving you time and money.
          </p>
          <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-10 py-4 text-xl shadow-2xl">
            Get Free Property Analysis
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 bg-gradient-to-r from-[#18457C]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              The Conine Coastal Difference
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Our unique combination of property management expertise and construction knowledge delivers superior
              results for property owners.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-10 w-10 text-[#229FD9]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Construction Expertise
                </h3>
                <p className="text-[#707070] leading-relaxed">
                  Our construction background means we spot issues early and fix them right the first time, preventing
                  costly emergency repairs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#F16622]/20 hover:border-[#F16622] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-[#F16622]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Local Market Knowledge
                </h3>
                <p className="text-[#707070] leading-relaxed">
                  Deep knowledge of Northeast Florida rental markets helps us optimize your rental rates and minimize
                  vacancy periods.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#FFCA05]/20 hover:border-[#FFCA05] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#FFCA05]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-[#FFCA05]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Full-Service Management
                </h3>
                <p className="text-[#707070] leading-relaxed">
                  From tenant screening to maintenance coordination, we handle every aspect of property management so
                  you can focus on growing your portfolio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Complete Property Management Services
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              We handle every aspect of property management with the expertise and attention to detail your investment
              deserves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-[#229FD9]/30"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-[#707070] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Transparent, Competitive Pricing
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              No hidden fees or surprise charges. Our pricing is straightforward and competitive.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#18457C] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-serif text-lg">Service</th>
                        <th className="px-6 py-4 text-left font-serif text-lg">Our Rate</th>
                        <th className="px-6 py-4 text-left font-serif text-lg">What's Included</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-[#18457C]">Monthly Management</td>
                        <td className="px-6 py-4 text-[#229FD9] font-bold">8% of collected rent</td>
                        <td className="px-6 py-4 text-[#707070]">
                          Full-service management, tenant placement, maintenance coordination
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-[#18457C]">Tenant Placement Only</td>
                        <td className="px-6 py-4 text-[#229FD9] font-bold">One month's rent</td>
                        <td className="px-6 py-4 text-[#707070]">
                          Screening, placement, lease preparation (no ongoing management)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-[#18457C]">Maintenance & Repairs</td>
                        <td className="px-6 py-4 text-[#229FD9] font-bold">Cost + 0% markup</td>
                        <td className="px-6 py-4 text-[#707070]">
                          We coordinate repairs at actual cost - no hidden markups
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-[#707070] italic">
                Most property management companies charge 10-12% plus markup on repairs. Our construction expertise
                allows us to offer better service at competitive rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              The Conine Coastal Advantage
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Experience the difference that comes from combining property management expertise with construction
              knowledge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                    <p className="text-[#707070] text-lg">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Professional property management"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-2xl font-bold text-[#229FD9] mb-1">8%</div>
                <div className="text-sm text-gray-600">Management fee vs 10-12% industry average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              What Property Owners Say
            </h2>
            <p className="text-xl text-[#707070]">
              Real results from real property owners who trust us with their investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFCA05] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#707070] mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#18457C]">{testimonial.name}</p>
                    <p className="text-sm text-[#707070]">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Serving Northeast Florida
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              We provide professional property management services throughout the region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-[#229FD9] flex-shrink-0" />
                <span className="text-[#707070]">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-[#707070] italic">Contact us to confirm service availability in your specific area.</p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-gradient-to-r from-[#18457C]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Ready to Experience Stress-Free Property Management?
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Getting started is simple. Here's how we make the transition seamless.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#229FD9] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Free Property Analysis
                </h3>
                <p className="text-[#707070] leading-relaxed">
                  We'll evaluate your property and provide a rental rate analysis
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#F16622]/20 hover:border-[#F16622] transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#F16622] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Management Agreement
                </h3>
                <p className="text-[#707070] leading-relaxed">Simple, transparent agreement with competitive rates</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#FFCA05]/20 hover:border-[#FFCA05] transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FFCA05] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Full-Service Management
                </h3>
                <p className="text-[#707070] leading-relaxed">We handle everything while you collect rent checks</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                Get Your Free Property Analysis
              </h2>
              <p className="text-xl text-[#707070] mb-8 leading-relaxed">
                Ready to maximize your rental income with professional property management? Fill out the form and we'll
                provide a comprehensive analysis of your property's rental potential.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-[#F16622] mr-4" />
                  <div>
                    <p className="font-semibold text-[#18457C]">Phone</p>
                    <p className="text-[#707070]">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#F16622] mr-4" />
                  <div>
                    <p className="font-semibold text-[#18457C]">Email</p>
                    <p className="text-[#707070]">properties@coninecoastal.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-6 py-3">
                  <Download className="mr-2 h-5 w-5" />
                  Download Property Management Guide
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                  Property Management Inquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#18457C] mb-1">Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-[#707070]/30 focus:border-[#229FD9]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#18457C] mb-1">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-[#707070]/30 focus:border-[#229FD9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Property Address</label>
                    <Input
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#18457C] mb-1">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none"
                      >
                        <option value="">Select property type</option>
                        <option value="single-family">Single Family</option>
                        <option value="duplex">Duplex</option>
                        <option value="condo">Condo</option>
                        <option value="multi-family">Multi-family</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#18457C] mb-1">Current Status</label>
                      <select
                        name="currentStatus"
                        value={formData.currentStatus}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none"
                      >
                        <option value="">Select current status</option>
                        <option value="vacant">Vacant</option>
                        <option value="owner-occupied">Owner-occupied</option>
                        <option value="currently-rented">Currently rented</option>
                        <option value="under-renovation">Under renovation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#18457C] mb-1">Current Monthly Rent</label>
                      <Input
                        type="text"
                        name="currentRent"
                        value={formData.currentRent}
                        onChange={handleInputChange}
                        placeholder="If applicable"
                        className="border-[#707070]/30 focus:border-[#229FD9]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#18457C] mb-1">
                        How soon do you need services?
                      </label>
                      <select
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none"
                      >
                        <option value="">Select timeframe</option>
                        <option value="immediately">Immediately</option>
                        <option value="within-30-days">Within 30 days</option>
                        <option value="within-90-days">Within 90 days</option>
                        <option value="just-exploring">Just exploring options</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Additional Comments</label>
                    <Textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-3">
                    Get Free Property Analysis
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
