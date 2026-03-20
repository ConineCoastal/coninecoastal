import { Inter, Playfair_Display } from "next/font/google"

/*
 * Google Inter font with a CSS variable so it can be
 * referenced from globals or Tailwind utilities.
 */
export const font = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const serifFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})
