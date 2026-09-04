# Open items & action items

Running backlog for the Hindi site rebuild. Updated as work progresses.
**Last updated:** 2026-09-04 (after Phase 5)

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

### Content to supply
- **FAQ answers** — `src/_data/faq.json` has 6 questions with **draft** answers I assembled from existing content. Review/correct with the Parivar.
- **"साधना कैसे आरम्भ करें"** (`/sadhna-aarambh.html`) — confirm: is there a contact person, a form, or a specific process beyond "come to मणिद्वीप / सिद्धपीठ"? Anything to add.
- **Contact email** — replace `kishoreggm@gmail.com` with `info@manidweepjodhpur.org` in `src/_data/site.json` once the mailbox exists.
- **WhatsApp channel / mailing list** — if/when one exists, the closing CTAs and "जुड़ें" links should point to it instead of the contact page.

### Trust documents still missing (`/transparency.html` shows "शीघ्र उपलब्ध")
- **Financial reports** — Maa Shardamani Trust, Gyanyogi Adhyatm Kendra, Gyan Ganga Mission (only SVT has them, 1996–2024). Drop PDFs in `assets/documents/<id>/financial-reports/<YYYY-YY>.pdf`.
- **Scholarship certificates** — Maa Shardamani Trust, Gyanyogi Adhyatm Kendra. Path: `assets/documents/<id>/scholarship-certificates/`.
- **80G approval numbers** — Gyanyogi, Gyan Ganga (SVT has `AAATS3452LF20218`). Maa Shardamani has no 80G PDF at all — confirm whether it has 80G. Add numbers to `src/_data/documents.js` → `approvals`.

### Donation details — placeholders in `src/data/donation-details.json`
- Gyanyogi SBI branch: `"ENTER BRANCH"`
- 80G approval numbers: `"ENTER APPROVAL NUMBER"` ×3 (Gyanyogi, Maa Shardamani, Gyan Ganga)
- UPI IDs: `"ENTER_UPI_ID"` (Maa Shardamani, Gyan Ganga)
- (No donation UI is built yet — this data is staged for a future donation section on `sampark.html`.)

### Decisions
- **Orphan pages** — `dignitaries-views.html`, `success-stories.html`, `student-testimonials.html` exist but aren't linked anywhere. Link them, merge into `testimonials.html`, or delete.
- **SVT scholarship figure** — the SVT page shows the *combined* girls figure (8,000+ / ₹6.14 Cr, labelled "माँ शारदामणि ट्रस्ट सहित"). Source gives SVT-only = ₹4.5 Cr. Decide: show SVT-only, combined, or both.

---

## 2 · Numbers to verify  [Verify]

- **Gyanyogi Adhyatm Kendra total = ₹57 लाख** (site) vs **₹1.64 करोड़** (Sandip Sir's `ABOUT ADHYATMA KENDRA.doc`, all drafts). You confirmed ₹57 लाख earlier and that ₹1.64 Cr was a copy-paste error from Maa Shardamani. **Get the master doc corrected** or the error keeps propagating.
- **SVT "37,000+ छात्राएँ" / "₹4.5 करोड़"** — still in `ABOUT SWAMI VIVEKANAND TRUST.doc`. Site uses 8,000+ distinct students per your earlier ruling ("37,381 = scholarship instances"). Get the master doc's language fixed.
- **Maa Shardamani charts** (`maa-shardamani-trust.html`) — the 7-point cumulative series for girls (105 → … → 3,405) and amount (₹1.33 L → … → ₹164.56 L) is **not in any source doc**. Confirm it (from `figures_till_2025-26.xlsx`?) or remove the charts.
- **Gyan Ganga infra figures** (`gyan-ganga-mission.html`) — **₹1.5 करोड़+**, "7 बालिका विद्यालयों की 16 कक्षाओं" furniture, "श्रीमती तुलसी देवी की स्मृति में", the area list (सिवांची गेट, जालोरी गेट, …) — none in the source doc, which names only 4 works and gives no rupee figure. Trace or remove.
- **English book title** — site uses *"The Wonderful World After Death"* (in `publications.json`, `publications.html`, `gyan-ganga-mission.html`, archived English pages). Sandip Sir's doc has it Krutidev-mangled. Confirm the exact published English title.

---

## 3 · Ready to build  [Claude]

Say the word and I'll do these — no input needed:

- **`<img>` dimensions** — 307 `<img>` tags, none carry `width`/`height` or `aspect-ratio` → layout-shift on load. Dedicated pass needed (read real sizes, add attrs or CSS `aspect-ratio` on containers).
- **Breadcrumbs on legacy pages** — the ~27 converted pages. Their hero top-padding needs retuning first (the header placeholder already reserves space).
- **Purpose-built OG card** — 1200×630 branded share image (currently reusing the hero photo).
- **`impact.html` cross-reference** — surface the distinct-student figure (8,630+) alongside the "scholarship instances" numbers so a reader sees both.
- **`publications.json`** — add the 2004 English edition entry (currently 9 of 10 works; used for Book JSON-LD).
- **Bio-page headers from `people.json`** — `shri-nandkishore-sharda.html`, `basanti-manihar.html`, `madhubala-advani.html` still hardcode name/role/portrait; wire them to `people.json`.
- **`trusts.json` vs `documents.js`** — `trusts.json`'s doc-path fields now duplicate `documents.js`. Reconcile (point `trusts.json` at documents, or trim it to identity data only).
- **`sampark.html` design** — still on the old English-v1 `activity-*` / `contact-*` CSS system, visually inconsistent with the rest of the Hindi site. Rebuild on the shared component layer.
- **`publications.html`** — 9 book cards hand-written; could be driven by a data file (`publications.json` expanded).
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

- Phase 5: `/transparency.html`, `/itihaas.html`, split FAQ (`/faq.html` practical + `/jigyasa-samadhan.html` deep), `/sadhna-aarambh.html`, `timeline.json` + `faq.json` wired, nav → 5 items, breadcrumbs (utility pages), sampark #visit, kicker-class cleanup.
- Phase 4: homepage rebuild at `/index-v2.html`.
- Trust pages filled against Sandip Sir's source docs (book list, transparency model, scoping nuances).
