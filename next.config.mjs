/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com https://www.facebook.com",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://www.facebook.com",
              "frame-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
      {
        source: "/cards/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "no-cache" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
      {
        source: "/cards",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "no-cache" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
      {
        // The QR contact cards: never indexed.
        source: "/(card|david)/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/(card|david)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        // Lets /cards/sw.js take the scope "/cards", so the app's own URL
        // (no trailing slash) is inside it.
        source: "/cards/sw.js",
        headers: [{ key: "Service-Worker-Allowed", value: "/cards" }],
      },
    ]
  },
  async rewrites() {
    // The private Cards switcher is static files under public/cards; these
    // give it clean URLs. proxy.ts gates every /cards request first.
    return [
      { source: "/cards", destination: "/cards/index.html" },
      { source: "/cards/unlock", destination: "/cards/unlock.html" },
    ]
  },
  async redirects() {
    return [
      { source: "/companies/real-estate", destination: "https://www.coninecoastalrealestate.com", permanent: true },
      { source: "/companies/estates", destination: "https://www.coninecoastalestates.com", permanent: true },
      { source: "/companies/development", destination: "https://www.coninecoastaldevelopment.com", permanent: true },
      { source: "/companies/home-services", destination: "https://www.coninecoastalhomeservices.com", permanent: true },
      { source: "/companies/travel", destination: "https://www.coninecoastaltravel.com", permanent: true },
    ]
  },
}

export default nextConfig
