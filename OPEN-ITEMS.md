# Open items & action items

Running backlog for the Hindi site rebuild. Updated as work progresses.
**Last updated:** 2026-09-09 (English site — core 16 + donate + Tier A data-driven pages; rest of the second batch on hold for data)

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

- ~~`impact.html` — slim it or delete it?~~ — **keep as-is** (owner's call, 2026-09-06): "it makes sense to have all charts, figures and numbers in one place." Still the only page on the old `activity-*`/`evidence-*` CSS — pending its own redesign, not a content decision.
- ~~Student headcounts~~ — **done** (2026-09-06). The girls figures went through too many revisions (37,000 → 8,000 → 8,400 → 9,031 → …), so they're **removed from the SVT + Maa Shardamani trust pages and the homepage** (those now lean on ₹ amounts + the 45-school / 32-college reach). Student counts still appear on: impact.html topline (**8,631+**, girls/boys split in the sub-line), the Maa Shardamani detail-record highlight (**8,000+ girls**), the boys detail record (**631**), and the Gyanyogi trust page (**631**). Don't re-add counts to the SVT/Maa Shardamani pages or homepage without a verified figure. See `impact.json` `_note`.

### Content to supply / review
- **Review the content of the three new Phase-5 pages** — all drafted by Claude from existing site copy + Sandip Sir's source docs, not yet vetted by the Parivar:
  - `/faq.html` — now carries BOTH the "साधना कैसे आरम्भ करें" guide (steps, where taught, what to expect — merged in from the former `/sadhna-aarambh.html`, now a redirect stub) and the 5 practical FAQ answers (also listed below)
  - `/itihaas.html` — history/timeline (renders `timeline.json`; check the event titles/bodies and the two phase notes)
  Confirm facts, tone, and register; flag anything to change.
- **FAQ answers** — `src/_data/faq.json` has 5 questions with **draft** answers Claude assembled from existing content. Review/correct with the Parivar. (The 6th, "कैसे आरम्भ करें?", was dropped when the sadhna-aarambh guide was merged into the same page — it duplicated the section.)
- **Bio pages — content gaps & facts to verify** (from the 2026-09-04 review of `shri-nandkishore-sharda.html`, `basanti-manihar.html`, `madhubala-advani.html`; clear bugs already fixed in `828c4bc`):
  - भैया जी page has **no चक्र धारण (1990) section** — it has its own homepage section but is only a passing image caption in the definitive bio.
  - भैया जी §कर्म-साधना reads as if he founded SVT; trust page + source docs say माँ बसन्ती founded it (10 जून 1996) on Maa's order, भैया जी was अध्यक्ष. Reword.
  - माँ बसन्ती's 2003–2021 leadership underrepresented — founding Gyan Ganga Mission (2003), Gyanyogi Adhyatm Kendra (2010), food aid (2020) don't appear on her bio.
  - मधु माँ — ~50-year gap between 1971 (enrolled MA) and 2021 (leadership); "पाँच दशकों की साधना" arc is absent.
  - **Verify:** बुआ/फुफेरी family link (page says भैया जी = "बुआ के लड़के"; `people.json` says बसन्ती = "भैया जी की फुफेरी बहन" — different relationships); "आजीवन ब्रह्मचारिणी / निर्मल ब्रह्मचर्य" framing (confirm Parivar wants it public); specific family names + "बसन्त पंचमी 1995"; "जोधपुर, बालोतरा, जसोल में उनके नाम से मार्ग"; मधु माँ "सिरसा, पंजाब".
- **"साधना कैसे आरम्भ करें"** (now the top of `/faq.html`) — confirm: is there a contact person, a form, or a specific process beyond "come to मणिद्वीप / सिद्धपीठ"? Anything to add.
- **Contact email** — replace `kishoreggm@gmail.com` with `info@manidweepjodhpur.org` in `src/_data/site.json` once the mailbox exists.
- **WhatsApp channel / mailing list** — if/when one exists, the closing CTAs and "जुड़ें" links should point to it instead of the contact page.

### Trust documents
- ~~Financial reports for Maa Shardamani / Gyanyogi / Gyan Ganga~~ — **done** (2026-09-07). 6 years each (2019-20 → 2024-25) under `assets/documents/<id>/financial-reports/`; the transparency page and each trust page's docs strip list them (build auto-derives). SVT spans 1996-97 → 2024-25.
- ~~80G / 12A registration numbers~~ — **done** (2026-09-07). URNs extracted from the certificate PDFs into `trusts.json` → `approvals` (12A + 80G for SVT/Gyanyogi/Gyan Ganga; 12A only for Maa Shardamani, which has **no 80G** — confirmed by the absence of an 80G order in its legal folder).
- ~~**Latest year** — add 2024-25 for each trust~~ — **done** (2026-09-08). `2024-25.pdf` added for all four trusts.
- **Scholarship certificates** — only SVT publishes these (per your note, 2026-09-04); the other three trusts no longer reference them.
- **School acknowledgement letters** — SVT only (teachers send these; other trusts don't get them). Added 2026-09-08: `assets/documents/swami-vivekanand-trust/school-acknowledgements/2025-26.pdf`, wired via `documents.js` → `schoolAcknowledgements` and a folder-derived block on `transparency.html`. Earlier years to be supplied later — just drop `YYYY-YY.pdf` into the folder.

### Donate page — `/donate.html` + `/en/donate.html`  (rebuilt 2026-09-09)

Rebuilt from `_archive/english-v1/donate.html` onto the new design system (`page-hero--plain` + `hi-section-heading` + `assets/css/pages/donate.css`; old 916-line `donation.css` deleted). `assets/js/donation.js` rewritten — bilingual (reads `documentElement.lang`), fetches `/data/donation-details.json` via `window.__BASEURL__`, builds the `<select>` from the JSON (can't drift), email target comes from `data-email` (= `site.contact.email`), transparency link is locale-aware, 80G form fields hide for a 12A-only trust, an "incomplete" banner shows for any trust whose data isn't confirmed. Linked from the footer "The trusts" group ("Support the work" / "सहयोग करें"). Not in the top nav — flag if you want it there.

**[You] — `src/data/donation-details.json` still needs the trust to supply** (each is `"TRUST TO SUPPLY"` in the file and shows a "to be confirmed" state + banner on the page until filled, and `"complete": false` → `true`):
- Gyanyogi Adhyatm Kendra — **SBI branch name**
- Maa Shardamani Trust — **UPI ID** + `mst-upi-qr.png` (QR image missing from `assets/images/donation/`)
- Gyan Ganga Mission — **UPI ID** + `snksggm-upi-qr.png` (QR image missing)
- 80G / 12A numbers are already filled (from the certificate PDFs). Maa Shardamani is 12A-only — the page handles that (no PAN field, "receipt not 80G" note).

**[You] — the 80G receipt step is still a `mailto:`** to `kishoreggm@gmail.com` (`site.contact.email`). It now says plainly that PAN/address go into that unencrypted email and to send only from an account you control — but a server-side form (Formspree / Google Form / a serverless endpoint) is the real fix, and the email should move to `info@manidweepjodhpur.org` when that mailbox exists.

**[You]** — confirm the cause → trust routing in the JSON `activities` list (girls-school→SVT, girls-higher→Shardamani, boys/family/women→Gyanyogi, literature→Gyan Ganga).

### Decisions
- ~~Orphan pages~~ — **done** (`97d8600`). `dignitaries-views`, `success-stories`, `student-testimonials` were redirect stubs; deleted. Content lives in `/testimonials.html` (4 sections). Fixed a dead `success-stories.html` ref in `videos.js` and a duplicate kicker on that page.
- **SVT scholarship figure** — the SVT page shows the *combined* girls figure (8,000+ / ₹6.14 Cr, labelled "माँ शारदामणि ट्रस्ट सहित"). Source gives SVT-only = ₹4.5 Cr. Decide: show SVT-only, combined, or both.
- ~~`impact.html` — "संचयी छात्रवृत्ति उदाहरण" KPI stat~~ — **done.** Count KPI dropped from all three education records (₹ KPI kept); summary lines reworded off the counts; "विद्यार्थी-संबंधी आँकड़ों को कैसे पढ़ें" aside removed. Boys record now says 630+ (Adhyatm Kendra's own figure); a highlight line after the Maa Shardamani chart states the 8,000+ combined girls figure (SVT + Maa Shardamani).

---

## 2 · Numbers to verify  [Verify]

- **Gyanyogi Adhyatm Kendra total = ₹57 लाख** (site) vs **₹1.64 करोड़** (Sandip Sir's `ABOUT ADHYATMA KENDRA.doc`, all drafts). You confirmed ₹57 लाख earlier and that ₹1.64 Cr was a copy-paste error from Maa Shardamani. **Get the master doc corrected** or the error keeps propagating.
- ~~SVT "37,000+ छात्राएँ" / "₹4.5 करोड़"~~ — **superseded** (2026-09-04). Reconciled exact figures: SVT 7,200 (1,000 SVT-only + 6,200 continued to Maa Shardamani), Maa Shardamani 7,000 (the same 6,200 + 800 its own) → combined unique girls = 1,000 + 6,200 + 800 = **8,000 exactly** (site shows "8,000+"). The `ABOUT SWAMI VIVEKANAND TRUST.doc`'s "37,000+" language is now doubly stale (was scholarship instances; site never used it) — still worth fixing at the source if the doc gets reprinted, but no longer blocking anything on the site.
- ~~Maa Shardamani charts~~ — **removed** (`maa-shardamani-trust.html`). The girls chart showed the cumulative-instance count (3,405) that contradicts the 7,000+ unique figure used everywhere else; the amount chart duplicated the one on impact.html. Both inline-SVG charts + their CSS deleted; the section keeps its heading, prose, 3-stat band (2001 / 7,000+ / ₹1.64 करोड़+) and image.
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
- ~~Student counts refined with exact figures~~ — **done** (2026-09-04, reconciled after two rounds). Final breakdown: SVT 7,200 (1,000 SVT-only + 6,200 continued to Maa Shardamani) + Maa Shardamani 7,000 (the same 6,200 + 800 its own) = **8,000 unique girls exactly**; Gyanyogi Adhyatm Kendra **631** boys; combined **8,631+**. Updated `impact.json` (studentsCombined/studentsGirls/studentsBoys + the `perTrust` entries and `_note` derivation), `impact-data.json` (Maa Shardamani highlight line states the 7,200/7,000/6,200 math; boys KPI + summary → 631), and `maa-shardamani-trust.html`'s hardcoded count → "7,000+". Every JSON-driven page (index, index-v2, impact, the trust pages) picked up the numbers automatically.
- ~~`impact.html` critical review~~ — **done** (`0b1c7c4`). Added the topline stat strip (8,630+ students / ₹6.72 Cr / ~300 families / 30 years + "as of 31 March 2026"); trimmed the "cumulative, not annual" disclaiming left over from the removed count charts; gave boys-education a second KPI (630+). Gyan Ganga Mission stays out of this page by design — its work is free book distribution, no figure-level contribution to highlight here.
- ~~`publications.json` / `publications.html`~~ — **done** (`e50b7f1`). `publications.json` now holds all 9 books; `publications.html` loops over it. Fixed a latent bug where the 3 CSS-cover cards rendered blank. Book JSON-LD (`book: divyaGyan`) still valid.
- **Bio-page facts from `people.json`** — added a `hindiDate` filter (ISO -> "16 जुलाई 1944"); verified the 3 bio pages'' fact grids are consistent with `people.json` and fixed one error (madhu maa''s credentials showed Basanti''s). Not templating the grids themselves — labels + context lines are bespoke per person, and the dates are frozen. `hindiDate` is available for the English build.
- ~~`trusts.json` vs `documents.js`~~ — **done** (`4511322`). `trusts.json` is now the single trust registry (identity + `approvals`); `documents.js` reads it and derives the file lists.
- ~~`sampark.html` design~~ — **done** (`b2ac98f`). Rebuilt on the shared Hindi component layer (hi-section / hi-shell / hi-btn / tokens); dropped the old activity-*/contact-* CSS; contact.js form logic preserved. contact.css deleted (orphaned). `activities-hub.css` still used by impact.html.
- **Wrap in-page numbers in `.num`** — for tabular-figure / Latin-numeral treatment (Phase 2 deferred).
- **Split `style.css`** into base + components and drop it from the Hindi pages that don't need the old English-site rules (Phase 2 deferred).

---

## 4 · Before launch

- **Real-device mobile QA** — the in-app preview pane has been unreliable all through the build; nothing has been eyeballed on an actual phone. Include the `/en/` pages (Spectral at display sizes, English heading wrap, the redirect stubs).
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

---

## 6 · English site (`/en/`)

**In progress (started 2026-09-09).** Lives at `src/en/*.html` → URL `/en/…`, one file per Hindi page, sharing every stylesheet. `site.locales.en.enabled` is still **`false`** (no language switcher shown) and `src/en/en.11tydata.json` sets `noindex: true` — flip both at launch.

**Done — CSS/plumbing:**
- Three-tier CSS: `tokens → style → responsive → components.css` (shared, was `home-hindi.css`) `→ lang-<locale>.css → page CSS`. `home-hindi-concept.css` → `home-concept.css`. Body is `class="site <locale>-home <slug>-page"`.
- `lang-en.css` — Spectral (headings) + Inter Tight (body), Latin heading metrics, prose measure, prose line-height pulled to 1.72 across the `-copy`/`__copy` families (page sheets set 1.85–1.95 for Devanagari), footer colour fixes.
- `head.njk` locale-aware (CSS, webfont, hreflang/x-default). `.eleventy.js` `enDate` filter ("16 July 1944"). `site.json` `tagline.en` / `descriptionDefault.en`.
- `enRedirects.js` + `src/en/fallback-redirects.njk` — every non-translated Hindi page gets a `/en/<slug>.html` stub that redirects to `/<slug>.html`, so shared nav/footer `/en/` links never 404. A real `src/en/<slug>.html` overrides the stub.

**Done — 16 core pages translated** (drafts, from the Hindi + `_archive/english-v1/`, warm register; **not yet Parivar-reviewed**): `index`, `index-v2`, `about-mission`, `itihaas`, `divya-gyan`, `buddhi-vivek-yog-sadhna`, `nishkam-karm-sadhna`, the 4 trusts, `transparency`, `sampark`, and the 3 lineage bios. Plus **`donate`** (rebuilt) and **Tier A** (2026-09-09): `news-events`, `testimonials` + `video-detail`, `gallery` — the data-driven pages whose JSON was already bilingual, so only the static shell was translated.

**JS fixed for `/en/` (2026-09-09):** `news-events.js`, `videos.js` now fetch via `window.__BASEURL__` and resolve asset paths with it (relative `data/…` broke from `/en/`); `videos.js` detail view uses `.hi-shell`/`.hi-kicker` for both languages (was `.container`/`.section-eyebrow` for EN); `gallery.js` two hardcoded Hindi strings now locale-aware. `donation.js` already done. **Any other data-fetching JS (`impact-data.js`) needs the same fix before its page is translated.**

**Data files touched for EN:** `timeline.json` (event `body.en` filled), `publications.json` (`divyaGyan.description.en`), `site.json`. Still Hindi-only / partial `.en`: `faq.json` (all empty), `bookReviews.json` (2/24), `publications.json` (~27/64), `image-manifest.json` `altEn` (142/157 empty — EN pages use inline `alt` instead).

**Still to do — the rest of the second batch is ON HOLD for actual data / Parivar input (owner's call, 2026-09-09):**
- **[You]** Review all the English drafts for tone/accuracy with the Parivar. Confirm the term glossary (currently follows `navigation.json`: Bhaiyaji, Manidweep, Divya Gyan, Buddhi-Vivek Yoga, Nishkam Karma, Yugpravartak kept as proper nouns; "left the physical body" for चैतन्यस्वरूप).
- **Held — need data / decision:** `faq` (`faq.json` en empty, Hindi drafts unvetted) · `jigyasa-samadhan` (247 KB `faq-hindi.js` — Maa Basanti's recorded answers, Parivar decision: skip or approve a subset) · `impact` (data ready, but page still on old `activity-*` CSS — redesign HI first) · `publications` (needs ~37 en strings in `publications.json`) · `book-review` / `bookReviews.json` (`book-review.md` is unverified — transcribed from blurry photos) · `videos.json` (7/11 testimonial items lack `en.excerpt`/`paragraphs` — cards render lighter until supplied).
- **Held — full prose translation, no archive help:** `sunday-sanskar-classes`, `margdarshan-siddhant` (now the merged shiksha-darshan + principles page), `bhaiyaji-sadhna-kaal`, `bhaiyaji-yugpravartak`, `sadhna-places`, `faq` (now includes the merged getting-started guide), `adhyatmik-gyan-charcha`, `logo`. (`shri-nandkishore-sharda-chintan` merged into margdarshan; `sadhna-aarambh` merged into faq — no longer pages.)
- Each held page still redirects to Hindi via its `/en/` stub. When translated: add the slug to `enRedirects.js` `TRANSLATED`.
- **At launch:** flip `site.locales.en.enabled` → `true`, remove `noindex` from `src/en/en.11tydata.json`, re-verify hreflang + the language switcher in header/footer.

---

## Done (recent, for reference)

- **buddhi-vivek-yog-sadhna de-clutter** (2026-09-10). Same digital lotus chart (`-original.jpg` == `-symbol.jpg`) was in the hero + §method + §lotus — 3× in the first 3 screens. Now: hero → `gallery/sunday-sanskar-classes/01-full.webp`; §method → image-free single prose column (figcaption → `.bvys-note`); §lotus keeps the poster as its one right place (it's the labelled six-steps/three-experiences diagram) and drops the `.bvys-flow` trio that echoed the essence strip. Dead CSS removed. Follow-up: §method got a real gathering photo back (`spiritual-discourses/02-full`); §six-steps / §anubhuti standfirsts trimmed to one line. §places rewritten from supplied source text — now a Siddhapeeth-only section (heading, prose, single `sadhna-places/07-full` photo, Manidweep photo + mentions dropped, nav item shortened). HI + EN. **Reworked prose is close to the trust's own source now; §method/§lotus prose still not Parivar-reviewed.**
- **divya-gyan images + universal standfirst fix** (2026-09-11). divya-gyan: hero photo removed (back to `--plain`); §vision cover → real cover photo `books/04-full`; §mission → the book's विमोचन photo `gallery/gyan-ganga-mission/04-full`; §chapters/§reviews standfirsts trimmed to one line. **Universal:** `components.css` `.hi-section-heading--center p` / `.hi-lead` dropped the 720px measure cap (now spans the ~1000px heading block) and got `text-wrap: balance` — short centred standfirsts sit on one line, long ones split evenly. Affects all 34 pages with a centred section heading.
- **sadhna-aarambh merged into faq** (2026-09-11). The two pages were complementary (a "how to begin" guide + a newcomer Q&A on the same design system, with FAQ Q4 = a compressed version of the whole guide). `/faq.html` now leads with the guide (4 steps → साधना-स्थल → क्या अपेक्षा रखें) then the "सामान्य प्रश्न" accordion; page renamed "साधना कैसे आरम्भ करें", breadcrumb parent = buddhi-vivek, added a page-nav. FAQ Q4 dropped from `faq.json` (5 left). `sadhna-aarambh.html` → redirect stub to `/faq.html`; `sadhna-aarambh.css` merged into `faq.css` and deleted; `enRedirects.js` SKIP += `sadhna-aarambh`; nav collapsed the two items to one ("साधना आरम्भ करें एवं सामान्य प्रश्न"); 4 inbound links (buddhi-vivek + index-v2, HI+EN) repointed. HI only. **Merged/reworked copy not Parivar-reviewed.**
- **publications: long titles wrap** (2026-09-11). `.publication-card h3` had `white-space: nowrap`; Hindi titles up to 127 chars overflowed the card. Dropped nowrap (+ `overflow-wrap: anywhere`); same fix on the CTA h2.
- **adhyatmik-gyan-charcha photos** (2026-09-11). Page was prose-only. Added a photo hero (`spiritual-discourses/01-full`) and two framed `.agc-figure` section images (`03-full` in §format, `07-full` in §impact) from the spiritual-discourses album. Manifest entry created. HI only.
- **gallery lightbox images fixed** (2026-09-10). Every enlarged image 404'd in production. `gallery.js` set `image.src = card.dataset.full` verbatim, but `data-*` attributes aren't rewritten by `EleventyHtmlBasePlugin`, so the root-relative `/assets/...` path dropped the `/yugpravartak-.../ ` pathPrefix (card thumbnails were fine — their `<img src>` *is* rewritten). Now resolved against `window.__BASEURL__` via a `withBase()` helper. One file, HI + EN (shared script).
- **nishkam-karm-sadhna restructure** (2026-09-10). Was 6 sections, 3 of them preamble/recap all restating "it's one coordinated selfless sadhana". Now 4: hero → **§vision** (merged old §why + §flow; dropped the meta-note that narrated the page's own IA and the duplicate aphorism; heading onto standard `.hi-section-heading` — killed the bespoke 4.8rem `white-space:nowrap` overflow bug) → **§institutions** (compact "four dimensions" legend strip replaces the deleted standalone §pillars section; the 4 trust cards fixed — Maa Shardamani 2 distinct activities not 2 scholarship dupes; Gyan Ganga = publishing + its previously-missing school-infrastructure work; Gyanyogi dropped `--wide` so all 4 cards match width; distinct images throughout, new manifest keys) → §closing (kept the verse as the single bookend; dropped the hero flow-chips). ~230 lines of dead CSS removed (`.karma-mantra`/`.karma-flow`/`.karma-summary`/`.karma-hero-flow`/`.karma-bridge`/`.karma-pillar`). HI + EN. **Reworked prose not Parivar-reviewed.**
- **chintan + margdarshan merged** (2026-09-10). `shri-nandkishore-sharda-chintan` and `margdarshan-siddhant` were ~75% duplicate content (same principles, same monogram-card device, cross-linked each other). Now one page at `/margdarshan-siddhant.html`: Bhaiyaji's education philosophy (chintan's 5 prose sections condensed to 1, + his portrait `bhaiyaji-radiant-portrait` + pull-quote) → full-width `‘सर्वजन हिताय, सर्वजन सुखाय’` motto band → the 6 principles (now numbered १–६, not arbitrary monograms) → a `/transparency.html` link → closing. `/shri-nandkishore-sharda-chintan.html` is a redirect stub (noindex, out of sitemap; added to `enRedirects.js` SKIP so no `/en/` alias). Nav collapsed to one item ("शिक्षा-दर्शन एवं मार्गदर्शन सिद्धान्त"); SVT + nishkam-karm-sadhna CTAs repointed (SVT's 2nd CTA now → the bio). `shri-nandkishore-sharda-chintan.css` deleted. HI only. **New/reworked Hindi prose — not Parivar-reviewed. Sanskrit changed to "सर्वजन हिताय, सर्वजन सुखाय" (dropped the non-standard visarga) — verify with Parivar.**
- **transparency page rebuild** (2026-09-09). Was a long stack of 4 full-width trust sections, each with 3-4 separately-headed blocks (SVT's 27 financial-report pills dominated). Now: hero → `.tr-callout` (the "आर्थिक सहयोग का प्रबंधन" principle) → `.tr-grid` of 4 `.tr-card`s, 2-up ≥ ~660px → closing. Registration PDFs are `.tr-cred` chips in each card header (chip = the download link). Financial reports / certs / acknowledgements are `.tr-pills` rows; long lists (only SVT) show recent 6 + a native `<details class="tr-more">` "सभी 27" disclosure. `assets/js/transparency.js` (progressive enhancement) opens a card's `<details>` when deep-linked via `#<id>-records` (the 8 links from trust-page transparency strips still work). `documents.js` sorts years desc + pre-splits `financialReportsRecent`/`Rest`/`Earliest`. Old `.tr-trust`/`.tr-doclist`/`.tr-yeargrid` CSS removed; `patterns.html` §6f updated. HI + EN. `:target` card-highlight CSS is in place but couldn't be visually confirmed (Browser pane wouldn't render this session).
- **gyanyogi-adhyatm-kendra restructure** (2026-09-09). Reworked around the thread "every service began from a real need of the Kendra's own students and their families". Food assistance (2020), yoga (2022) and the सिलाई केन्द्र (2025) now each get their own full alternating-column section (year kicker + why + outcome) instead of one shallow card each. Dropped: the pillar grid, the standalone numbers band, the timeline section (it retold the pillars), and the vague "समग्र व्यक्तित्व विकास" pillar. Boys'-education figures fold into that section as `.gyanyogi-copy__stat`. Closing is now the four-streams synthesis. Higher-res food + sewing photos (`gallery/*/06-full.webp`). Dead `.gyanyogi-pillar*` / `.gyanyogi-journey` / `.gyanyogi-impact*` CSS removed. HI + EN. **New Hindi prose — not yet Parivar-reviewed.**
- **UI polish pass, trust + chapter pages** (2026-09-09). (1) `.hi-section-heading` is now truly full-width — `max-width: none` on the block, h2 scale pulled down to `clamp(1.95rem, 3.2vw, 2.95rem)` / `line-height 1.18` (was `3.6rem` / 1.15) so 50+ char headings stop wrapping to two lines; one verbose SVT method-title shortened. (2) Pull-quote / stat callouts (`.vivekanand-quote`, `.shardamani-stats`, `.dg-quote`, `.bvys-conclusion`) lifted out of the two-column copy columns into full-width centred bands after the grid — no more dead space on the right. (3) `.trust-docs` (registration & transparency strip) moved to the end of `<main>` after the closing CTA and rebuilt as a full-width info-left / CTA-right band (`components.css`); SVT paragraph trimmed. (4) "सफलता की कहानियाँ / success stories" text-link added under the impact stats on SVT + maa-shardamani (HI + EN). (5) SVT hero image → `gallery/scholarship-distribution/01-full.webp`. (6) index-v2 §8 lineage mini-timeline removed (broke the flow). `IMAGES.md` added — photo-replacement guide.
- **Section-heading standardisation** (2026-09-06). One canonical `.hi-section-heading` block everywhere. Fixed three bugs on index-v2: (1) the *seeker* h2 had no rule → inherited `line-height: 1.85` (huge gap between wrapped lines); (2) `.hi-knowledge-panel__content h2 { white-space: nowrap }` pushed the *divya-gyan* heading out of its column; (3) `align-items: center` on image+copy grids floated short images to the vertical middle, orphaning the heading. Now: single h2 scale (`clamp(2rem, 3.6vw, 3.6rem)`, `line-height 1.15`, `text-wrap: balance`, no `nowrap`); all image+copy grids use `align-items: start` (home-hindi.css `.hi-yug__layout` / `.hi-manidweep__layout`, concept.css `.hi-knowledge-panel` / `.hi-sadhna-focus`, home-v2.css `.v2-seeker__grid`, and 10 interior page `*-grid` rules). On index-v2 the heading is now a **full-width `<header class="hi-section-heading">` above the two-column grid** (not inside the copy column) for seeker / divya-gyan / yug-parivartan / manidweep — this un-cramps the h2 (each now fits on one line where it was wrapping to two); karma → `--center`.
- **Interior pages: same treatment rolled out** (2026-09-06). All 43 two-column content sections across 10 pages (`bhaiyaji-yugpravartak`, `buddhi-vivek-yog-sadhna`, `divya-gyan`, `gyanyogi-adhyatm-kendra`, `maa-shardamani-trust`, `margdarshan-siddhant`, `shri-nandkishore-sharda-chintan`, `swami-vivekanand-trust`, `about-mission`, `bhaiyaji-sadhna-kaal`) now carry a full-width `.hi-section-heading` above the `*-grid`; the h2 dropped into the shared scale (was up to ~98px on chintan). Per-page `.*-copy h2` rules are now dead (left in place). Also fixed a pre-existing `--reverse` bug on chintan + vivekanand where the alternating sections weren't alternating (DOM order was copy-first for normal / media-first for reverse — flipped the `order:2` from `.*-media` to `.*-copy`). `essence`/`gallery` keep their deliberate tiny eyebrow labels. Full interior-page heading-markup convergence onto `.hi-section-heading` is still the deferred §6-shapes refactor. patterns.html §4 + TEMPLATES.md updated.
- Shared `.page-hero` component (`home-hindi.css`, `05c0e70`) — kicker/h1/lead + optional `.hi-actions` CTA row + optional `.page-hero__meta` stat row. Two forms: photo (`.page-hero__bg` `<img>`, static — replaces the old CSS-`url()` backgrounds and the gyanyogi autoplay `<video>`, ~5 MB webm+mp4 deleted) and plain (`.page-hero--plain`, no image). Catalogued at `/patterns.html` §5c.
- **`.page-hero` rolled out to all 22 interior heroes** (2026-09-06). Photo: swami-vivekanand-trust, maa-shardamani-trust, gyan-ganga-mission, sunday-sanskar-classes, divya-gyan, bhaiyaji-yugpravartak, buddhi-vivek-yog-sadhna. Plain: bhaiyaji-sadhna-kaal, margdarshan-siddhant, shri-nandkishore-sharda-chintan, nishkam-karm-sadhna, faq, itihaas, sadhna-aarambh, sampark, transparency, adhyatmik-gyan-charcha, publications, sadhna-places, news-events, about-mission, jigyasa-samadhan. ~22 bespoke `*-hero` CSS blocks removed; two transparent-header overlays (gyan-ganga, sadhna-kaal) dropped; sadhna-kaal's 8 MB PNG background dropped. about-mission lost its small divine-illustration figure + song-lyric caption; jigyasa-samadhan's "चिंतन का आमंत्रण" note card folded into the hero lead as a second line. **Deliberately left on bespoke heroes:** homepage (`hi-hero`), the 3 bio pages (portrait + pull-quote), testimonials (`video-hero`, shared with video pages), gallery (separate `gallery-*` design system), impact.html (old `activity-*` system, pending its own redesign).
- In-page section nav consolidated into one shared `.page-nav` (`home-hindi.css`) — was copy-pasted 5× as `mission-nav` / `sadhna-kaal-nav` / `yug-nav` / `bvys-nav` / `dg-nav`. Now static + wrapping (no h-scroll), "इस पृष्ठ पर ↓" label, Jodhpur-blue link pills with hover fill. Applied to about-mission + the 4 chapter pages + `testimonials.html` (its nav moved out of the hero into the band); ~6.3 KB of duplicated CSS removed across 6 pages. Catalogued at `/patterns.html` §5b.
- Bio pages: dropped the sticky horizontal in-page pill nav from all three (a biography is a sequential story; the jump nav hid its own last items behind an overflow scrollbar). Section `id`s kept for deep links.
- Bio pages: fixed clear review bugs (`828c4bc`) — stray credential on मधु माँ, study location, h1 pattern, English "folded hands" alt, trust-name transliteration.
- Phase 5: `/transparency.html`, `/itihaas.html`, split FAQ (`/faq.html` practical + `/jigyasa-samadhan.html` deep), `/sadhna-aarambh.html`, `timeline.json` + `faq.json` wired, nav → 5 items, breadcrumbs (utility pages), sampark #visit, kicker-class cleanup.
- Phase 4: homepage rebuild at `/index-v2.html`.
- Trust pages filled against Sandip Sir's source docs (book list, transparency model, scoping nuances).
