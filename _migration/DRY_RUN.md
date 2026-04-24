# DRY_RUN.md — Conine Coastal Holding Company Harness Audit

**Repo:** `CC/` (Conine Coastal Holding Company — originator of the CC fleet)
**Remote:** https://github.com/ConineCoastal/coninecoastal.git
**Branch:** `backup/pre-harness-audit-2026-04-24`
**Authored:** 2026-04-24 (Pass 3)
**Pairs with:** `_migration/SCOPE.md` (commit `bb95394`)
**Baseline HEAD (pre-audit `main`):** `2dc6bc4b4915d907b673b6c2512a0786216b398c`

This document records the intended harness-audit write and verification for Pass 3 before any execution. All entries are pre-execution only. No file has been moved or modified as of this document, aside from this authoring write itself (Pass 3's sole deliverable).

Scope boundary (per `SCOPE.md` §6): this audit catalogues and assesses the existing Conine Coastal harness; it does not install a new one. File moves, renames, and content edits outside `_migration/` are explicitly out of scope. `CLAUDE.md` edits (including CC-6 routing drift) are explicitly out of scope.

---

## 1. Operations Plan

Pass 3 performs exactly **one** content write and one commit. All operations are constrained by `SCOPE.md` §6 to `_migration/` — no moves, renames, or content edits outside `_migration/`.

| # | Operation | Target path | Effect |
|---|---|---|---|
| 1 | Author `DRY_RUN.md` from empty | `_migration/DRY_RUN.md` | 0 B → non-zero (this document) |
| 2 | `git add _migration/DRY_RUN.md` | — | Stage the single modified path |
| 3 | `git commit -m "audit(harness): author DRY_RUN.md — Pass 3 [CC]"` | — | New commit on `backup/pre-harness-audit-2026-04-24` |

### 1.1 What Pass 3 does NOT do

- Does NOT author `_migration/AUDIT_LOG.md` (remains 0 B; deferred to a later pass).
- Does NOT backfill the Pass 2 SHA (`bb95394`) into `SCOPE.md` §9. That row stays `*(fill after commit)*` for the duration of this audit per Landmark-style carry-forward (handoff default gate 2, option (b)). LFG's separate Pass 2b SHA-backfill pattern is not applied here.
- Does NOT edit `SCOPE.md` in any way.
- Does NOT touch any file outside `_migration/`.
- Does NOT perform any `git mv`, `git rm`, rename, or move.
- Does NOT push the audit branch to origin (CC-3 remains open).
- Does NOT reconcile `CLAUDE.md §Routing` drift against the actual `app/` route tree (CC-6 — record only).
- Does NOT address any of CC-1 through CC-8 beyond the recording already in `SCOPE.md` §8.
- Does NOT open a PR, merge to `main`, or tag.

### 1.2 Files in the Pass 3 commit diff

Exactly one path: `_migration/DRY_RUN.md` (new content, 0 B → non-zero).

---

## 2. Codification E Precondition Checks

Pre-write verification sequence. Every command below must pass before the `DRY_RUN.md` write executes. Run from repo root (`C:\Users\david\Documents\Projects\Websites\Conine Coastal\CC\`).

| # | Command | Expected output | Pass criterion |
|---|---|---|---|
| E1 | `git rev-parse --abbrev-ref HEAD` | `backup/pre-harness-audit-2026-04-24` | Exact string match — audit venue confirmed |
| E2 | `git rev-parse HEAD` | `bb953940de833583f5717cd7636480912692458f` | Exact SHA match — Pass 2 is the immediate parent |
| E3 | `git status --short` | *(empty)* | Clean tree — no untracked, no modified, no staged |
| E4 | `git log --oneline -1` | `bb95394 audit(harness): author SCOPE.md — Pass 2 [CC]` | Pass 2 is HEAD and unmodified |
| E5 | `ls -la _migration/` | 3 files present: `SCOPE.md` (non-zero), `DRY_RUN.md` (0 B), `AUDIT_LOG.md` (0 B) | Pass 1 scaffold intact, Pass 2 author complete |

**Hold condition:** if any of E1–E5 fails, abort Pass 3 — do not proceed to the write. Report the failure and reconcile before retry.

---

## 3. Codification F Compliance

**Rule (restated from `SCOPE.md` §7):** `git mv` does NOT auto-create parent directories. Any pass that moves content into a target not already enumerated in the authoritative B4 path map MUST pre-create the target via `mkdir -p` and add it to the enumeration in a scope-doc update.

**Pass 3 status:** **N/A — no moves, no renames, no `git mv` invocations.**

Pass 3 writes a single new file to an already-existing directory (`_migration/`, scaffolded in Pass 1 commit `6a5e6da`). No B4 path pre-creation is required.

**Authoritative map reference:** `SCOPE.md` §7 enumerates the full set of parent directories for any *future* move-bearing pass. That enumeration is the contract — it is not activated by this pass. Any later CC sub-pass that introduces moves must verify its target against §7 and, if new, must amend §7 before executing.

---

## 4. Expected Post-Conditions

State of the repo after Pass 3 commit succeeds:

### 4.1 File state

| Path | Pre-Pass-3 | Post-Pass-3 |
|---|---|---|
| `_migration/SCOPE.md` | non-zero (Pass 2) | **unchanged** (same SHA hash of file content) |
| `_migration/DRY_RUN.md` | 0 B | non-zero (this document) |
| `_migration/AUDIT_LOG.md` | 0 B | **unchanged** (remains 0 B) |
| Everything else | unchanged | unchanged |

### 4.2 Git state

| Property | Expected value |
|---|---|
| Branch | `backup/pre-harness-audit-2026-04-24` |
| HEAD SHA | *(new — fill in §7 after commit)* |
| HEAD parent | `bb953940de833583f5717cd7636480912692458f` (Pass 2) |
| Working tree | clean (`git status --short` → empty) |
| Commit message | `audit(harness): author DRY_RUN.md — Pass 3 [CC]` |
| Files changed | exactly 1: `_migration/DRY_RUN.md` |
| Lines changed | all additions (new-content file), no deletions |

### 4.3 Post-commit verification sequence

| # | Command | Pass criterion |
|---|---|---|
| V1 | `git status --short` | empty (clean tree) |
| V2 | `git log --oneline -1` | `<new-sha> audit(harness): author DRY_RUN.md — Pass 3 [CC]` |
| V3 | `git diff HEAD~1 HEAD --name-only` | exactly one line: `_migration/DRY_RUN.md` |
| V4 | `git diff HEAD~1 HEAD --stat _migration/DRY_RUN.md` | additions only; no deletions |
| V5 | `ls -la _migration/DRY_RUN.md` | size > 0 bytes |
| V6 | `ls -la _migration/AUDIT_LOG.md` | size == 0 bytes (unchanged) |
| V7 | `git diff HEAD~1 HEAD -- _migration/SCOPE.md` | empty (SCOPE untouched) |

---

## 5. Rollback Plan

Rollback reference: audit branch `backup/pre-harness-audit-2026-04-24` (local-only; not pushed — CC-3) and baseline pre-audit `main` SHA `2dc6bc4b4915d907b673b6c2512a0786216b398c`.

### 5.1 Full revert — abandon the CC audit entirely

Return to `main` and delete the audit branch:
```
git checkout main
git branch -D backup/pre-harness-audit-2026-04-24
```
Effect: every CC Pass 1–3 commit (`6a5e6da`, `bb95394`, and the Pass 3 commit) is discarded. `main` returns to `2dc6bc4`. No remote cleanup required (branch was never pushed).

### 5.2 Partial revert — stay on audit branch, remove only `_migration/`

```
git rm -r _migration/
git commit -m "revert: remove _migration/ scaffold"
```
Effect: Pass 1–3 commits are preserved in history, but the `_migration/` directory is removed by a follow-up commit. The audit branch is retained.

### 5.3 Single-pass revert — back out Pass 3 only

```
git reset --hard HEAD~1
```
Effect: Pass 3 commit is discarded. `_migration/DRY_RUN.md` reverts to its 0-byte Pass 1 state. `SCOPE.md` and `AUDIT_LOG.md` are unaffected (they were unchanged by Pass 3). Branch HEAD returns to `bb95394` (Pass 2).

**Warning:** `git reset --hard` is destructive. Only use if no uncommitted work is present and Pass 3 state is to be fully discarded. Prefer §5.2 if history preservation is desired.

### 5.4 No stash entanglement

Unlike LFG Pass 3, CC Pass 3 does not depend on a pre-audit stash. `.claude/settings.local.json` is tracked in-repo (CC-8) and was not stashed at audit start. No stash restoration step is required by any rollback path.

---

## 6. Open-Item Handling

Treatment of `SCOPE.md` §8 open items within Pass 3. **All eight items are "record only" for this pass** — none are acted on. Pass 3's scope per `SCOPE.md` §6 excludes any action that would modify files outside `_migration/` or that would reconcile drift in governance documents.

| ID | Item (short) | Pass 3 treatment |
|---|---|---|
| CC-1 | Session venue tension (Pass 1 ran from `Projects/`, pre-rule) | Record only. Pass 3 executes from `CC/` root per PEF venue-separation rule — forward compliance. No retroactive action. |
| CC-2 | 8 non-main remote branches | Record only. No merge / close / delete; disposition deferred. |
| CC-3 | Backup branch not pushed to origin | Record only. Push deferred; local-only branch is sufficient audit venue. |
| CC-4 | `.next/` build artifacts in working tree | Record only. Gitignored; does not affect Codification E clean-tree checks (confirmed E3 passes). |
| CC-5 | `package.json name: "my-v0-project"` | Record only. Cosmetic; no rename. |
| CC-6 | `CLAUDE.md §Routing` describes nonexistent routes | **Record only.** `CLAUDE.md` edits are explicitly out of scope per `SCOPE.md` §6. Reconciliation is deferred to a future governance-doc refresh, not this harness audit. |
| CC-7 | `pnpm-workspace.yaml` present with no `packages:` field | Record only. No removal or normalization. |
| CC-8 | `.claude/settings.local.json` tracked in git | Record only. No gitignore change, no untrack. |

**Deferred — not in §8 but relevant to Pass 3 housekeeping:**

- **Pass 2 SHA backfill** (`SCOPE.md` §9 row reads `*(fill after commit)*` for Pass 2). **Not performed this pass** per handoff default gate 2, option (b) (Landmark-style carry-forward). Never amend Pass 2; if backfill is later desired, it must be a separate Pass 2b commit. Pass 3 itself leaves the placeholder in place.

---

## 7. Pass Log

| Pass | Action | Commit |
|------|--------|--------|
| 1 | Scaffolded `_migration/{SCOPE.md, DRY_RUN.md, AUDIT_LOG.md}` (three empty placeholders) | `6a5e6da` |
| 2 | Authored `_migration/SCOPE.md` | `bb95394` |
| 3 | Authored `_migration/DRY_RUN.md` (this document) | *(fill after commit)* |

---

## 8. What This Document Does NOT Authorize

- Authoring `AUDIT_LOG.md` (stays 0 B through Pass 3).
- Backfilling the Pass 2 SHA into `SCOPE.md` §9.
- Any edit to `SCOPE.md` whatsoever.
- Any content edit outside `_migration/`.
- Any `git mv`, rename, or deletion.
- Pushing `backup/pre-harness-audit-2026-04-24` to origin.
- Opening a PR.
- Merging back to `main`.
- Editing `CLAUDE.md` (including CC-6 reconciliation).
- Modifying `.claude/settings.local.json`, `.claude/launch.json`, or any `.claude/` contents.
- Touching any file tracked by the excluded-paths list in `SCOPE.md` §6.
- Proceeding past Pass 3 in the same session without explicit user authorization.
