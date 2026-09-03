# Phase 1 — Eleventy foundation & shared component layer

**Branch:** `phase-1-eleventy-foundation`
**Commit:** `09c8f58`
**Goal:** finish the plumbing so the Hindi site is clean, findable and deployable — and so the English site can later drop into `/en/` with **no template, CSS or JS rewrite**. No visible content redesign in this phase.

---

## 1. What you need to do (one-time)

### a. GitHub Pages → build with Actions
Repo **Settings → Pages → Build and deployment → Source: “GitHub Actions”**.
The workflow `.github/workflows/deploy.yml` builds the site with Eleventy and publishes `_site/` on every push to `main`. (You are currently on `phase-1-eleventy-foundation` — merge to `main` when ready.)

### b. Local development
```bash
npm install        # once
npm start           # dev server → http://localhost:8080/yugpravartak-shri-nandkishore-sharda-mission/
npm run build        # one-off build into _site/
```
Node 18+ required (CI uses 20).

### c. When you move to `manidweepjodhpur.org`
Three edits, then rebuild:
1. `.eleventy.js` → `PATH_PREFIX` default to `"/"`.
2. `.github/workflows/deploy.yml` → `ELEVENTY_PATH_PREFIX: /`.
3. `src/_data/site.json` → `"origin": "https://www.manidweepjodhpur.org"`.
4. Add `src/CNAME` containing `www.manidweepjodhpur.org` and un-comment the CNAME passthrough line in `.eleventy.js`.
5. In GitHub → Settings → Pages, set the custom domain.

### d. Submit to search engines (after first deploy)
- Google Search Console → add property → submit `…/sitemap.xml`.
- Create a Google Business Profile for “Manidweep, Shastri Nagar, Jodhpur”.

---

## 2. Decisions baked in (as you instructed)

| Decision | What was done |
|---|---|
| Hindi at domain root, English later at `/en/` | Hindi pages now live at the site root (`/index.html`, `/bhaiyaji…`, etc.). `/en/` is reserved and empty. |
| Adopt Eleventy, stay on GitHub Pages | Eleventy 3 + `pathPrefix` + `EleventyHtmlBasePlugin`. Works on the project URL now; one switch for the custom domain later. |
| Root-absolute paths everywhere | All `href`/`src` in source are `/assets/…`, `/foo.html`; the plugin adds the repo prefix at build. Permanently kills the `../` depth bug that broke the old English site. |
| Bank details / UPI / QR for donations | `src/data/donation-details.json` kept and path-fixed. No payment gateway. |
| No 1964 founding year | `site.json` has `serviceSince: "1996"`; the pre-1996 years are in `timeline.json` only as *spiritual-journey* milestones, never “founded”. |
| Legal docs for all trusts | `assets/documents/<trust-id>/legal/{12A,80G,PAN}.pdf`. |

---

## 3. New structure

```
/                         repo root (source is in src/, built into _site/)
├── .eleventy.js           build config + the PATH_PREFIX switch
├── .github/workflows/deploy.yml
├── package.json / package-lock.json
├── src/
│   ├── _data/             build-time shared data (see §4)
│   ├── _includes/
│   │   ├── base.njk       the HTML shell
│   │   └── partials/      head.njk · header.njk · footer.njk · scripts.njk
│   ├── data/              runtime-fetched JSON (image-manifest, impact-data,
│   │                      news-events, videos, donation-details) → served at /data/
│   ├── *.html             every Hindi page, at the root
│   ├── robots.njk → /robots.txt
│   ├── sitemap.njk → /sitemap.xml
│   └── 404.html
├── assets/                CSS / JS / images / documents (copied to /assets/ at build)
│   ├── css/pages/         inline <style> blocks were extracted here
│   └── js/site.js         merged shell behaviour (was components.js)
└── _archive/              NOT published — reference only (see §7)
```

URLs are unchanged in shape (`…/bhaiyaji-yugpravartak.html`, not `…/bhaiyaji-yugpravartak/`), but the Hindi pages moved from `/hi/x.html` to `/x.html`.

---

## 4. The shared data layer (`src/_data/`)

Every translatable value is a `{ "hi": "…", "en": "" }` object — English starts empty, gets filled in the English phase. **The header, footer, `<head>`, SEO tags and JSON-LD all render from these files.**

| File | Drives | Notes |
|---|---|---|
| `site.json` | identity, contact, address, registrations, locale config, `origin` | Change `origin` + `PATH_PREFIX` on domain switch. Email is still the old Gmail — **replace with `info@manidweepjodhpur.org` when the mailbox exists** (`site.contact.email`). |
| `navigation.json` | the primary menu, both languages | Currently mirrors the **existing 7-item mega-menu 1:1**. Cutting to ~5 items is a later phase. |
| `footer.json` | footer links + visit CTA + copyright | Broken old targets corrected (`activities.html` → `/nishkam-karm-sadhna.html`, `contact.html` → `/sampark.html`). “English Website” link only appears when `site.locales.en.enabled` is `true`. |
| `impact.json` | **single source of truth for headline numbers** | Reconciled per your note: combined `8,630+ / ₹6.72 Cr`, girls `8,000+ / ₹6.14 Cr`, boys `630+ / ₹57 L`, ~300 families/month, ₹1.07 Cr family aid, 30 years. **As of 31 March 2026.** Pages still show their own hard-coded numbers for now — swapping them to read this file happens during the homepage/sub-page rebuilds. |
| `people.json` | Bhaiyaji / Maa Basanti / Madhu Maa — names, dates, portraits | Feeds future lineage section + `Person` JSON-LD. |
| `timeline.json` | canonical history 1944 → 2021 | Bodies are stubs — to be written/verified with the Parivar. |
| `trusts.json` | the 4 registered bodies + links to their legal PDFs | Registration numbers still blank (fill from the certificates). Maa Shardamani Trust has no 80G PDF yet. |
| `faq.json` | seed structure only | Answers to be written later; then it renders `/faq.html` + `FAQPage` JSON-LD. |

**Rule going forward:** structured facts (numbers, names, dates, nav labels, links, alt text) → these JSON files. Prose/narrative → stays as HTML in the page, one file per language.

---

## 5. Every change, grouped

### Build & deploy
- Added Eleventy 3 (`package.json`, `.eleventy.js`), `cross-env`, `.gitignore`, `.gitattributes`.
- Added `.github/workflows/deploy.yml` (Node 20 → `npm ci` → `npx @11ty/eleventy` with `ELEVENTY_PATH_PREFIX` → deploy to Pages).
- `pathPrefix` = `/yugpravartak-shri-nandkishore-sharda-mission/`; `EleventyHtmlBasePlugin` rewrites all root-absolute URLs in the built HTML.
- `.html` URL shape preserved via a global `permalink` rule.

### Pages (27 real + 3 redirects + 404)
- All `hi/*.html` converted to `src/*.html` on the `base.njk` layout: front matter (`title`, `description`, `bodyClass`, `extraCss`, `extraJs`) + the `<main>` body only.
- The per-page `<head>`, `#header-placeholder`, `#footer-placeholder` and script tags are now provided by the shared shell.
- `dignitaries-views` / `student-testimonials` / `success-stories` → small `meta refresh` redirect pages to `/testimonials.html#…` (marked `noindex`).
- `hi/video-detail.html` kept (JS-rendered stub).

### Shell
- `src/_includes/base.njk` + `partials/head.njk`, `header.njk`, `footer.njk`, `scripts.njk`.
- Header & footer **render at build time from JSON** — no more runtime `fetch`, no layout shift, no “Unable to load website component” failure mode.
- `assets/js/site.js` — the shell behaviour (nav toggle, submenus, header-on-scroll, back-to-top, scroll cues, active-link, year) extracted from the old `components.js`, minus the loader.
- Old `assets/js/components.js` removed; dead `assets/js/hi/components.js` archived.
- Language toggle mechanism is wired (per-page HI↔EN URL mapping) but hidden until `site.locales.en.enabled` is set.

### Data
- `assets/json/*` + `assets/data/donation-details.json` → consolidated into `src/data/` (served at `/data/`).
- Fetch paths fixed in `image-manifest.js`, `news-events.js`, `videos.js`, `impact-data.js` (`../assets/json/x.json` → `data/x.json`).
- `image-manifest.json` `src` values normalised to bare-relative (`assets/images/…`) so runtime injection works on both the project URL and the future domain.
- `impact-data.json` internal links de-pointed from the non-existent `activities.html`.
- `news-events.json` image paths fixed (`ration-distribution/` → `food-assistance/`).

### SEO / discoverability (all new)
- `robots.txt`, generated `sitemap.xml` (27 URLs, absolute).
- Per page: `<link rel="canonical">`, `hreflang` (`hi` + `x-default`; `en` line ready and commented), Open Graph + Twitter card, one consolidated Google Fonts request.
- `NGO` / Organization JSON-LD on every page from `site.json`.
- Friendly `/404.html` (GitHub Pages serves it automatically).

### Fixes to pre-existing bugs found along the way
- Broken links across pages: `our-philosophy.html` (×9) → `/buddhi-vivek-yog-sadhna.html`; `contact.html` (×11) → `/sampark.html`; `activities.html` (×3) → `/nishkam-karm-sadhna.html`; stray `../` links.
- `home-hindi.css` line ~1705 referenced `hi-home-hero-background.jpg` (only the `.png` exists) → fixed to `.png`.
- Loose legal PDFs with spaces/inconsistent names (`12A SWAMI VIVEKANAND TRUST.pdf`, `PAN MAA  SHARDAMANI TRUST.pdf`, …) → organised into `assets/documents/<trust-id>/legal/{12A,80G,PAN}.pdf`; two exact duplicates removed.
- 19 inline `<style>` blocks pulled out of the page `<head>`s into `assets/css/pages/<slug>.css`.

---

## 6. Verified

- Clean `npm run build` → 33 files, 0 errors.
- Every internal link and asset reference in the built HTML resolves (automated check).
- Homepage, biography, mission, impact, news, contact, gallery, FAQ, publications — all render identically to the old live site (desktop + 375 px mobile), header/footer present, images load, breadcrumbs intact.
- `robots.txt`, `sitemap.xml`, `/404.html`, the 3 redirect stubs, and all `data/*.json` endpoints return 200 with the correct path prefix.
- Runtime JSON fetches (`impact-data`, `news-events`, `videos`, `image-manifest`) succeed.

---

## 7. `_archive/` — kept for reference, not published

| Folder | Contents |
|---|---|
| `english-v1/` | the old root English site (23 pages) + its header/footer partials |
| `hi-src-originals/` | the pre-conversion `hi/*.html` files |
| `components-hi-originals/` | the old runtime-loaded Hindi header/footer |
| `component-backups/` | the `*.pre-*` header/footer snapshots |
| `backup_english_pages/` | earlier English drafts |
| `dead-js-hi/` | the unused second component loader |
| `misc/` | `prompt_content.txt`, `future_expansion.txt`, `homepage_Storyboard_v1.0`, `sitemap_v1.txt`, `index-hi_old.html` |
| `figures_till_2025-26.xlsx` | *still at repo root* — Excel had it locked during the move; drag it into `_archive/` when convenient (it is not deployed either way). |

---

## 8. Known issues / not done in Phase 1 (intentionally)

- **Numbers on pages not yet swapped to `impact.json`.** Pages still carry hard-coded figures; they now all agree with your clarification, but the single-source wiring happens during the content rebuilds (Phase 3–4 of the plan).
- **`impact-data.json`** (the detailed impact page) still says `₹4.51 Cr / 37,381 scholarship instances` — a *different metric* (instances, not students). Reconcile its top-line with `impact.json` in Phase 3.
- **Email is still `kishoreggm@gmail.com`** in `site.json` and `assets/js/contact.js` — change once `info@manidweepjodhpur.org` is live.
- **OG image** points at `/assets/images/logo.png` — make a proper 1200×630 share image at `/assets/images/og/default.jpg` and update `head.njk`.
- **CSS not yet consolidated.** Pages still load `style.css` (2,970 lines, the English system) + `home-hindi.css` (2,643 lines) + page CSS. That cleanup, the design tokens, the Devanagari heading tuning and the Latin font pairing are Phase 2.
- **`hi-home-hero-background.png` is 5 MB.** Convert to WebP/AVIF + `preload` in Phase 2/6.
- **Registration numbers** in `trusts.json` are blank; **timeline/FAQ bodies** are stubs — fill with the Parivar.
- Skip-link class is now always `skip-link` (was `activity-skip-link` / `gallery-skip-link` on a few pages) — visually negligible; revisit if desired.

---

## 9. Next (Phase 2 of the plan — CSS & design system)

`tokens.css` + `base.css` + `components.css` + `lang-hi.css` + per-template page CSS; merge the two colour-token sets; delete per-section gradients; one card / one radius / two shadows; calmer Devanagari heading tracking; Latin font pairing; fix the image manifest to add dimensions; one photo grade. Then Phase 3 (data wiring + reconciliation), Phase 4 (homepage), Phase 5 (sub-pages + new pages), Phase 6 (SEO finish + QA).
