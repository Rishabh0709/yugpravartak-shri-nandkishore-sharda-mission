# Template catalogue

The living reference is a rendered page: **`/patterns.html`** (source: `src/patterns.html`,
styles: `assets/css/pages/patterns.css`). It is `noindex` and excluded from the sitemap and
nav — reach it by URL only. Run `npm start` and open
`…/yugpravartak-shri-nandkishore-sharda-mission/patterns.html`.

It shows a live render **and** the markup for every shared building block:

1. **Design tokens** — `assets/css/tokens.css` (colour, type scale, radius, shadow, spacing)
2. **Text primitives** — `.hi-kicker`, headings, `.hi-lead`, `.hi-prose`, `.hi-inline-link`, `.hi-text-link`
3. **Buttons & CTA rows** — `.hi-btn--primary / --outline / --soft`, `.hi-actions` (`--center`)
4. **Section frame** — `.hi-section` › `.hi-shell` › `.hi-section-heading` (`--center`)
5. **Breadcrumb** — the `breadcrumb: true` front-matter component
5b. **In-page section nav** — `.page-nav` (shared, in `home-hindi.css`). Overview/topic pages only, not sequential bios.
6. **Recurring section shapes** — two-column media+copy, numbered steps, feature-card grid,
   stat strip, vertical timeline, document list, pull-quote, closing CTA band
7. **A new page, start to finish** — the checklist

## CSS layering (loaded on every page, in order)

`tokens.css` → `style.css` → `responsive.css` → `home-hindi.css` (the `hi-*` layer) →
`lang-hi.css` → the page's own `extraCss`.

## Conventions

- Build new pages (and the English site) from the §6 shapes. Only add a scoped
  `assets/css/pages/<slug>.css` for genuinely new layout.
- The §6 shapes currently live under page-specific prefixes (`gyanyogi-step`,
  `shardamani-step`, `bvys-step` …). Extracting a shared class set for them is the next
  CSS refactor (see `OPEN-ITEMS.md` §3). The in-page nav has already been extracted
  (`.page-nav`); the per-page `*-nav` copies are gone.
- Data that repeats or the English build needs → `src/_data/*.json`, not inline HTML.
- Every `<img>` carries real `width`/`height`.
