import localFont from "next/font/local"

/*
 * Use local font declarations with system fallbacks.
 * Google Fonts are loaded via CSS @font-face with external URLs,
 * avoiding build-time fetch failures.
 */
export const font = localFont({
  src: [
    {
      path: "./inter-latin.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-inter",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
})

export const serifFont = localFont({
  src: [
    {
      path: "./playfair-display-latin.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
})
