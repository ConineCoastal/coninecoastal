/**
 * The conference give-away (contact-card step 8): the calendar a person who leaves their details on
 * /card receives, linked from the day-0 follow-up draft in marketing-os. Copy approved by David
 * 2026-11-17, adapted from the Home Services "Home Care Calendar" with its stats, pricing and
 * licence lines removed.
 *
 * No operating, licence or service claims: no Conine Coastal company operates yet (ruling
 * 2026-11-14). The path is a contract with the follow-up template; do not move it.
 */

export const CALENDAR_PATH = "/guides/coastal-home-care-calendar"

export interface CalendarSection {
  heading: string
  items: string[]
}

export const CALENDAR = {
  title: "The Coastal Home Care Calendar",
  subtitle: "A month-by-month guide for homes on Northeast Florida's First Coast.",
  intro: [
    "A home between St. Augustine and Amelia Island works harder than most. Salt air corrodes metal, humidity feeds mold, summer heat runs the air conditioning for months, and hurricane season runs from June 1 to November 30. Winter brings nor'easters and the occasional freeze. This calendar spreads the work across the year, so the house is ready for each season before it arrives.",
    "Tick each item as you go. Where a task needs a licensed professional, use one."
  ],
  sections: [
    {
      "heading": "Every month",
      "items": [
        "Change or check HVAC filters (monthly in the cooling season)",
        "Test smoke and carbon monoxide detectors",
        "Look for leaks under sinks, around water heaters and at the AC drain line",
        "Rinse salt buildup from exterior fixtures, railings and screens",
        "Check indoor humidity, and the dehumidifier if you run one",
        "Look for signs of pests"
      ]
    },
    {
      "heading": "January: reset",
      "items": [
        "Replace smoke detector batteries",
        "Check exterior metal fixtures, hinges and lighting for corrosion",
        "Check landscaping and irrigation for salt or cold damage",
        "Inspect seawall, dock and pilings for winter storm damage",
        "Schedule interior painting or deep cleaning while the air is cool and dry"
      ]
    },
    {
      "heading": "February: structure",
      "items": [
        "Inspect the roof for loose or missing shingles or tiles",
        "Re-caulk windows and doors before the spring rains",
        "Check that water drains away from the foundation",
        "Check attic ventilation and insulation",
        "Lubricate hinges, locks and sliding-door tracks against salt corrosion"
      ]
    },
    {
      "heading": "March: before the busy season",
      "items": [
        "Book the AC tune-up before heavy use",
        "Test every irrigation zone and repair leaks",
        "Pressure wash the exterior to remove mildew",
        "Trim dead branches and limbs over the roof, before hurricane season",
        "Repair torn screens",
        "Book any exterior or storm-protection work now, while contractors have room"
      ]
    },
    {
      "heading": "April: water",
      "items": [
        "Check the attic for leaks during the first heavy rains",
        "Clean gutters and downspouts",
        "Correct low spots where water pools near the house",
        "Inspect the dock for winter damage before the boating season"
      ]
    },
    {
      "heading": "May: hurricane preparation",
      "items": [
        "Service the generator and check its fuel",
        "Test or mount storm shutters and panels, and check the hardware",
        "Restock the emergency kit: water, food, batteries, medications, first aid",
        "Put insurance policies, deeds and IDs in a waterproof container, with copies stored off-site",
        "Know your evacuation zone and route",
        "Find your flood zone and elevation certificate",
        "Plan where the boat, outdoor furniture and loose items go when a storm comes"
      ]
    },
    {
      "heading": "June: hurricane season begins",
      "items": [
        "AC coil cleaning and refrigerant check",
        "Service the pool equipment and balance the water",
        "Clean ceiling fans and check exhaust fans",
        "Check pergolas, awnings and shade structures for storm readiness",
        "Photograph each room and the exterior for insurance records"
      ]
    },
    {
      "heading": "July: heat and humidity",
      "items": [
        "Check for moisture or mold in closets, attics and behind furniture against exterior walls",
        "Apply protective coatings to exposed metal",
        "Inspect decks and railings",
        "Check fire extinguishers",
        "Clear storm drains and yard drains"
      ]
    },
    {
      "heading": "August: peak season",
      "items": [
        "Run the generator under load",
        "Rotate emergency supplies past their dates",
        "Make sure everyone in the house knows how to put up the shutters",
        "Keep vehicles fueled and the emergency kit in reach",
        "Confirm boat storage and haul-out arrangements",
        "Agree how you will check on elderly or disabled neighbors"
      ]
    },
    {
      "heading": "September: stay ready",
      "items": [
        "Re-inspect the roof after summer storms",
        "Clean gutters again",
        "Touch up exterior paint and caulk",
        "Photograph any damage for insurance as it happens",
        "Check for erosion along the shoreline"
      ]
    },
    {
      "heading": "October: transition",
      "items": [
        "Service the heating side of the system",
        "Clean and inspect the fireplace and chimney, if you have one",
        "Clean and store outdoor furniture you won't use in winter",
        "Check the seawall for summer damage before winter swells",
        "Ready guest or rental space for winter visitors"
      ]
    },
    {
      "heading": "November: winter",
      "items": [
        "Insulate exposed pipes and know how to protect them in a freeze",
        "Disconnect hoses and cover outdoor spigots during freezes",
        "Have covers ready for tropical plants",
        "Prepare for nor'easters: secure loose items, check drainage",
        "Winterize boats and water equipment"
      ]
    },
    {
      "heading": "December: review",
      "items": [
        "Review how each major system performed this year",
        "Gather warranties and service records in one place",
        "Review flood and wind coverage with your insurance agent",
        "Plan next year's projects and book next spring's services",
        "Note what worked and what didn't this storm season"
      ]
    }
  ] satisfies CalendarSection[],
  about: [
    "Conine Coastal is a family of companies focused on property in Northeast Florida, from construction and land development to home services and luxury travel.",
    "If anything here raises a question about your property, I am glad to talk it through.",
  ],
  signer: { name: "David Conine", email: "info@coninecoastal.com" },
  disclaimer:
    "This calendar is general information. Follow manufacturer guidance and local emergency management instructions, and use licensed professionals for electrical, gas, structural and roofing work.",
}
