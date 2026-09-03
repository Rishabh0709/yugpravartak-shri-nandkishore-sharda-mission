# Phase 2 — Unified design tokens + visual consolidation

**Branch:** `main` · **Commit:** `fe5fb5d`
**Goal:** one design system — unified colour tokens, one warm ground instead of a different gradient per section, one card style, one radius, calmer Devanagari headings. No content or layout restructure.

---

## Review it visually

I verified every change via computed styles and top-of-page screenshots on 7 page types, but the preview pane wouldn't give me reliable mid-page screenshots. **Please scroll through a few pages yourself:**

```bash
npm start
```
→ `http://localhost:8080/yugpravartak-shri-nandkishore-sharda-mission/`

Look at: the homepage top-to-bottom, a biography (`/madhubala-advani.html`), the Buddhi-Vivek Yoga page, a trust page, the contact page. Check that nothing lost its background, spacing or rounded corners in a way you dislike.

---

## What changed

### 1. `assets/css/tokens.css` — new, loaded first

One semantic set of variables:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#f8f4ec` | the one warm paper ground |
| `--bg-wash` | `#f1e9d9` | the one alternate wash (3 chapter sections only) |
| `--surface` | `#fffdf8` | cards, panels |
| `--ink` / `--ink-body` / `--ink-muted` | `#2c2130` / `#574d44` / `#786e64` | headings / body / captions |
| `--primary` / `--primary-deep` | `#7b2a28` / `#5f2020` | maroon — the single action colour |
| `--accent` | `#2f4a63` | quiet "Jodhpur blue" — links, rules, spines |
| `--gold` / `--gold-deep` | `#b98a34` / `#8a6620` | lines and marks only (gold-deep is the one safe as small text) |
| `--radius` / `--radius-pill` / `--radius-leaf` | `14px` / `999px` / one signature leaf | |
| `--shadow-sm` / `--shadow-md` | two shadows, nothing bigger | |
| type scale, 4/8 spacing, `--section-y` | | reference scale |

**Every old variable name (`--color-maroon`, `--hi-ink`, `--hi-gold`, `--hi-radius`, `--hi-quote-bg`, …) is kept as an alias pointing at the new tokens**, so no existing rule broke. The two old `:root` blocks (one in `style.css`, one in `home-hindi.css`) were removed. As rules get migrated to the real tokens in later phases, the alias block shrinks.

If you ever want a dark theme: add a `@media (prefers-color-scheme: dark)` block in `tokens.css` that redefines only the first group. Nothing else needs to change.

### 2. `assets/css/lang-hi.css` — new, the Hindi language layer

- Body + heading font families now pull from `--font-body` / `--font-head`.
- **Devanagari headings forced to non-negative letter-spacing** — the old `-0.05em` / `-0.035em` was crushing the shirorekha and matras on the big display headings.
- `.num` / `[lang="en"]` utility → renders Latin numerals and abbreviations ("1996", "M.A.", "₹6.72 Cr") in Inter Tight with tabular figures, so they don't fall back to a mismatched face mid-sentence. Opt-in: wrap the number in `<span class="num">…</span>`.
- `.hi-prose > p` capped at `68ch` so full-width paragraphs stop reading as wide grey slabs (two-column layouts are already narrower, so the cap doesn't bite there).

When English is built it gets a parallel `lang-en.css` (different font stack, Latin headings, these Devanagari rules off).

### 3. Visual consolidation

- **Per-section gradient backgrounds removed** — `home-hindi.css`, `home-hindi-concept.css` and all 17 `assets/css/pages/*.css` had a different multi-layer `radial-gradient` / `linear-gradient` on every section (~65 of them). Scrolling felt like flipping paint swatches. Now: **one ground (`--bg`) everywhere**, with `--bg-wash` on just three "chapter break" sections — the book, Manidweep, and the impact section.
- **Decorative overlays removed** — the faint circles on the hero / karma / impact sections and the graph-paper grid on the karma section.
- **One card recipe** — hairline border + `--shadow-md`, no hover lift (just a warm border shift). Applied to the seva cards, lineage profiles, testimonial cards, the media frames.
- **One radius** — cards and image frames use `--radius` (14px). The asymmetric "leaf" corners (`34px 34px 120px 34px` etc.) are gone **except one deliberate signature: the founder's portrait** on the homepage keeps a soft leaf.
- Heavy `0 26px 70px` shadows → `--shadow-md`.

### 4. `style.css`

- `:root` block removed (moved to `tokens.css`).
- Removed a bare `#mission { background: var(--color-surface) }` rule — it was an old English-homepage rule bleeding onto the Hindi homepage's `<section id="mission">` and overriding the new ground. Re-add it *scoped* if the English rebuild needs it.

### 5. `head.njk`

Load order is now: `tokens.css` → `style.css` → `responsive.css` → `home-hindi.css` → `lang-hi.css` → page CSS. Added `Inter Tight` (2 weights) to the Google Fonts request.

---

## Not done in Phase 2 (deferred, on purpose)

- **`style.css` is still loaded on Hindi pages.** It carries the header/nav/footer *structure* (plus a lot of unused English page CSS). Splitting it into `base.css` + `components.css` and dropping the English cruft needs per-page visual regression on all 27 pages — a careful follow-up, low visible impact.
- **Hero backgrounds** still keep their own soft radial wash (one per page, not the "swatch flipping" problem). Flatten later if you want them plainer.
- **`--font-latin` is opt-in** — numbers already in the pages aren't wrapped in `.num` yet. That happens as pages are edited in Phase 3–4.
- **The impact-page number (`37,000+ / 37,381 instances`) still disagrees with the homepage (`8,000+ girls`)** — that's the `impact-data.json` vs `impact.json` reconciliation, scheduled for Phase 3.
- **`aspect-ratio` on every `<img>`** (for zero image CLS) — Phase 3, alongside adding dimensions to `image-manifest.json`.
- **Photo grade** — a single consistent warm grade across all images is a designer task, not code.

---

## Files touched

New: `assets/css/tokens.css`, `assets/css/lang-hi.css`
Modified: `assets/css/style.css`, `assets/css/home-hindi.css`, `assets/css/home-hindi-concept.css`, all 17 `assets/css/pages/*.css`, `src/_includes/partials/head.njk`
