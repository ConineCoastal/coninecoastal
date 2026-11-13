// Prints the two digests lib/cards-gate.ts needs for a passphrase.
// Usage: CARDS_PASSPHRASE=<passphrase> node scripts/cards-passphrase.mjs
// Prints digests only, never the passphrase.
import { createHash, createHmac } from "node:crypto"
const pp = (process.env.CARDS_PASSPHRASE || "").trim()
if (!pp) { console.error("Set CARDS_PASSPHRASE"); process.exit(1) }
const sha = (s) => createHash("sha256").update(s).digest("hex")
const cookie = createHmac("sha256", pp).update("cards-gate-v1").digest("base64url")
console.log(JSON.stringify({ passphrase: sha(pp), cookie: sha(cookie) }, null, 2))
