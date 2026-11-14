import { encode } from "/cards/vendor/uqr.mjs";
import { BRANDS, cardUrl, localDay, slugifyEvent } from "/cards/brands.js";

const KEY = "cards.v1";
const $ = (id) => document.getElementById(id);

// ---- state (per device; nothing here is secret) ---------------------------

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || "{}");
    return { event: s.event || null, recent: Array.isArray(s.recent) ? s.recent : [] };
  } catch {
    return { event: null, recent: [] };
  }
}
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* private mode: the day's event just won't survive a reload */
  }
}
const state = load();

// null = not set today; "" = deliberately no event; otherwise the tag.
function todayTag() {
  const ev = state.event;
  return ev && ev.day === localDay() ? ev.tag : null;
}

function setEvent(name) {
  const tag = slugifyEvent(name);
  state.event = { name: tag ? name.trim() : "", tag, day: localDay() };
  if (tag) {
    state.recent = [{ name: name.trim(), tag }, ...state.recent.filter((r) => r.tag !== tag)].slice(0, 6);
  }
  save();
  render();
}

// ---- QR ---------------------------------------------------------------------

function qrSvg(text) {
  const { data, size } = encode(text, { ecc: "M", border: 4 });
  let d = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) if (data[y][x]) d += `M${x} ${y}h1v1h-1z`;
  }
  return (
    `<svg class="qr" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges" role="img" ` +
    `aria-label="QR code for ${text}" data-url="${text}" xmlns="http://www.w3.org/2000/svg">` +
    `<rect width="${size}" height="${size}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`
  );
}

// ---- render -----------------------------------------------------------------

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}

function render() {
  const tag = todayTag();
  const now = $("event-now");
  now.textContent =
    tag === null ? "Not set for today." : tag === "" ? "No event today." : `${state.event.name}  →  ?e=${tag}`;
  now.className = "event-now" + (tag === null ? " unset" : "");
  $("event-panel").classList.toggle("needs", tag === null);

  $("recent").innerHTML = state.recent
    .map((r) => `<button type="button" class="chip" data-name="${esc(r.name)}">${esc(r.name)}</button>`)
    .join("");

  $("tiles").innerHTML = BRANDS.map(
    (b, i) =>
      `<li><button type="button" class="tile tile-${b.id}" data-i="${i}">` +
      `<span class="tile-name">${esc(b.name)}</span><span class="tile-note">${esc(b.note)}</span>` +
      `<span class="tile-tag">${tag ? "e=" + esc(tag) : "no tag"}</span></button></li>`,
  ).join("");

  $("track").innerHTML = BRANDS.map((b) => {
    const url = cardUrl(b, tag);
    return (
      `<section class="slide" aria-label="${esc(b.name)}">` +
      // Brand name and code only (David, 2026-11-13); the day's event shows on the home screen.
      `${b.logo
        ? `<img class="slide-logo" src="${b.logo}" alt="${esc(b.name)}">`
        : `<h2 class="slide-wordmark" style="color:${b.color}">${esc(b.wordmark)}</h2>`}` +
      `${qrSvg(url)}</section>`
    );
  }).join("");
  $("dots").innerHTML = BRANDS.map(() => "<i></i>").join("");
}

function updatePreview() {
  const v = $("event-input").value;
  const tag = slugifyEvent(v);
  $("tag-preview").textContent = v.trim() ? (tag ? `Tag: ${tag}` : "Needs at least one letter or number") : "";
}

// ---- viewer + wake lock -----------------------------------------------------

let lock = null;
let viewerOpen = false;

// Keeps the screen on while a code shows, silently (David, 2026-11-13: no status text).
async function keepAwake() {
  if (!("wakeLock" in navigator)) return;
  try {
    lock = await navigator.wakeLock.request("screen");
    lock.addEventListener("release", () => {
      lock = null;
    });
  } catch {
    /* refused (battery saver, page not focused): the screen may sleep */
  }
}
function letSleep() {
  if (lock) lock.release().catch(() => {});
  lock = null;
}

function currentIndex() {
  const t = $("track");
  return Math.round(t.scrollLeft / Math.max(1, t.clientWidth));
}
function markDot() {
  const i = currentIndex();
  [...$("dots").children].forEach((d, j) => d.classList.toggle("on", i === j));
}

function openViewer(i) {
  const v = $("viewer");
  v.hidden = false;
  viewerOpen = true;
  document.documentElement.classList.add("viewing");
  const t = $("track");
  t.scrollTo({ left: i * t.clientWidth, behavior: "instant" });
  markDot();
  keepAwake();
  history.pushState({ viewer: true }, "");
}
function closeViewer(fromPop) {
  if (!viewerOpen) return;
  viewerOpen = false;
  $("viewer").hidden = true;
  document.documentElement.classList.remove("viewing");
  letSleep();
  if (!fromPop && history.state && history.state.viewer) history.back();
}

// ---- wiring -----------------------------------------------------------------

$("event-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = $("event-input").value;
  if (!slugifyEvent(v)) return updatePreview();
  setEvent(v);
  $("event-input").value = "";
  updatePreview();
  $("event-input").blur();
});
$("event-input").addEventListener("input", updatePreview);
$("no-event").addEventListener("click", () => setEvent(""));
$("recent").addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (b) setEvent(b.dataset.name);
});
$("tiles").addEventListener("click", (e) => {
  const b = e.target.closest(".tile");
  if (b) openViewer(Number(b.dataset.i));
});
$("close").addEventListener("click", () => closeViewer(false));
$("track").addEventListener("scroll", markDot, { passive: true });
addEventListener("popstate", () => closeViewer(true));
addEventListener("keydown", (e) => {
  if (!viewerOpen) return;
  const t = $("track");
  if (e.key === "Escape") closeViewer(false);
  if (e.key === "ArrowRight") t.scrollBy({ left: t.clientWidth, behavior: "smooth" });
  if (e.key === "ArrowLeft") t.scrollBy({ left: -t.clientWidth, behavior: "smooth" });
});
// The OS drops a wake lock whenever the page is hidden; take it back on return.
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && viewerOpen && !lock) keepAwake();
  if (document.visibilityState === "visible") render(); // the day may have rolled over
});

function showNet() {
  $("net").textContent = navigator.onLine ? "" : "Offline · codes still work";
}
addEventListener("online", showNet);
addEventListener("offline", showNet);

render();
showNet();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/cards/sw.js", { scope: "/cards" }).catch(() => {});
}

// Exposed for on-device checks only; nothing reads it.
window.__cards = { BRANDS, cardUrl, todayTag };
