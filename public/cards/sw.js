// Offline shell for the Cards switcher at /cards. Every file the app needs has
// a fixed name, so the whole shell is precached on install and served
// cache-first. A change to any shell file must bump VERSION; the phone then
// installs the new worker on its next launch with a connection.
//
// Scope is "/cards" (set by Service-Worker-Allowed in next.config.mjs), which
// is narrower than the site's own root worker, so this one wins for /cards*.

const VERSION = "cards-2026-11-13a";
const SHELL = [
  "/cards",
  "/cards/app.js",
  "/cards/brands.js",
  "/cards/styles.css",
  "/cards/vendor/uqr.mjs",
  "/cards/manifest.webmanifest",
  "/cards/icons/icon-192.png",
  "/cards/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  // cache: "reload" skips the HTTP cache. Without the unlock cookie the gate
  // answers 401, addAll rejects, and nothing half-built is installed.
  event.waitUntil(
    caches
      .open(VERSION)
      .then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: "reload", redirect: "error" }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("cards-") && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname !== "/cards" && !url.pathname.startsWith("/cards/")) return;
  if (url.pathname.startsWith("/cards/unlock") || url.pathname === "/cards/sw.js") return;

  const key = req.mode === "navigate" ? "/cards" : SHELL.includes(url.pathname) ? url.pathname : null;
  if (!key) return;

  event.respondWith(
    caches.open(VERSION).then(async (cache) => {
      const hit = await cache.match(key);
      if (hit) return hit;
      // Not cached (first visit, or the cache was cleared): the network
      // answers, including the gate's redirect to /cards/unlock. A clean 200
      // refills the cache so the next offline launch still works.
      const res = await fetch(req);
      if (res.ok && !res.redirected && res.type === "basic") cache.put(key, res.clone());
      return res;
    }),
  );
});
