# Cards switcher (`/cards`)

A private home-screen app for David, and step 2 of the conference contact
exchange. Each morning he sets the day's event once. A grid of five brand
tiles then opens a full-screen QR on white, and a swipe moves between brands.
Each QR encodes `<card URL>?e=<event-tag>`:

| Tile | QR target |
|---|---|
| Personal | `https://coninecoastal.com/david` |
| Landmark Logix | `https://landmarklogix.com/card` |
| Niner Advisors | `https://nineradvisors.com/card` |
| Niner Health | `https://ninerhealth.com/card` |
| OwnerLogix | `https://www.ownerlogix.com/card` (the apex 307s to www; encoding www saves a hop) |
| Conine Coastal | `https://coninecoastal.com/card` |

The tag follows the venture pages' own rule, `^[a-z0-9][a-z0-9-]{0,63}$`, so
the switcher never prints a tag a page would drop. A tag lasts for the local
calendar day. On a new day the tiles say "no tag" until David picks the event
again (one tap on a recent chip) or chooses "No event today".

## Files

- `public/cards/` is the whole app, as static files with no build step: `index.html`,
  `app.js`, `brands.js` (brands plus the tag rule), `sw.js`, `unlock.html`,
  the manifest and icons, and `vendor/uqr.mjs` (QR encoder, `uqr@0.1.3`, MIT).
- `proxy.ts` and `lib/cards-gate.ts` are the gate. They run only on `/cards*`.
- `next.config.mjs` adds clean URLs (`/cards`, `/cards/unlock`), noindex,
  and `Service-Worker-Allowed: /cards`.
- `public/sw.js`, the site's own worker, now skips `/cards*` and deletes
  only its own caches. Before this change its `activate` deleted every cache
  on the origin, which would have wiped the switcher's offline copy.

## Offline

`/cards/sw.js` precaches the shell on first load and serves it cache-first,
so the app opens and draws every QR with no signal. **Any change to a file
under `public/cards/` must bump `VERSION` in `public/cards/sw.js`.** The phone
picks up the new version on its next launch with a connection.

## Screen and brightness

While a QR is open the app holds a Screen Wake Lock. It takes the lock back
when the app returns to the foreground, because the OS drops it whenever the
page is hidden. Wake Lock works in Safari 16.4+ and in Chrome on Android.
iPhone home-screen apps only honour it from iOS 18.4. No web page on iPhone
can set brightness, so the app says so and does not try.

## The gate, and why this one

**One passphrase, typed once per device, kept as a 400-day HttpOnly cookie
(path `/`, set on a plain 200 page).** If the gate ever loops, open `/cards/status`: it says whether the browser sent the cookie and whether it is valid. A page load without the cookie goes to `/cards/unlock`.
Any other request gets a 401, so the service worker can never cache the
unlock page in place of the app.

This repo is public, so it holds no secret. It holds two SHA-256 digests: one
of the passphrase and one of the cookie value the passphrase produces. The
passphrase is about 94 bits of random letters, so neither digest can be
reversed or brute-forced. Neither works as a cookie. To rotate the passphrase:

```
CARDS_PASSPHRASE=<new passphrase> node scripts/cards-passphrase.mjs
```

Paste the two digests into `CARDS_HASHES` in `lib/cards-gate.ts` and merge.
Every device is then signed out. The current passphrase is in the Hub secret
store (this repo's gitignored `.claude/settings.local.json`, key
`CARDS_PASSPHRASE`).

Why not the alternatives:

- **Vercel Authentication or password protection.** The Vercel sign-in
  redirect breaks inside an installed iPhone web app. Password protection is a
  paid add-on, and it would cover the whole public site.
- **HTTP Basic auth.** iPhone home-screen apps re-prompt for it unpredictably,
  and a service worker cannot answer the challenge.
- **Passkeys.** Strongest, but they need a server-side credential store and a
  registration flow. That is too much for a page whose QR targets are already
  public. Revisit when step 5 adds badge photos, which are not public. Step 5
  will also need `camera=(self)` in `Permissions-Policy` for `/cards`, which is
  `camera=()` site-wide today.

An iPhone home-screen app keeps its own cookie jar, apart from Safari. Unlock
**inside the installed app** the first time it opens. The form declares a
username and a `current-password`, so iCloud Keychain or Google Password
Manager can save and fill it. Once a device has the app cached, it opens
offline without asking. The gate keeps the tool private. It does not hide the
codes, which are public.

## Checks

`pnpm test` runs `lib/cards-gate.test.ts`, the gate. It also runs
`lib/cards-qr.test.ts`, which decodes every brand's QR with jsQR, an
independent reader, with and without an event tag.

Icons: `python scripts/cards-make-icons.py`.
