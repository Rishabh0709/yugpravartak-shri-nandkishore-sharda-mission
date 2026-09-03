# Phase 4 — Homepage rebuild (draft for review)

**Branch:** `main` · **Commit:** `a5d0029`
**Status:** the new homepage is built at **`/index-v2.html`** (marked `noindex`, not in the sitemap). The current homepage at `/` is untouched. **Review both, then tell me to swap.**

```bash
npm start
```
- Current:  `http://localhost:8080/yugpravartak-shri-nandkishore-sharda-mission/`
- New draft: `http://localhost:8080/yugpravartak-shri-nandkishore-sharda-mission/index-v2.html`

---

## The new narrative (12 sections, audit order)

| # | Section | What changed vs. the current homepage |
|---|---|---|
| 1 | **Hero — the question** | New copy: **"आज के तर्कशील मन के लिए एक सरल साधना।"** + a lead that names Buddhi-Vivek Yoga as the differentiator + **two CTAs** (भैया जी की यात्रा जानें / बुद्धि-विवेक योग साधना क्या है?). The old hero was the org name + motto + a paragraph, no CTA. |
| 2 | **Trust strip** | New. A thin band: 30 वर्ष सेवा · 8,630+ विद्यार्थी · ~300 परिवार · पंजीकृत लोक-न्यास — all from `impact.json`. |
| 3 | **Vision & ध्येय** | Kept, but compressed from a tall section to a two-line band. |
| 4 | **The seeker (1959)** | Moved up near the top (was buried in the Bhaiyaji section). The pyre vow as a pulled quote. This is the human hook. |
| 5 | **Discovery & the belief** | Reframed with **"मणिद्वीप अध्यात्म परिवार की मान्यता है…"** — states the metaphysics as the Parivar's belief (the audit's register fix) + introduces the book. |
| 6 | **Buddhi-Vivek Yoga** | Kept the framing, **added the 6-step diagram** (ज्ञान → विज्ञान → चिंतन → संकल्प → समर्पण → कर्म-साधना). |
| 7 | **Chakra Dharan** | Now a **full-bleed image moment** with one quote, instead of a standard text+image row. |
| 8 | **The lineage** | Names/roles/portraits now come from `people.json`. **Added a horizontal timeline** built from `timeline.json` (1944 → 2021). |
| 9 | **Manidweep** | Trimmed and made visit-focused (address, timings, "आने की योजना बनाएँ"). |
| 10 | **Seva — stories first** | **The big change.** Instead of opening with a tabbed stat widget, it opens with **three real beneficiary stories** — Neetu Deora (SBI officer), Dr Kumudini Dadhich (PhD, lecturer), Jyoti Soni (CA) — pulled from your existing `videos.json`, each with photo, role, a quote, and "supported class X to Y". Then **one summary line** with the `impact.json` figures, then CTAs to the full impact page and more stories. |
| 11 | **Ways to connect** | New. Six quiet cards: साधना जानें · ग्रंथ पढ़ें · मणिद्वीप पधारें · रविवार कक्षा · स्वयंसेवा · शिक्षा में सहयोग. Gives every visitor type a next step. |
| 12 | **Closing** | The जोत से जोत refrain kept; CTA now "मिशन से जुड़ें". |

Result: ~10,500px tall (down from ~16,000), and the "first 10 seconds" questions are answerable from the first two screens.

---

## What I could NOT do (and what's placeholder)

- **Beneficiary stories** use your existing `videos.json` content (per your choice). The three "पूरी कहानी देखें" links point at `/testimonials.html#…`. If you'd rather embed the videos inline or link to Drive directly, say so.
- **No newsletter / WhatsApp signup** — you didn't have a channel link, so the closing CTA points at the contact page. When you have a WhatsApp channel or a mailing list, that's a 10-minute add.
- **Hero background image** — reuses `hi-home-hero-background.png` (5 MB). It shows as a soft wash on the new hero; if you want the Bhaiyaji portrait prominent on the right like the current hero, I can adjust the crop/gradient. Also needs WebP conversion for performance (Phase 6).
- **`impact.html` (the tabbed detailed page)** is unchanged — the homepage no longer duplicates that widget; it links to it instead.

---

## To swap it live (when you approve)

Tell me, and I'll:
1. `git mv src/index.html _archive/index-v1.html`
2. `git mv src/index-v2.html src/index.html`, remove the `noindex` + the `index-v2` title note
3. Rebuild, re-verify links + JSON-LD, commit.

Or, to tweak first: point me at the sections/copy you want changed.

---

## Files

New: `src/index-v2.html`, `assets/css/pages/home-v2.css`, `PHASE-4-CHANGES.md`
Unchanged: `src/index.html` (current homepage), everything else.
