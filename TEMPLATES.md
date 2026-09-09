# Template catalogue

The living reference is a rendered page: **`/patterns.html`** (source: `src/patterns.html`,
styles: `assets/css/pages/patterns.css`). It is `noindex` and excluded from the sitemap and
nav — reach it by URL only. Run `npm start` and open
`…/yugpravartak-shri-nandkishore-sharda-mission/patterns.html`.

It shows a live render **and** the markup for every shared building block:

1. **Design tokens** — `assets/css/tokens.css` (colour, type scale, radius, shadow, spacing)
2. **Text primitives** — `.hi-kicker`, headings, `.hi-lead`, `.hi-prose`, `.hi-inline-link`, `.hi-text-link`
3. **Buttons & CTA rows** — `.hi-btn--primary / --outline / --soft`, `.hi-actions` (`--center`)
4. **Section frame** — `.hi-section` › `.hi-shell` › `.hi-section-heading` (`--center`). The heading is *always* the `<header class="hi-section-heading">` block (kicker + h2 + optional `<p>`), full-width directly in `.hi-shell` **above** the content — never a bare `span`+`h2` inside a two-column copy column. The grid below carries only image + prose, `align-items: start`. One h2 scale (`clamp(2rem, 3.6vw, 3.6rem)`, `line-height 1.15`, `text-wrap: balance`); no `white-space: nowrap` on headings. The heading block has `max-width: none` (the h2 spans the whole shell so a medium heading stays on one line); the standfirst `<p>` keeps its own `max-width: 720px` reading measure. `--center` caps at 1000px; closing/CTA bands narrow that further per-page (~860–1040px) to keep the centred h2 grouped with its lead.
5. **Breadcrumb** — the `breadcrumb: true` front-matter component
5b. **In-page section nav** — `.page-nav` (shared, in `components.css`). Overview/topic pages only, not sequential bios.
5c. **Page hero** — `.page-hero` (shared, in `components.css`). Every interior page's hero: kicker / `h1` / lead + optional `.hi-actions` CTA row + optional `.page-hero__meta` stat row. With a photo (`.page-hero__bg` `<img>`, static — the lightweight alternative to a video hero) or plain (`.page-hero--plain`, no image, for text-forward pages). Homepage keeps `hi-hero`; the 3 sequential bio pages keep their portrait + pull-quote hero.
6. **Recurring section shapes** — two-column media+copy, numbered steps, feature-card grid,
   stat strip, vertical timeline, document list, pull-quote, closing CTA band
7. **A new page, start to finish** — the checklist

## CSS layering (loaded on every page, in order)

`tokens.css` → `style.css` → `responsive.css` → `components.css` (the shared `hi-*`
component + chrome layer, language-neutral) → `lang-<locale>.css` (`lang-hi.css` /
`lang-en.css` — font stack, heading metrics, script typography, footer colour fixes)
→ the page's own `extraCss`.

The body carries `class="site <locale>-home <slug>-page"`. `.site` is the hook the
chrome rules in `components.css` key off; `.hindi-home` / `.english-home` is the hook
for the language layer. The English site lives at `src/en/*.html` (URL `/en/…`), one
file per Hindi page, sharing every stylesheet — only `lang-en.css` differs.

## Conventions

- Build new pages (and the English site) from the §6 shapes. Only add a scoped
  `assets/css/pages/<slug>.css` for genuinely new layout.
- The §6 shapes currently live under page-specific prefixes (`gyanyogi-step`,
  `shardamani-step`, `bvys-step` …). Extracting a shared class set for them is the next
  CSS refactor (see `OPEN-ITEMS.md` §3). The in-page nav (`.page-nav`), the page
  hero (`.page-hero`), and the **section heading** (`.hi-section-heading`, always
  full-width above the two-column grid) have already been extracted; the per-page
  `*-nav` / `*-hero` copies are gone (except the homepage `hi-hero` and the 3
  portrait bio heroes), and every two-column content section now hoists its heading
  out of the copy column. The `*-grid` / `*-copy` / `*-media` layout classes are
  still page-scoped.
- Data that repeats or the English build needs → `src/_data/*.json`, not inline HTML.
- Every `<img>` carries real `width`/`height`.
