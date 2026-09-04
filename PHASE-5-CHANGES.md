# Phase 5 — new pages, data wiring, consistency

**Branch:** `main` (worked directly, per your workflow)

Phase 5 = the sub-page pass plus the new pages the audit called for
(History/Timeline, Transparency, practical FAQ, "how to begin", plan-a-visit),
and cutting the nav.

---

## New pages

| URL | What it is | Source of truth |
|---|---|---|
| `/transparency.html` | Per-trust registration docs (12A / 80G / PAN / FCRA / NGO-Darpan), year-wise audited financials, scholarship certificates | `src/_data/documents.js` — scans `assets/documents/<id>/…` at build time |
| `/itihaas.html` | Mission history — two-phase vertical timeline (आध्यात्मिक यात्रा 1944–1990 · निष्काम कर्म साधना 1995–), with the "not a founding year" framing | `src/_data/timeline.json` |
| `/faq.html` | **Practical / newcomer FAQ** (6 Qs: no fee, no renunciation, how to begin, who leads, where is Manidweep) + FAQPage JSON-LD | `src/_data/faq.json` — **answers are a DRAFT**, to be reviewed with the Parivar |
| `/sadhna-aarambh.html` | "साधना कैसे आरम्भ करें" — practical steps, where it is taught (मणिद्वीप + सिद्धपीठ with timings), what to expect | hand-written from source docs |
| `/jigyasa-samadhan.html` | The **deep spiritual Q&A** (~46 questions, categories, modal) — this is the renamed `faq.html`; content and JS unchanged | `assets/js/faq-hindi.js` |

The two FAQs are deliberately separate — one practical, one contemplative — and are cross-linked, not merged.

## Data wiring

- **`timeline.json` is now live.** The homepage `v2-journey` renders all 11 events from it (was a hand-typed `<ol>`), and `/itihaas.html` renders the full bodies. Edit `timeline.json` → both update.
- **`faq.json` is now live** (drives `/faq.html` + its FAQPage JSON-LD).
- `documents.js` (new) drives `/transparency.html`.

## Navigation (finalised at 5 top items)

1. **हमारे बारे में** — मिशन का परिचय · **मिशन का इतिहास** · लिनिएज (3) · भैया जी की यात्रा (3)
2. **दिव्य ज्ञान एवं साधना** — दिव्य ज्ञान · प्रतीक चिन्ह · सद्साहित्य · **जिज्ञासा समाधान** / बुद्धि-विवेक योग साधना · **साधना कैसे आरम्भ करें** · **सामान्य प्रश्न**
3. **निष्काम कर्म** — सेवा का दर्शन (4) · सेवा संस्थाएँ (4 trusts + **पारदर्शिता एवं दस्तावेज़**)
4. **दिव्य प्रभाव** — अनुभव · आँकड़े · चित्र दीर्घा · समाचार
5. **मणिद्वीप पधारें** (CTA button → `/sampark.html`)

Footer "जानिए" and "सेवा संस्थाएँ" groups gained the same new links; footer uses short trust names, nav keeps full legal names.

## Consistency pass

- `.hi-eyebrow` → `.hi-kicker` everywhere (was 2 pages out of 27); dead alias removed from CSS.
- **Visible breadcrumbs** — new `partials/breadcrumb.njk`, opt-in via `breadcrumb: true` / `breadcrumbParent` front matter. Enabled on the 5 utility pages above. Legacy content pages keep the BreadcrumbList JSON-LD only (full rollout is a follow-up).
- `/sampark.html#visit` — added the सिद्धपीठ location + its free-yoga timings (7:15–8:15), and a "first visit — no fee, no prerequisite" note.
- `og:image` default now the wide hero image (was the square logo) + `og:image:alt`.

## Homepage (`index-v2.html`) touch-ups carried in this phase

- Essence band ("यह मिशन क्यों विशिष्ट है"): flanked-rule eyebrow, more breathing room, the four distinctions rebuilt as centred glass cards.
- The four distinctions band + the ways-to-connect grid: spacing fixes; a quiet "पंजीकरण, 80G एवं वित्तीय दस्तावेज़ देखें →" line links home → transparency.

---

## Still open (need your input or a dedicated pass)

- **FAQ answers** in `faq.json` are my draft — review with the Parivar.
- **`<img>` width/height / `aspect-ratio`** — 307 `<img>` tags, none carry dimensions (layout-shift risk). Needs a dedicated pass with real image sizes.
- **Purpose-built 1200×630 OG share card** — currently reusing the hero image.
- **Breadcrumbs on the ~27 legacy pages** — deferred; heroes need their top-padding retuned first.
- **`sampark.html` design** — still on the old English-v1 `activity-*` / `contact-*` system, unlike the rest of the Hindi site.
- The numbers you said you'd verify later: Gyanyogi ₹57 लाख vs the ₹1.64 Cr in Sandip Sir's source doc; the Maa Shardamani chart series and the Gyan Ganga ₹1.5 Cr infra figure (no source).
