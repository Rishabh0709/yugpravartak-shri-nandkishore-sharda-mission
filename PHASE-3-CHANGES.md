# Phase 3 — One source of truth for numbers + per-page structured data

**Branch:** `main` · **Commits:** `356f4e1`, `4b12f56`
**Goal:** every impact figure comes from one file; every page carries the structured data that lets Google and AI answer questions about the Mission.

---

## 1. `impact.json` is now the single source

**Rule going forward: never type an impact number into a page. Reference `src/_data/impact.json`.**

| Metric key | Value (hi) | Where it shows |
|---|---|---|
| `studentsCombined` / `scholarshipCombined` | 8,630+ / ₹6.72 करोड़+ | homepage seva card |
| `studentsGirls` / `scholarshipGirls` | 8,000+ / ₹6.14 करोड़+ | homepage impact tab, Swami Vivekanand Trust page |
| `studentsBoys` / `scholarshipBoys` | 630+ / ₹57 लाख+ | homepage impact tab, Gyanyogi Adhyatm Kendra page |
| `familyAid` / `familiesMonthly` | ₹1.07 करोड़+ / लगभग 300 | homepage impact tab |
| `foodKits` | 14,000+ | about-mission |
| `yearsOfService` | 30 वर्ष | homepage, about-mission |
| `asOfLabel` | 31 मार्च 2026 | homepage impact note |

Plus a `perTrust` block documenting the breakdown (SVT + MST amounts sum to the girls total; Gyanyogi = boys).

To change a figure next year: edit that one line in `impact.json`, rebuild. Every page updates.

Usage in a page (it's a Nunjucks-processed `.html`):
```
{{ impact.metrics.studentsGirls.display.hi }}
```

### Numbers that were wrong and are now fixed
- **about-mission** said "29 वर्ष" — corrected to 30 (1996–2026).
- **Gyanyogi Adhyatm Kendra** said "₹1.64 करोड़" for boys' scholarships — that was a copy-paste from Maa Shardamani Trust (also ₹1.64 Cr). You confirmed **₹57 लाख** is correct; the page now shows that.
- **Swami Vivekanand Trust** said "37,000+ लाभान्वित छात्राएँ" — that number is actually *scholarship instances* (disbursements), not distinct students, and it contradicted the homepage's "8,000+ girls." The page now shows the confirmed **8,000+ / ₹6.14 करोड़+**, both marked "(माँ शारदामणि ट्रस्ट सहित)".

### Still open (needs you when convenient)
- **Maa Shardamani Trust** page keeps its own **3,400+ / ₹1.64 करोड़+**. Since girls' education runs through SVT + MST jointly, MST's numbers are a *subset* of the 8,000+ / ₹6.14 Cr shown on the SVT page. `impact.json` notes this. Decide whether MST should present as "a subset" or as a distinct higher-education programme with its own framing.
- **`src/data/impact-data.json`** (the runtime data for the detailed `/impact.html` page, loaded by `impact-data.js`) still has its own `₹4.51 Cr / 37,381 instances` numbers. It's internally consistent but uses the *instances* metric. Reconcile its top-line when that page is rebuilt (Phase 5).

---

## 2. Structured data (JSON-LD) on every page

`head.njk` now emits, automatically:

| Schema | Where | Source |
|---|---|---|
| `NGO` (Organization) | every page | `site.json` |
| `BreadcrumbList` | every page except the homepage | page title + URL |
| `Person` | the three biography pages | `people.json` (via `person:` front matter) |
| `Book` | `divya-gyan.html` | new `publications.json` (via `book:` front matter) |

**59 JSON-LD blocks across the site, all validated as parseable JSON.** Test a couple in Google's [Rich Results Test](https://search.google.com/test/rich-results) after deploy.

This is what lets an AI answer "who was Nandkishore Sharda", "what is the book about", etc. from a single page.

New files: `src/_data/publications.json`.
To add `Person` to another page: `person: <key>` in front matter, where `<key>` is `bhaiyaji` / `maaBasanti` / `madhuMaa` from `people.json`.

---

## 3. Housekeeping

- `.eleventy.js` now strips the photo-tooling `album.json` manifests from the **published** output (they carried absolute `E:\…` local paths and nothing on the site fetches them). The 16 source copies stay next to the images for the tooling.
- `package.json`: `npm start` pins port 8080 and shows output (was `--quiet`); added `npm run preview` (builds with `/` path prefix for a Live-Server-style local view).

---

## Not done in Phase 3

- `impact-data.json` deep reconciliation (see above — tied to the `/impact.html` rebuild).
- FAQ content — `faq.json` is still empty stubs; `FAQPage` schema waits on real answers.
- `aspect-ratio` / dimensions on every `<img>` + adding sizes to `image-manifest.json` — moved to Phase 4/5 alongside the image work.
- Wrapping in-page Latin numerals in `.num`.

---

## Files touched

New: `src/_data/publications.json`, `PHASE-3-CHANGES.md`
Modified: `.eleventy.js`, `package.json`, `src/_data/impact.json`, `src/_includes/partials/head.njk`, `src/index.html`, `src/about-mission.html`, `src/shri-nandkishore-sharda.html`, `src/basanti-manihar.html`, `src/madhubala-advani.html`, `src/divya-gyan.html`, `src/swami-vivekanand-trust.html`, `src/gyanyogi-adhyatm-kendra.html`
