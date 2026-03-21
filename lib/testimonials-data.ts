export interface Testimonial {
  name: string
  location: string
  service: string
  text: string
  rating: number
  date: string
  source: "Google" | "Zillow" | "Direct"
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    location: "San Marco, Jacksonville",
    service: "Real Estate & Construction",
    text: "Conine Coastal helped us find the perfect fixer-upper and then transformed it into our dream home. Their dual expertise saved us time and money! David spotted foundation issues during the walkthrough that would have cost us $30K after closing.",
    rating: 5,
    date: "November 2024",
    source: "Google",
  },
  {
    name: "Mike Rodriguez",
    location: "Ponte Vedra Beach",
    service: "Investment Property",
    text: "Their construction knowledge helped me identify the best investment opportunities. They knew exactly what renovations would maximize my ROI. David's renovation cost estimates were within 5% of the actual numbers — that kind of accuracy is rare.",
    rating: 5,
    date: "October 2024",
    source: "Google",
  },
  {
    name: "Emily Chen",
    location: "Jacksonville Beach",
    service: "Kitchen Remodel",
    text: "Professional, reliable, and the results exceeded our expectations. Our coastal kitchen is now the heart of our home. The quartz countertops and custom cabinetry are stunning, and the project came in on budget.",
    rating: 5,
    date: "September 2024",
    source: "Google",
  },
  {
    name: "Maria & Carlos Rodriguez",
    location: "St. Augustine",
    service: "Kitchen Renovation",
    text: "David's construction expertise and real estate knowledge helped us make smart renovation choices. Our kitchen remodel added $40K in value for a $25K investment. He steered us away from upgrades that wouldn't pay off.",
    rating: 5,
    date: "August 2024",
    source: "Google",
  },
  {
    name: "Jennifer Thompson",
    location: "Ponte Vedra Beach",
    service: "Whole Home Renovation",
    text: "The quality of work exceeded our expectations. David understood exactly which improvements would give us the best return on investment. Our home appraised for $200K more than we expected after the renovation.",
    rating: 5,
    date: "July 2024",
    source: "Google",
  },
  {
    name: "Robert & Lisa Patel",
    location: "Amelia Island",
    service: "Home Purchase",
    text: "Buying a home on Amelia Island was daunting until we found David. His construction background meant he could evaluate every property we toured with an expert eye. He caught moisture damage that the seller's inspector missed entirely.",
    rating: 5,
    date: "October 2024",
    source: "Zillow",
  },
  {
    name: "James Mitchell",
    location: "Nocatee",
    service: "Bathroom Renovation",
    text: "David and his team transformed our master bathroom into a spa-like retreat. The tile work is flawless, and they handled all the permitting. Project was completed in 4 weeks, right on the timeline he promised.",
    rating: 5,
    date: "September 2024",
    source: "Google",
  },
  {
    name: "Patricia Williams",
    location: "Riverside, Jacksonville",
    service: "Home Sale",
    text: "David's pre-listing renovation strategy was brilliant. He identified exactly which updates would move the needle for buyers. We invested $12K in strategic improvements and sold $28K over asking in just 6 days on market.",
    rating: 5,
    date: "November 2024",
    source: "Google",
  },
  {
    name: "David & Amanda Foster",
    location: "Neptune Beach",
    service: "Fix & Flip",
    text: "As first-time investors, we needed someone who could handle both the purchase and the renovation. David managed the entire process and our flip netted a 22% return. Already looking at our second property with him.",
    rating: 5,
    date: "August 2024",
    source: "Direct",
  },
  {
    name: "Karen O'Brien",
    location: "St. Augustine Beach",
    service: "Exterior Renovation",
    text: "After Hurricane Ian, we needed someone who understood coastal construction. David recommended impact windows and HardiePlank siding that will protect our home for decades. Our insurance premium dropped 30% after the upgrades.",
    rating: 5,
    date: "June 2024",
    source: "Google",
  },
]

export const aggregateRating = {
  totalReviews: testimonials.length,
  averageRating: 5.0,
  fiveStarCount: testimonials.filter((t) => t.rating === 5).length,
  platforms: {
    google: testimonials.filter((t) => t.source === "Google").length,
    zillow: testimonials.filter((t) => t.source === "Zillow").length,
    direct: testimonials.filter((t) => t.source === "Direct").length,
  },
}
