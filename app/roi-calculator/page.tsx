import type { Metadata } from "next"
import ROICalculatorClientPage from "./ROICalculatorClientPage"

export const metadata: Metadata = {
  title: "Investment ROI Calculator - Conine Coastal | Real Estate Investment Analysis",
  description:
    "Calculate your real estate investment returns with our comprehensive ROI calculator. Get accurate projections for rental properties, fix & flip, and investment analysis in Northeast Florida.",
  keywords:
    "ROI calculator, real estate investment, rental property calculator, fix and flip calculator, investment analysis, Northeast Florida",
}

export default function ROICalculatorPage() {
  return <ROICalculatorClientPage />
}
