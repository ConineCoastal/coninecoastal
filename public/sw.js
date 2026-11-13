// Deletes only its own caches: /cards runs a second worker with its own.
const CACHE_NAME = "conine-coastal-v2"
const OFFLINE_URL = "/offline"

const PRECACHE_URLS = [
  "/",
  "/favicon.png",
  "/conine-coastal-logo.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  )
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key.startsWith("conine-coastal-") && key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  )
  self.clients.claim()
})

self.addEventListener("fetch", (event) => {
  // /cards is a separate private app with its own worker; never cache it here.
  const path = new URL(event.request.url).pathname
  if (path === "/cards" || path.startsWith("/cards/")) return

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(OFFLINE_URL).then((response) => response || caches.match("/"))
      )
    )
    return
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached
      return fetch(event.request).then((response) => {
        if (
          response.status === 200 &&
          response.type === "basic" &&
          event.request.url.match(/\.(js|css|png|jpg|jpeg|svg|ico|woff2?)$/)
        ) {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone))
        }
        return response
      }).catch(() => {
        if (event.request.destination === "image") {
          return new Response("", { status: 404 })
        }
        return new Response("Offline", { status: 503 })
      })
    })
  )
})
