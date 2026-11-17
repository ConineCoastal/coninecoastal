// Badge capture (contact cards, step 5). In addition to the /card form, never instead of it.
//
// The photo is downsized on the phone, queued in IndexedDB (so a booth with no signal loses
// nothing), and posted to /cards/api/badge, which emails it to the Conine Coastal mailbox. The
// site keeps no copy. A queued photo leaves the phone only once the server says it was sent.

import { BRANDS, localDay } from "/cards/brands.js";

const $ = (id) => document.getElementById(id);
const TILE_KEY = "cards.badge.tile";
const MAX_EDGE = 1600;
const VENTURES = BRANDS.filter((b) => b.id !== "personal");

// ---- queue (IndexedDB) ------------------------------------------------------

function db() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("cards-badges", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("queue", { keyPath: "id" });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function tx(mode, fn) {
  const d = await db();
  return new Promise((resolve, reject) => {
    const t = d.transaction("queue", mode);
    const out = fn(t.objectStore("queue"));
    t.oncomplete = () => resolve(out && "result" in out ? out.result : undefined);
    t.onerror = () => reject(t.error);
  });
}
const queueAll = () => tx("readonly", (s) => s.getAll());
const queuePut = (item) => tx("readwrite", (s) => s.put(item));
const queueDel = (id) => tx("readwrite", (s) => s.delete(id));

// ---- state ------------------------------------------------------------------

function tile() {
  try {
    const t = localStorage.getItem(TILE_KEY);
    if (VENTURES.some((b) => b.id === t)) return t;
  } catch {
    /* storage blocked: fall through */
  }
  return null;
}
function setTile(id) {
  try {
    localStorage.setItem(TILE_KEY, id);
  } catch {
    /* fine: the choice lasts this session */
  }
  chosen = id;
  renderChips();
}
let chosen = tile();

// Today's event tag, from the switcher's own state (app.js, key cards.v1).
function eventTag() {
  try {
    const ev = JSON.parse(localStorage.getItem("cards.v1") || "{}").event;
    return ev && ev.day === localDay() && ev.tag ? ev.tag : "";
  } catch {
    return "";
  }
}

// ---- image ------------------------------------------------------------------

async function downsize(file) {
  const bmp = await createImageBitmap(file, { imageOrientation: "from-image" });
  const scale = Math.min(1, MAX_EDGE / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * scale);
  c.height = Math.round(bmp.height * scale);
  c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
  bmp.close?.();
  return new Promise((resolve, reject) =>
    c.toBlob((b) => (b ? resolve(b) : reject(new Error("could not encode"))), "image/jpeg", 0.8),
  );
}

// ---- upload -----------------------------------------------------------------

let flushing = false;
async function flush() {
  if (flushing || !navigator.onLine) return renderStatus();
  flushing = true;
  try {
    for (const item of await queueAll()) {
      const fd = new FormData();
      fd.append("id", item.id);
      fd.append("tile", item.tile);
      fd.append("event", item.event);
      fd.append("captured_at", item.captured_at);
      fd.append("image", item.blob, "badge.jpg");
      let res;
      try {
        res = await fetch("/cards/api/badge", { method: "POST", body: fd, credentials: "same-origin" });
      } catch {
        break; // offline after all: try again on the next "online"
      }
      if (res.ok) await queueDel(item.id);
      else if (res.status === 400) await queueDel(item.id); // malformed: retrying cannot help
      else break; // 401 locked, 5xx mail down: keep it and stop
    }
  } finally {
    flushing = false;
    renderStatus();
  }
}

// ---- render -----------------------------------------------------------------

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}
function renderChips() {
  $("badge-brands").innerHTML = VENTURES.map(
    (b) =>
      `<button type="button" class="chip${b.id === chosen ? " on" : ""}" data-tile="${b.id}" aria-pressed="${b.id === chosen}">${esc(b.name)}</button>`,
  ).join("");
  $("snap").disabled = !chosen;
}
async function renderStatus(msg) {
  let waiting = 0;
  try {
    waiting = (await queueAll()).length;
  } catch {
    waiting = 0;
  }
  $("badge-status").textContent =
    msg ??
    (waiting
      ? `${waiting} photo${waiting === 1 ? "" : "s"} waiting to send${navigator.onLine ? "" : " (offline)"}.`
      : "");
}

// ---- wiring -----------------------------------------------------------------

$("badge-brands").addEventListener("click", (e) => {
  const b = e.target.closest("[data-tile]");
  if (b) setTile(b.dataset.tile);
});
$("snap").addEventListener("click", () => $("badge-file").click());
$("badge-file").addEventListener("change", async (e) => {
  const file = e.target.files && e.target.files[0];
  e.target.value = "";
  if (!file || !chosen) return;
  try {
    renderStatus("Saving photo…");
    const blob = await downsize(file);
    await queuePut({ id: crypto.randomUUID(), tile: chosen, event: eventTag(), captured_at: new Date().toISOString(), blob });
    await flush();
    const left = (await queueAll()).length;
    if (!left) renderStatus("Sent to the inbox.");
  } catch {
    renderStatus("Could not save that photo. Try again.");
  }
});
addEventListener("online", flush);
addEventListener("offline", () => renderStatus());
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") flush();
});

renderChips();
flush();
