// The five cards and the event-tag rule. Pure module: the app and the tests
// both import it, so a URL change is tested before it ships.

// OwnerLogix serves from www; the apex 307s there. Encoding the final host
// saves the scanner's phone one redirect on conference wifi.
export const BRANDS = [
// `logo` (an image above the QR) or, where the brand is a text wordmark on its own site
// (both Niner brands) or has none (personal), `wordmark` in `color`.
  { id: "personal", name: "Personal", note: "David Conine · vCard", url: "https://coninecoastal.com/david", wordmark: "David Conine", color: "#2b3038" },
  { id: "landmark", name: "Landmark Logix", note: "landmarklogix.com", url: "https://landmarklogix.com/card", logo: "/cards/logos/landmark.png" },
  { id: "niner-advisors", name: "Niner Advisors", note: "nineradvisors.com", url: "https://nineradvisors.com/card", wordmark: "Niner Advisors", color: "#1a3a4a" },
  { id: "niner-health", name: "Niner Health", note: "ninerhealth.com", url: "https://ninerhealth.com/card", wordmark: "Niner Health", color: "#1a3a4a" },
  { id: "ownerlogix", name: "OwnerLogix", note: "ownerlogix.com", url: "https://www.ownerlogix.com/card", logo: "/cards/logos/ownerlogix.png" },
  { id: "conine-coastal", name: "Conine Coastal", note: "coninecoastal.com", url: "https://coninecoastal.com/card", logo: "/cards/logos/conine-coastal.png" },
];

// Same rule the venture /card pages apply (lib/card/entry.ts EVENT_RE). A tag
// the pages would reject never reaches a QR.
export const EVENT_RE = /^[a-z0-9][a-z0-9-]{0,63}$/;

export function slugifyEvent(name) {
  const tag = String(name ?? "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+/, "")
    .slice(0, 64)
    .replace(/-+$/, "");
  return EVENT_RE.test(tag) ? tag : "";
}

export function cardUrl(brand, eventTag) {
  const u = new URL(brand.url);
  if (eventTag && EVENT_RE.test(eventTag)) u.searchParams.set("e", eventTag);
  return u.toString();
}

// Local calendar day, so "today's event" rolls over at midnight where David is.
export function localDay(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
