# Website Editing Guide — Manidweep

_As of 2026-10-08._

This is a practical, step-by-step guide to editing the content, images and pages of the Yugpravartak Shri Nandkishore Sharda Mission website (manidweepjodhpur.org) — for anyone making changes, technical or not.

## Overview

This site belongs to the Yugpravartak Shri Nandkishore Sharda Mission ("Manidweep Adhyatm Parivar", Jodhpur). It is built with [Eleventy (11ty)](https://www.11ty.dev), a static site generator: templates are turned into plain HTML files ahead of time. There is no database, no CMS and no server-side runtime — the live site is just files, served as-is.

- **Code repository:** `Rishabh0709/yugpravartak-shri-nandkishore-sharda-mission` on GitHub
- **Live site:** https://manidweepjodhpur.org

The site is bilingual, as two parallel file trees:

- **Hindi** pages live at `src/*.html` and are served at the site root (`/about-mission/`, `/divya-gyan/`, …)
- **English** pages live at `src/en/*.html` and are served under `/en/` (`/en/about-mission/`, …)

Every real content page exists as a matching pair — same filename, same layout and CSS, same structure — with only the wording (and occasionally an image crop) differing between them. There is no auto-translation; both sides are maintained by hand, which is the single most important thing to keep in mind while editing (see "Keeping Hindi and English pages in sync" below).

Nothing you edit is visible to the public until it is committed and merged to the `main` branch on GitHub — a GitHub Actions workflow then rebuilds and publishes the site automatically (see "How publishing works").

## Before you start

There are two ways to edit the site — pick whichever fits the change you're making.

**A — GitHub's web editor** (no setup, best for small text edits)

- Needs a GitHub account with access to the repo.
- Open any file on github.com and click the pencil icon to edit it directly in the browser; use "Add file → Upload files" on a folder to add an image.
- Good for: fixing a typo, swapping a short paragraph, editing a single JSON value.
- Not good for: anything you need to see rendered before trusting it — new pages, image crops and sizing, CSS/layout changes. The web editor can't show you what the page will actually look like.

**B — A local checkout** (recommended for anything beyond a one-line text fix)

Requirements:
- [Node.js](https://nodejs.org) 18+ (the project's own deploy workflow uses Node 20) and npm
- `git`
- A code editor (VS Code is recommended — the repo ships a `.vscode/` folder)

Setup:
```bash
git clone https://github.com/Rishabh0709/yugpravartak-shri-nandkishore-sharda-mission.git
cd yugpravartak-shri-nandkishore-sharda-mission
npm install
npm start
```
`npm start` runs a local dev server at `http://localhost:8080` and rebuilds automatically whenever you save a file — keep it running in a terminal and refresh the browser tab to see each change.

If you're working with Claude Code (as this project's edits so far have been), it can do all of this directly: read and edit the files, run the build, take a screenshot to confirm a change looks right, and commit and open a pull request on request.

## Project folder structure

### Top level

| Path | What it is |
|---|---|
| `src/` | Every page template and the Hindi-side build-time data — Eleventy's "input" directory |
| `assets/` | Every CSS file, JS file, image and document on the site, copied into the build as-is |
| `.eleventy.js` | The build configuration — URL rules, data directories, custom filters, the path-prefix switch |
| `package.json` | npm scripts (`start`, `build`, `preview`, …) and dependencies |
| `.github/workflows/deploy.yml` | The GitHub Actions workflow that builds and publishes the site on every push to `main` |
| `_site/` | Generated output — recreated on every build, ignored by git, never edit by hand |
| `node_modules/` | Installed npm dependencies — ignored by git, recreated by `npm install` |
| `_archive/` | Retired files kept for reference (old component versions, dead CSS/JS, the pre-rebuild English site) — not part of the live site |
| `IMAGES.md`, `TEMPLATES.md`, `OPEN-ITEMS.md` | Existing project notes — see "Where to look next" in Troubleshooting |
| `PHASE-1…PHASE-5-CHANGES.md` | Historical log of past rebuild phases — background only |
| `book-review.md` | Source material behind the Divya Gyan reviews content |
| `favicon.ico` | The site's browser-tab icon |

### Inside `src/`

| Path | What it is |
|---|---|
| `src/*.html` | One file per Hindi page, e.g. `about-mission.html`, `divya-gyan.html`, `sadhna-places.html` |
| `src/en/*.html` | The matching English page for each Hindi one, same filename |
| `src/_includes/base.njk` | The shared page shell every page renders inside — `<html>`, header, footer, script tags |
| `src/_includes/partials/` | The pieces `base.njk` assembles: `header.njk`, `footer.njk`, `breadcrumb.njk`, `head.njk`, `scripts.njk` |
| `src/_data/*.json`, `*.js` | **Build-time data** (Eleventy's "data cascade"): available as variables inside any template, in both languages. Used for anything that repeats or that both languages share structurally — navigation, footer, site identity, book reviews, publications, trusts, timeline, people |
| `src/data/*.json` | A **different folder — no underscore**. Copied verbatim into the built site at `/data/*.json` and fetched by client-side JavaScript in the visitor's browser: the image manifest, news & events, donation details, impact numbers. Easy to confuse with `_data/` — see Troubleshooting |
| `src/CNAME` | The custom-domain file GitHub Pages reads (`manidweepjodhpur.org`) — don't delete or rename it |
| `src/404.html` | The not-found page |
| `src/robots.njk`, `src/sitemap.njk` | Generate `/robots.txt` and `/sitemap.xml` at build time |
| `src/legacy-redirect.njk`, `src/renamed-redirect-*.njk` | Generate small redirect pages for old URLs that have since changed, driven by `_data/legacyRedirects.js` and `_data/renamedPages.js`. You'd only touch these when renaming or retiring a page |

### Inside `assets/`

| Path | What it is |
|---|---|
| `assets/css/tokens.css` | Design tokens — colour, type scale, radius, shadow, spacing. Loaded first, on every page |
| `assets/css/style.css`, `responsive.css`, `components.css` | Base styles, responsive rules, and the shared `hi-*` component layer — language-neutral, loaded on every page |
| `assets/css/lang-hi.css`, `lang-en.css` | Per-language typography (font stack, heading metrics) |
| `assets/css/pages/<slug>.css` | Page-specific styles, loaded only where a page's front matter lists it under `extraCss` |
| `assets/js/` | One script per interactive feature (gallery lightbox, FAQ accordion, donation form, …), plus `image-manifest.js` — the script that makes the image manifest actually apply (see "Editing images and captions") |
| `assets/images/` | Every photo, organised into subfolders roughly by page or section |
| `assets/documents/` | PDFs and other downloadable files |

The full CSS loading order on any page is: `tokens.css` → `style.css` → `responsive.css` → `components.css` → `lang-hi.css` / `lang-en.css` → the page's own `extraCss` files, in that order.

## Editing text and headings on an existing page

Every page file has two parts: **front matter** (the `---`-fenced block at the very top — title, description, which CSS to load, breadcrumb) and the **body** (ordinary HTML with some Nunjucks template tags mixed in, `{{ }}` and `{% %}`).

Steps:

1. **Find the file.** Page URLs map straight to filenames: `/about-mission/` → `src/about-mission.html`; `/en/about-mission/` → `src/en/about-mission.html`.
2. **Find the text.** It's almost always literal text sitting inside a tag — a heading (`<h1>`, `<h2>`, `<h3>`, `<h4>`) or a paragraph (`<p>`). Search the file for a distinctive fragment of the current wording.
3. **Edit the text between the opening and closing tag.** Leave the tag itself and its `class=`/attributes untouched unless you specifically mean to change styling or behaviour.
4. **Edit the English file too**, if the change should appear on both languages — see "Keeping Hindi and English pages in sync". Nothing copies between them automatically.
5. **Preview before committing** — `npm start` and look at the actual rendered page in both languages.

### Content that lives in a data file instead

Some sections are generated by looping over a JSON file in `src/_data/`, rather than being hand-typed in the HTML — you'll recognise this because instead of plain text you'll see a tag like `{%- for r in bookReviews.reviews %}`. Edit the JSON file, not the HTML, for these:

| Content | File |
|---|---|
| Scholar reviews on the Divya Gyan page | `src/_data/bookReviews.json` — one object per reviewer: `name.hi`/`name.en`, `designation`, `excerpt`, `body.hi`/`body.en` (an array of paragraphs), optional `photo` |
| Main navigation menu | `src/_data/navigation.json` |
| Footer links and contact details | `src/_data/footer.json` |
| Site name, tagline, domain | `src/_data/site.json` |
| Published books | `src/_data/publications.json` |
| Timeline / history milestones | `src/_data/timeline.json` |
| Trusts / affiliated organisations | `src/_data/trusts.json` |
| People profiles | `src/_data/people.json` |
| News & events | `src/data/news-events.json` (no underscore — a different folder, see Folder Structure) |
| Impact numbers | `src/data/impact-data.json` |
| Donation details (bank account etc.) | `src/data/donation-details.json` |

**Always edit the matching `hi` and `en` fields together**, side by side in the same JSON object — these files are shared by both language pages, so one edit updates both at once. This is why the project prefers this pattern over hand-typing the same structure twice in HTML, for anything that repeats.

### JSON editing rules

Every string needs double quotes, every object/array entry except the last needs a trailing comma, and a quote mark *inside* a piece of text needs to be escaped (`\"`) or swapped for curly quotes ("  ") — a syntax mistake anywhere in the file will fail the entire build, not just that one field. After editing any `.json` file, validate it before committing:

```bash
python3 -c "import json; json.load(open('src/_data/bookReviews.json', encoding='utf-8'))"
```

(swap in whichever file you touched). Silence means it's valid; an error message points at exactly what's broken.

## Editing images and captions

There is **no image processing pipeline**. Eleventy copies `assets/` into the build exactly as committed — whatever file you commit, at whatever size and quality, is exactly what ships to visitors.

### How an image is wired up

Every photo is an `<img>` tag with up to five things:

```html
<img data-image-key="sadhna-places.03-card"
     src="/assets/images/sadhna-places/03-card.webp"
     width="900" height="736"
     alt="भैया जी टेकरी माँ की गुफा में साधना करते हुए" loading="lazy">
```

- `data-image-key` — `"<page>.<name>"`. Links this `<img>` to an entry in the manifest file below. Not every image has one.
- `src` — the file path, always starting with `/`.
- `width` / `height` — the file's **real pixel dimensions**. The browser uses these to reserve space before the image loads, so the page doesn't jump. Getting these wrong rarely breaks the visual layout (CSS usually scales the image to fit its box) but it does cause a loading flash — keep them accurate.
- `alt` — a short description of what's actually in the photo, for screen readers and search engines, written in the page's own language.
- `loading="lazy"` — leave as-is; defers off-screen images for performance.

There's also a manifest file, `src/data/image-manifest.json`, organised by page then image key:

```json
"sadhna-places": {
  "images": {
    "03-card": {
      "src": "assets/images/sadhna-places/03-card.webp",
      "altHi": "भैया जी टेकरी माँ की गुफा में साधना करते हुए",
      "altEn": "Bhaiyaji in sadhana inside Tekri Maa's cave shrine"
    }
  }
}
```

Note the `src` here has **no leading slash** — intentional, and different from the HTML `<img src>` above.

A script, `assets/js/image-manifest.js`, loads this file in the visitor's browser and overwrites the `src` and `alt` of every `<img data-image-key="…">` on the page (picking `altHi` or `altEn` by the page's language). It runs on **both** Hindi and English pages. In practice: **the manifest is what visitors actually see** — the `src`/`alt` written directly in the HTML is only a fallback, shown for a split second or if JavaScript fails.

**Golden rule: always keep the HTML `<img>` and its manifest entry pointing at the same file.**

### Replacing a photo — the easy way (same crop)

If the new photo can be cropped/resized to the exact same width : height ratio as the old one:

1. Save it with the **exact same filename** as the file it's replacing.
2. Overwrite the old file in `assets/images/…`.
3. Commit. Nothing else needs to change — both languages pick it up automatically.

### Replacing a photo — new file or different crop

1. **Find it in the code.** In a browser, right-click the photo → Inspect, and read the `data-image-key` off the `<img>` tag. The part before the dot is the page — search `src/<page>.html` (and `src/en/<page>.html`) for that key.
2. **Prepare the file.**
   - Format: `.webp` preferred (smaller files); `.jpg` is fine for photos; `.png` only for logos/flat graphics.
   - Size: a full-width hero photo → 1600–1920px long edge; a photo in a two-column section or card → ~900px; a small portrait/thumbnail → 600–800px. Don't upscale a smaller source photo past its real resolution.
   - Check the section's CSS: `object-fit: contain` means a portrait photo will be letterboxed cleanly without cropping, so you don't need to pre-crop it; `object-fit: cover` (the more common case) crops to fill the box, so you need to crop/resize to the right ratio yourself first, or the browser will crop it somewhere you don't control.
3. **Add the file** to `assets/images/` (or a matching subfolder), named lowercase-with-hyphens.
4. **Edit the `<img>` tag** in both `src/<page>.html` and `src/en/<page>.html`: new `src`, the new file's real `width`/`height`, updated `alt` if the subject changed.
5. **Edit the manifest** (`src/data/image-manifest.json`) to match: new `src` (no leading slash), new `altHi`/`altEn`.
6. **Preview** (`npm start`), check both language pages, confirm no broken image and no layout jump.
7. **Commit** the new image file, the HTML edits and the manifest edit together. Delete the old file if nothing else uses it — check the trap below first.

### ⚠️ The shared-file trap

**Before overwriting any existing image file, search the whole repo for other pages that reference the same filename.** Several sections of this site were originally built from a small pool of generic placeholder photos, and more than one page or section can point at the exact same file — for example `assets/images/sadhna-places/07-card.webp` was used by *both* the Siddhapeeth section *and* the Vatsalyapeeth section on `sadhna-places.html` at once. Overwriting that file to update one section's photo would have silently changed the other section's photo too.

Check first:

```bash
grep -rn "the-filename.webp" src/
```

If more than one `<img>` tag or manifest entry references it, **don't overwrite it** — save the new photo under a new filename instead, and point only the `<img>`/manifest entry you actually mean to change at that new file.

### Captions

A caption (visible text under or beside a photo — not the invisible `alt` text) is ordinary HTML near the `<img>`, usually a `<figcaption>` or a `<p>`/`<span>` right after it. Edit it exactly like any other text (see "Editing text and headings"). It is **not** part of the image manifest.

## Keeping Hindi and English pages in sync

Every real content page exists twice:

- `src/<page>.html` (Hindi, served at `/<page>/`)
- `src/en/<page>.html` (English, served at `/en/<page>/`)

They share the same CSS, layout and (usually) images — only the wording differs, and occasionally the image crop. **Nothing links them automatically.** If you edit one and forget the other:

- The two language versions will show different content — easy to miss until a bilingual visitor notices.
- Nothing warns you at build time; both files are independently valid HTML.

**Practical workflow:** right after finishing an edit on the Hindi page, open the matching English file and make the equivalent change, even if you're not fully fluent — a careful, literal translation is better than leaving it out of sync entirely. If you're working with Claude Code, just ask it to "do the same on the English page" immediately after.

**The exception** is content that lives in a shared JSON file (see the table in "Editing text and headings") — editing the `hi` and `en` fields in the same `_data/*.json` entry updates both languages from one place, which is exactly why the project prefers that pattern for anything that repeats (reviews, navigation, footer, publications, etc.) over hand-typing the same structure twice in HTML.

**One existing asymmetry to know about:** a few older pages (`gyan-ganga-mission.html` is one, per `IMAGES.md`) already have an HTML `<img src>` and a manifest entry pointing at two different files, left over from a past edit — the manifest wins, so the HTML's version is effectively dead and misleading. If you're touching images on an older page, double-check the HTML `src` and the manifest `src` already agree before you build on top of them.

## Adding a new page

1. **Start from the closest existing page**, don't write one from scratch. `src/patterns.html` is the site's living style guide (visit `/patterns.html` after `npm start`) — it shows every shared section shape (hero, two-column media + copy, numbered steps, feature-card grid, stat strip, vertical timeline, document list, pull-quote, closing CTA band) with its actual markup right there. Copy in whichever shapes you need.
2. **Front matter** — every page needs at least:
   ```yaml
   ---
   layout: base.njk
   title: "पृष्ठ का शीर्षक | मणिद्वीप अध्यात्म परिवार"
   description: "one or two sentences for search engines and link previews"
   bodyClass: "hindi-home <your-page>-page"
   breadcrumb: true
   breadcrumbName: "पृष्ठ का नाम"
   breadcrumbParent: { "label": "ऊपर का पृष्ठ", "href": "/parent-page/" }
   extraCss: ["/assets/css/pages/<your-page>.css"]
   ---
   ```
   (English file: same keys, `bodyClass: "english-home …"`, English strings throughout.)
3. **URL.** Eleventy derives the clean URL from the filename automatically — `src/new-page.html` becomes `/new-page/`. There's no separate routing file to edit.
4. **Only add a new CSS file** (`assets/css/pages/<slug>.css`) if the page genuinely needs a new layout; otherwise reuse the shared classes shown on `/patterns.html`.
5. **Link to it** from wherever it should actually be reachable — usually `src/_data/navigation.json` for the main menu, and/or a "related pages" block on another page. Remember to fill in both `label.hi` and `label.en`.
6. **Build the English version at the same time**, not later — see "Keeping Hindi and English pages in sync".
7. If this page **replaces** an older page at a different URL, add an entry to `src/_data/renamedPages.js` so the old URL redirects instead of 404ing — follow the format already used by the existing entries in that file.

## Running and previewing the site locally

```bash
npm install        # once, after cloning
npm start           # dev server at http://localhost:8080, auto-rebuilds on save
npm run build        # one-off build into _site/, for the live GitHub Pages domain
npm run preview      # one-off build into _site/, for serving from the filesystem root
```

### ⚠️ The path-prefix gotcha

The site can be deployed two different ways, and the build needs to know which one so every `/assets/…` and internal link comes out correct:

- At the project's **custom domain** (`manidweepjodhpur.org`, how it's live today) — pages live at the root, e.g. `/assets/css/style.css`.
- At GitHub's **default project URL** (`rishabh0709.github.io/yugpravartak-shri-nandkishore-sharda-mission/`, how it used to be hosted) — pages live under a subfolder, e.g. `/yugpravartak-shri-nandkishore-sharda-mission/assets/css/style.css`.

`npm start` and `npm run build` both default to the **old, subfolder-prefixed** behaviour (`.eleventy.js`'s default `ELEVENTY_PATH_PREFIX`). The live deploy workflow overrides this to `/`. If you build with a plain `npm run build` and then open `_site/index.html` directly, or serve `_site/` with a generic static-file server, **every CSS/JS/image link will 404**, because they're all prefixed with a subfolder path that doesn't exist on your machine.

**Use `npm run preview` instead** whenever you want to check a built `_site/` output directly — e.g. serving it with `npx http-server _site` to take a screenshot, or to sanity-check right before committing. It builds with the prefix set to `/`, so every link resolves correctly against whatever host serves it.

`npm start`'s built-in dev server (Eleventy's own `--serve`) handles the prefix correctly on its own, so for ordinary day-to-day editing `npm start` plus `http://localhost:8080` is all you need — `npm run preview` only matters when you're serving the `_site/` folder yourself with a separate tool.

## How publishing works

Nothing you do locally — or in a pull request — is visible to the public until it lands on the `main` branch.

```
you edit files -> commit -> push / merge to main -> GitHub Actions runs .github/workflows/deploy.yml
  -> npm ci -> npx @11ty/eleventy (with ELEVENTY_PATH_PREFIX=/) -> uploads _site/ as a Pages artifact
  -> GitHub Pages deploys it -> live at https://manidweepjodhpur.org (usually within 1-2 minutes)
```

You can watch a deploy's progress under the repo's **Actions** tab on GitHub (workflow: "Build & deploy to GitHub Pages"). A green check means the new version is live; a red ✕ means the build failed and **the previous version is still what's live** — nothing half-broken ever gets published automatically. Click into a failed run's logs to see exactly which step and file caused it.

The custom domain (`manidweepjodhpur.org`) is configured via `src/CNAME`, which Eleventy copies into the build root — don't delete or rename that file.

## Recommended day-to-day workflow

Don't edit `main` directly, even for a tiny change — a mistake pushed straight to `main` goes live immediately with no one else's eyes on it, and there's no "undo" on a public website beyond committing another fix.

1. **Create a branch** for your change, off the latest `main`:
   ```bash
   git fetch origin main
   git checkout -B my-change-name origin/main
   ```
2. **Make your edits**, and check them locally (`npm start`, look at the actual page in both languages before moving on).
3. **Commit**, with a message describing *why*, not just *what*:
   ```bash
   git add <files you changed>
   git commit -m "Replace placeholder photo on Vatsalyapeeth section with real doorway photo"
   ```
   Only stage the files you meant to change — run `git status` first and double-check nothing unexpected (a stray `_site/` or `node_modules/` change, for instance) is included.
4. **Push and open a pull request**:
   ```bash
   git push -u origin my-change-name
   ```
   then open a PR on GitHub from that branch into `main`, with a short summary of what changed and why — it makes review much easier, including for your own future self.
5. **Review, then merge.** Once it looks right, and ideally once someone else has checked it (especially for anything touching quoted or attributed content), merge the PR into `main`. The deploy workflow picks it up automatically from there.

This project's Claude Code sessions follow exactly this pattern: a fresh branch per task, changes verified locally with a screenshot before committing, a PR opened with a clear description, and a merge only once the change has actually been checked.

## Troubleshooting & FAQ

**"I edited the Hindi page but the English page still shows the old text."** Expected — they're two separate files (`src/<page>.html` and `src/en/<page>.html`). Edit both. See "Keeping Hindi and English pages in sync".

**"I replaced a photo and a *different* section's photo changed too."** You overwrote a file that more than one page or section shares. See the shared-file trap in "Editing images and captions" — always `grep -rn "<filename>" src/` before overwriting an existing image file, and use a new filename if it's shared.

**"My new photo looks squashed or stretched."** The `width`/`height` attributes on the `<img>` tag no longer match the file's real pixel dimensions. Check the actual file's size and update both attributes to match.

**"My new photo is cropped somewhere odd — it cuts off someone's head."** The section's CSS is using `object-fit: cover`, which crops to fill the box. Either pre-crop the photo yourself to the right aspect ratio, or (if you control that CSS rule) switch it to `object-fit: contain` to letterbox instead of crop.

**"I see the old photo for a split second, then it swaps to something else — or stays wrong."** The HTML `<img src>` and the manifest entry (`src/data/image-manifest.json`) point at different files. Make them match — see "How an image is wired up".

**"The build fails, or `npm start` crashes, after I edited a `.json` file."** Almost always a JSON syntax error: a missing comma, an extra trailing comma after the last item, or an unescaped `"` inside a text string. Validate the file before committing:
```bash
python3 -c "import json; json.load(open('path/to/file.json', encoding='utf-8'))"
```
It will point at the exact problem. Common fixes: escape internal quotes as `\"`, remove a comma after the last item in an object/array, add a missing comma between items.

**"Every CSS/image link 404s when I open `_site/index.html` directly, or serve it with a plain static server."** You built with the default (subfolder) path prefix. Use `npm run preview` instead of `npm run build` whenever you need to serve `_site/` yourself — see "Running and previewing the site locally".

**"I can't find where a piece of text lives — I searched the HTML and it isn't there."** It's probably generated from a JSON data file instead of hand-typed. Search for a distinctive phrase across the whole repo:
```bash
grep -rn "a distinctive phrase from the text" src/
```
If that also comes up empty, check `src/_data/*.json` and `src/data/*.json` — titles, names and numbers are often stored as plain strings there even when the surrounding HTML is a loop.

**"I don't know which file a page's URL maps to."** Strip the leading and trailing `/`, add `.html`. `/about-mission/` → `src/about-mission.html`. For an English page, drop the `/en/` prefix first, then apply the same rule inside `src/en/`.

**"I changed something but it's not showing on the live site."** Check, in order: (1) did you commit and push — `git status` / `git log`; (2) did the change actually reach `main`, i.e. was the pull request merged; (3) did the deploy workflow succeed — check the Actions tab on GitHub. A failed deploy silently leaves the previous version live, with no visible error on the site itself.

**"I edited `src/data/image-manifest.json` but nothing changed."** Make sure you edited the right one — `src/data/` (used at runtime in the browser), not `src/_data/` (used at build time by Eleventy). They're easy to confuse; see the folder-structure table.

**"Is it safe for me to make this change myself?"** Content fixes — text, captions, swapping a photo for one of the same shape — are low-risk, and a pull request lets someone sanity-check before it goes live either way. Changes to `.eleventy.js`, `.github/workflows/deploy.yml`, `src/CNAME`, or anything touching the redirect files (`legacyRedirects.js`, `renamedPages.js`) can affect the whole site, or break old links, if done carelessly — make these only if you're comfortable testing locally first, or ask someone who is.

**"Where do I go for more detail than this guide covers?"** A few existing notes in the repo are worth knowing about:
- `IMAGES.md` — the original, more detailed version of the Images section above
- `TEMPLATES.md` — the full catalogue of reusable page sections/components, and `/patterns.html` itself (the live style guide)
- `OPEN-ITEMS.md` — a running list of known issues and planned cleanup
- `PHASE-1` through `PHASE-5-CHANGES.md` — historical record of past rebuild phases, useful for background only
- `book-review.md` — source material behind the Divya Gyan reviews content
