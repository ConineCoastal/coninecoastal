// Gate for the private Cards switcher at /cards (see docs/cards-switcher.md).
//
// One passphrase, typed once per device, kept as a 400-day HttpOnly cookie
// (Path=/, set on a 200 page). This repo is public, so it holds only two SHA-256 digests:
// one of the passphrase and one of the cookie value the passphrase produces.
// Neither can be turned back into the passphrase (about 94 bits of random
// letters) or into a working cookie. To rotate: run
//   CARDS_PASSPHRASE=<new> node scripts/cards-passphrase.mjs
// paste the two digests below, merge. Every device is then signed out.
//
// Pure Web APIs, so it runs in the Next proxy and under vitest unchanged.

export const CARDS_HASHES = {
  passphrase: "37c69a929dfd1420b9de69e4f3b16f42937a85c8966145ae71cd1fd3c836280c",
  cookie: "545f20c51338a3838cb06832bce94da989566c2fbea0050629099ae4e7473b42",
}

export const COOKIE = "cards_gate"
export const MAX_AGE = 400 * 24 * 60 * 60 // Chrome caps cookie lifetime at 400 days
const LABEL = "cards-gate-v1"
const WRONG_DELAY_MS = 1000

// Reachable without the cookie: the unlock page, and what "Add to Home
// Screen" fetches before anyone has unlocked. None of it names a brand.
const PUBLIC_PATHS = new Set([
  "/cards/unlock",
  "/cards/unlock.html",
  "/cards/manifest.webmanifest",
  "/cards/apple-touch-icon.png",
])

const enc = new TextEncoder()

function b64url(bytes: Uint8Array): string {
  let s = ""
  for (const b of bytes) s += String.fromCharCode(b)
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

async function sha256Hex(text: string): Promise<string> {
  const d = new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(text)))
  return [...d].map((b) => b.toString(16).padStart(2, "0")).join("")
}

export async function cookieFor(passphrase: string): Promise<string> {
  const k = await crypto.subtle.importKey("raw", enc.encode(passphrase), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
  ])
  return b64url(new Uint8Array(await crypto.subtle.sign("HMAC", k, enc.encode(LABEL))))
}

export async function hashesFor(passphrase: string) {
  return { passphrase: await sha256Hex(passphrase), cookie: await sha256Hex(await cookieFor(passphrase)) }
}

// Digests are fixed-length hex, so a plain XOR loop is constant-time here.
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export function readCookie(header: string | null, name: string): string | null {
  if (!header) return null
  for (const part of header.split(";")) {
    const i = part.indexOf("=")
    if (i < 0) continue
    if (part.slice(0, i).trim() === name) return part.slice(i + 1).trim()
  }
  return null
}

export function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.has(pathname) || pathname.startsWith("/cards/icons/")
}

function isNavigation(request: Request): boolean {
  const mode = request.headers.get("sec-fetch-mode")
  if (mode) return mode === "navigate"
  return request.method === "GET" && (request.headers.get("accept") || "").includes("text/html")
}

function redirect(to: string, request: Request, extra: Record<string, string> = {}): Response {
  return new Response(null, {
    status: 303,
    headers: { location: new URL(to, request.url).toString(), "cache-control": "no-store", ...extra },
  })
}

interface Hashes { passphrase: string; cookie: string }
interface Opts { hashes?: Hashes; delay?: (ms: number) => Promise<void> }
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

async function unlock(request: Request, hashes: Hashes, delay: (ms: number) => Promise<void>): Promise<Response> {
  let candidate = ""
  try {
    candidate = String((await request.formData()).get("passphrase") || "").trim()
  } catch {
    candidate = ""
  }
  if (!candidate || !safeEqual(await sha256Hex(candidate), hashes.passphrase)) {
    await delay(WRONG_DELAY_MS)
    return redirect("/cards/unlock?wrong=1", request)
  }
  // Path=/ rather than /cards, and set on a normal 200 page rather than on the redirect: an
  // Android Chrome unlock on 2026-11-13 accepted the passphrase but never sent the cookie back,
  // so the gate looped. A cookie on a 200 response is the case every browser handles.
  const cookie = `${COOKIE}=${await cookieFor(candidate)}; Max-Age=${MAX_AGE}; Path=/; HttpOnly; Secure; SameSite=Lax`
  return new Response(UNLOCKED_PAGE, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "set-cookie": cookie },
  })
}

const UNLOCKED_PAGE = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="refresh" content="1;url=/cards"><meta name="robots" content="noindex, nofollow">
<title>Cards</title></head>
<body style="font:16px system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0">
<p>Unlocked. <a href="/cards">Open Cards</a></p></body></html>`

/**
 * GET /cards/status: says only whether this browser sent the unlock cookie and whether it is
 * valid. Public, so it can be opened when the gate loops. It reveals nothing about the value.
 */
async function status(request: Request, hashes: Hashes): Promise<Response> {
  const have = readCookie(request.headers.get("cookie"), COOKIE)
  const state = !have ? "missing" : safeEqual(await sha256Hex(have), hashes.cookie) ? "valid" : "invalid"
  const text =
    state === "valid"
      ? "Unlocked: this browser sends a valid Cards cookie."
      : state === "invalid"
        ? "Locked: this browser sends a Cards cookie, but it is not valid (old passphrase?). Unlock again."
        : "Locked: this browser sends no Cards cookie. It was not saved, or cookies are blocked for this site."
  return new Response(JSON.stringify({ cookie: state, message: text }, null, 2), {
    status: 200,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" },
  })
}

// Returns a Response to send instead of the asset, or null to let it through.
export async function cardsGate(request: Request, opts: Opts = {}): Promise<Response | null> {
  const hashes = opts.hashes ?? CARDS_HASHES
  const url = new URL(request.url)
  if (url.pathname === "/cards/unlock" && request.method === "POST") return unlock(request, hashes, opts.delay ?? sleep)
  if (url.pathname === "/cards/status") return status(request, hashes)
  if (isPublicPath(url.pathname)) return null

  const have = readCookie(request.headers.get("cookie"), COOKIE)
  if (have && safeEqual(await sha256Hex(have), hashes.cookie)) return null

  // A page load goes to the unlock screen. Anything else (scripts, the
  // service worker's precache) gets a 401, so the worker can never cache the
  // unlock page in place of the app.
  if (isNavigation(request)) return redirect("/cards/unlock", request)
  return new Response("Locked", { status: 401, headers: { "cache-control": "no-store" } })
}
