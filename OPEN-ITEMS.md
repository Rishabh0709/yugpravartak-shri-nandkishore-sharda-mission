# Open items & action items

Running backlog for the Hindi site rebuild. Updated as work progresses.
**Last updated:** 2026-09-05 (template catalogue + robots meta)

Legend: **[You]** needs your content/decision · **[Claude]** ready to build, no input needed · **[Verify]** a number/fact to confirm

---

## 0 · The big pending decision

- **[You] Swap `index-v2.html` → live `index.html`.** The rebuilt homepage is at `/index-v2.html` (noindex, not in sitemap). When you approve:
  - archive current `src/index.html` → `_archive/index-v1.html`
  - `index-v2.html` → `index.html`, remove `noindex`
  - rebuild, re-verify links + JSON-LD
  - the homepage `#lineage` timeline, `#mission` etc. anchors that the footer links to only exist on the v2 page — footer already assumes the swap

---

## 1 · Needs your content or decision  [You]

### Content to supply / review
- **Review the content of the three new Phase-5 pages** — all drafted by Claude from existing site copy + Sandip Sir's source docs, not yet vetted by the Parivar:
  - `/sadhna-aarambh.html` — "साधना कैसे आरम्भ करें" (steps, where taught, what to expect)
  - `/itihaas.html` — history/timeline (renders `timeline.json`; check the event titles/bodies and the two phase notes)
  - `/faq.html` — the 6 practical answers (also listed below)
  Confirm facts, tone, and register; flag anything to change.
- **FAQ answers** — `src/_data/faq.json` has 6 questions with **draft** answers Claude assembled from existing content. Review/correct with the Parivar.
- **Bio pages — content gaps & facts to verify** (from the 2026-09-04 review of `shri-nandkishore-sharda.html`, `basanti-manihar.html`, `madhubala-advani.html`; clear bugs already fixed in `828c4bc`):
  - भैया जी page has **no चक्र धारण (1990) section** — it has its own homepage section but is only a passing image caption in the definitive bio.
  - भैया जी §कर्म-साधना reads as if he founded SVT; trust page + source docs say माँ बसन्ती founded it (10 जून 1996) on Maa's order, भैया जी was अध्यक्ष. Reword.
  - माँ बसन्ती's 2003–2021 leadership underrepresented — founding Gyan Ganga Mission (2003), Gyanyogi Adhyatm Kendra (2010), food aid (2020) don't appear on her bio.
  - मधु माँ — ~50-year gap between 1971 (enrolled MA) and 2021 (leadership); "पाँच दशकों की साधना" arc is absent.
  - **Verify:** बुआ/फुफेरी family link (page says भैया जी = "बुआ के लड़के"; `people.json` says बसन्ती = "भैया जी की फुफेरी बहन" — different relationships); "आजीवन ब्रह्मचारिणी / निर्मल ब्रह्मचर्य" framing (confirm Parivar wants it public); specific family names + "बसन्त पंचमी 1995"; "जोधपुर, बालोतरा, जसोल में उनके नाम से मार्ग"; मधु माँ "सिरसा, पंजाब".
- **"साधना कैसे आरम्भ करें"** (`/sadhna-aarambh.html`) — confirm: is there a contact person, a form, or a specific process beyond "come to मणिद्वीप / सिद्धपीठ"? Anything to add.
- **Contact email** — replace `kishoreggm@gmail.com` with `info@manidweepjodhpur.org` in `src/_data/site.json` once the mailbox exists.
- **WhatsApp channel / mailing list** — if/when one exists, the closing CTAs and "जुड़ें" links should point to it instead of the contact page.

### Trust documents still missing (`/transparency.html` shows "शीघ्र उपलब्ध")
- **Financial reports** — Maa Shardamani Trust, Gyanyogi Adhyatm Kendra, Gyan Ganga Mission (only SVT has them, 1996–2024). Drop PDFs in `assets/documents/<id>/financial-reports/<YYYY-YY>.pdf`.
- **Scholarship certificates** — only SVT publishes these (per your note, 2026-09-04); the other three trusts no longer reference them.
- **80G approval numbers** — Gyanyogi, Gyan Ganga (SVT has `AAATS3452LF20218`). Maa Shardamani has no 80G PDF at all — confirm whether it has 80G. Add numbers to `src/_data/trusts.json` → `approvals`.

### Donation details — placeholders in `src/data/donation-details.json`
- Gyanyogi SBI branch: `"ENTER BRANCH"`
- 80G approval numbers: `"ENTER APPROVAL NUMBER"` ×3 (Gyanyogi, Maa Shardamani, Gyan Ganga)
- UPI IDs: `"ENTER_UPI_ID"` (Maa Shardamani, Gyan Ganga)
- (No donation UI is built yet — this data is staged for a future donation section on `sampark.html`.)

### Decisions
- ~~Orphan pages~~ — **done** (`97d8600`). `dignitaries-views`, `success-stories`, `student-testimonials` were redirect stubs; deleted. Content lives in `/testimonials.html` (4 sections). Fixed a dead `success-stories.html` ref in `videos.js` and a duplicate kicker on that page.
- **SVT scholarship figure** — the SVT page shows the *combined* girls figure (8,000+ / ₹6.14 Cr, labelled "माँ शारदामणि ट्रस्ट सहित"). Source gives SVT-only = ₹4.5 Cr. Decide: show SVT-only, combined, or both.
- ~~`impact.html` — "संचयी छात्रवृत्ति उदाहरण" KPI stat~~ — **done.** Count KPI dropped from all three education records (₹ KPI kept); summary lines reworded off the counts; "विद्यार्थी-संबंधी आँकड़ों को कैसे पढ़ें" aside removed. Boys record now says 630+ (Adhyatm Kendra's own figure); a highlight line after the Maa Shardamani chart states the 8,000+ combined girls figure (SVT + Maa Shardamani).

---

## 2 · Numbers to verify  [Verify]

- **Gyanyogi Adhyatm Kendra total = ₹57 लाख** (site) vs **₹1.64 करोड़** (Sandip Sir's `ABOUT ADHYATMA KENDRA.doc`, all drafts). You confirmed ₹57 लाख earlier and that ₹1.64 Cr was a copy-paste error from Maa Shardamani. **Get the master doc corrected** or the error keeps propagating.
- ~~SVT "37,000+ छात्राएँ" / "₹4.5 करोड़"~~ — **superseded** (2026-09-04). You gave exact unique-student figures: SVT 7,200, Maa Shardamani 7,000, ~5,800 common to both → combined girls ≈ 8,400 (site updated). The `ABOUT SWAMI VIVEKANAND TRUST.doc`'s "37,000+" language is now doubly stale (was scholarship instances; site never used it) — still worth fixing at the source if the doc gets reprinted, but no longer blocking anything on the site.
- **Maa Shardamani charts** (`maa-shardamani-trust.html`) — the 7-point cumulative series for girls (105 → … → 3,405) and amount (₹1.33 L → … → ₹164.56 L) is **not in any source doc**. Confirm it (from `figures_till_2025-26.xlsx`?) or remove the charts.
- **Gyan Ganga infra figures** (`gyan-ganga-mission.html`) — **₹1.5 करोड़+**, "7 बालिका विद्यालयों की 16 कक्षाओं" furniture, "श्रीमती तुलसी देवी की स्मृति में", the area list (सिवांची गेट, जालोरी गेट, …) — none in the source doc, which names only 4 works and gives no rupee figure. Trace or remove.
- ~~English book title~~ — resolved: the actual book cover in the divya-gyan hero reads *"Wonderful World After Death"*, matching the site. Leave as is.

---

## 3 · Ready to build  [Claude]

Say the word and I'll do these — no input needed:

- ~~`<img>` dimensions~~ — **done** (`7a1b650`). 304 tags now carry intrinsic `width`/`height`; `img { height: auto }` added.
- **Breadcrumbs** — 28 pages have the unified visible breadcrumb. Only `impact.html` keeps its own inline one (it is on the old activity-* system, pending its own redesign).
- **Purpose-built OG card** — 1200×630 branded share image (currently reusing the hero photo).
- ~~Two mislabeled image files~~ — **done** (`10b56ca`). The lotus symbol was stored 3× as `.png` (all byte-identical JPEG). Consolidated to one `buddhi-vivek-yog-sadhna-symbol.jpg`.
- ~~`impact.html` cross-reference~~ — **done** (`0490f87`, superseded by `0b1c7c4`). Unique-student totals now live in a promoted `.impact-topline` stat strip instead of a small note.
- ~~Student counts refined with exact figures~~ — **done** (2026-09-04). You gave exact unique-student figures: Swami Vivekanand Trust 7,200, Maa Shardamani Trust 7,000, ~5,800 common to both, Gyanyogi Adhyatm Kendra 631 boys. Updated `impact.json` (studentsCombined → लगभग 9,031; studentsGirls → लगभग 8,400; studentsBoys → 631; added a `swami-vivekanand-trust` entry to `perTrust`), `impact-data.json` (the Maa Shardamani highlight line now shows the 7,200/7,000/~5,800 math; boys KPI + summary → 631), and `maa-shardamani-trust.html`'s hardcoded "3,400+" (was the old cumulative-instance count, not a unique-student figure) → "7,000+". Every JSON-driven page (index, index-v2, impact, the trust pages) picked up the new numbers automatically.
- ~~`impact.html` critical review~~ — **done** (`0b1c7c4`). Added the topline stat strip (8,630+ students / ₹6.72 Cr / ~300 families / 30 years + "as of 31 March 2026"); trimmed the "cumulative, not annual" disclaiming left over from the removed count charts; gave boys-education a second KPI (630+). Gyan Ganga Mission stays out of this page by design — its work is free book distribution, no figure-level contribution to highlight here.
- ~~`publications.json` / `publications.html`~~ — **done** (`e50b7f1`). `publications.json` now holds all 9 books; `publications.html` loops over it. Fixed a latent bug where the 3 CSS-cover cards rendered blank. Book JSON-LD (`book: divyaGyan`) still valid.
- **Bio-page facts from `people.json`** — added a `hindiDate` filter (ISO -> "16 जुलाई 1944"); verified the 3 bio pages'' fact grids are consistent with `people.json` and fixed one error (madhu maa''s credentials showed Basanti''s). Not templating the grids themselves — labels + context lines are bespoke per person, and the dates are frozen. `hindiDate` is available for the English build.
- ~~`trusts.json` vs `documents.js`~~ — **done** (`4511322`). `trusts.json` is now the single trust registry (identity + `approvals`); `documents.js` reads it and derives the file lists.
- ~~`sampark.html` design~~ — **done** (`b2ac98f`). Rebuilt on the shared Hindi component layer (hi-section / hi-shell / hi-btn / tokens); dropped the old activity-*/contact-* CSS; contact.js form logic preserved. contact.css deleted (orphaned). `activities-hub.css` still used by impact.html.
- **Wrap in-page numbers in `.num`** — for tabular-figure / Latin-numeral treatment (Phase 2 deferred).
- **Split `style.css`** into base + components and drop it from the Hindi pages that don't need the old English-site rules (Phase 2 deferred).

---

## 4 · Before launch

- **Real-device mobile QA** — the in-app preview pane has been unreliable all through the build; nothing has been eyeballed on an actual phone.
- Remove `noindex` from the homepage once v2 is swapped in.
- `404.html` — check it renders and links back sensibly.
- Lighthouse / performance pass (fonts, image formats, CLS).
- Verify every PDF in `assets/documents/` actually opens.
- **Custom domain** — when pointing `manidweepjodhpur.org` at GitHub Pages: build with `ELEVENTY_PATH_PREFIX=/`, add `src/CNAME` (`www.manidweepjodhpur.org`), uncomment the CNAME passthrough in `.eleventy.js`. Still GitHub-hosted.
- Google Business Profile for मणिद्वीप (Jodhpur).
- Submit `sitemap.xml` to Google Search Console.

---

## 5 · Deferred / noted, not urgent

- **Maa Basanti is named in homepage §3 and §6 before her §8 introduction** — you said "leave it for now". If revisited: drop the names from §3's founding sentence; light 3-word tag on the §6 mention.
- The कर्म साधना "1990 vs 1996" phrasing in the chakra section — you said skip.
- English site (`/en/`) — the whole reason for the `{hi,en}`-keyed data layer. Separate phase.

---

## Done (recent, for reference)

- In-page section nav consolidated into one shared `.page-nav` (`home-hindi.css`) — was copy-pasted 5× as `mission-nav` / `sadhna-kaal-nav` / `yug-nav` / `bvys-nav` / `dg-nav`. Now static + wrapping (no h-scroll), "इस पृष्ठ पर ↓" label, Jodhpur-blue link pills with hover fill. Applied to about-mission + the 4 chapter pages + `testimonials.html` (its nav moved out of the hero into the band); ~6.3 KB of duplicated CSS removed across 6 pages. Catalogued at `/patterns.html` §5b.
- Bio pages: dropped the sticky horizontal in-page pill nav from all three (a biography is a sequential story; the jump nav hid its own last items behind an overflow scrollbar). Section `id`s kept for deep links.
- Bio pages: fixed clear review bugs (`828c4bc`) — stray credential on मधु माँ, study location, h1 pattern, English "folded hands" alt, trust-name transliteration.
- Phase 5: `/transparency.html`, `/itihaas.html`, split FAQ (`/faq.html` practical + `/jigyasa-samadhan.html` deep), `/sadhna-aarambh.html`, `timeline.json` + `faq.json` wired, nav → 5 items, breadcrumbs (utility pages), sampark #visit, kicker-class cleanup.
- Phase 4: homepage rebuild at `/index-v2.html`.
- Trust pages filled against Sandip Sir's source docs (book list, transparency model, scoping nuances).
