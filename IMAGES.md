# Replacing a photo on a page

## How images work here

There is **no image build step** — Eleventy copies `assets/` to the site as-is.
Whatever file you commit is exactly what ships, at whatever size it is.

Every photo on a page is an `<img>` tag with five things:

```html
<img data-image-key="shri-nandkishore-sharda.young-bhaiyaji1"
     src="/assets/images/young_bhaiyaji1.jpg"
     width="796" height="1024"
     alt="Bhaiyaji as a young man" loading="lazy">
```

- `data-image-key` — `"<page>.<name>"`, links this image to the manifest
- `src` — the file path (leading `/`, absolute)
- `width` / `height` — the file's **real pixel size**; the browser uses the ratio to
  reserve space so the page doesn't jump while loading
- `alt` — a short description of what's in the photo (screen readers, SEO)

There is also a **manifest**: `src/data/image-manifest.json`, keyed by `data-image-key`:

```json
"shri-nandkishore-sharda": {
  "images": {
    "young-bhaiyaji1": {
      "src": "assets/images/young_bhaiyaji1.jpg",   // NOTE: no leading slash here
      "altHi": "युवा अवस्था में भैया जी का चित्र",
      "altEn": "Bhaiyaji as a young man"
    }
  }
}
```

On **Hindi pages**, a script (`assets/js/image-manifest.js`) reads the manifest at load
and overrides each image's `src` and `alt` from it. **So on Hindi pages the manifest is
what actually shows** — the `src` in the HTML is only the fallback (shown for a split
second, or if the script fails).

On **English (`/en/`) pages** the manifest does not currently load, so the HTML `src` is
what shows.

**Bottom line: keep the HTML and the manifest pointing at the same file.**

---

## The easy way — same crop, no code

If you can crop/resize the new photo to the **same shape** (width-to-height ratio) as the
old one:

1. Save the new photo with the **exact same filename** as the old one.
2. Replace the old file in `assets/images/…` with it.
3. Commit. Done — no HTML or manifest changes needed, works on both languages.

Keeping the ratio close matters: if the old file was 900×600 and the new one is 900×1200,
the `width`/`height` in the HTML will be wrong and the photo will look squashed until you
fix them (see step 4 below).

---

## The full way — new file or different crop

### 1. Find the image in the code

- In the browser, right-click the photo → **Inspect**. On the `<img>` tag, read the
  `data-image-key` — e.g. `swami-vivekanand-trust.sanskar-classes`.
- The part before the dot is the page (`swami-vivekanand-trust` → `src/swami-vivekanand-trust.html`).
- Open that file and search for the key.

### 2. Prepare the new photo

- **Resize.** Long edge roughly:
  - full-width hero photo → **1600–1920 px**
  - a photo inside a two-column section or a card → **900 px**
  - a small portrait / book cover → **600–800 px**
- **Format.** `.webp` is preferred (smaller); `.jpg` is fine for photos, `.png` only for
  logos / graphics with flat colour.
- **Compress.** Target file size: hero ≈ 150–250 KB, inline ≈ 40–100 KB. Use
  [squoosh.app](https://squoosh.app) or any image tool.
- **Note the final pixel size** (e.g. 1600 × 1067) — you need it for step 4.

### 3. Add the file

Put it in `assets/images/` (or the matching sub-folder, e.g.
`assets/images/gallery/sunday-sanskar-classes/`). Name it lowercase with hyphens:
`sanskar-class-2026.webp`.

### 4. Edit the page HTML

In `src/<page>.html` (and `src/en/<page>.html` if that file exists), on that `<img>`:

- change `src="/assets/images/<new-file>"` (keep the leading `/`)
- change `width="…"` and `height="…"` to the **new file's real pixel size**
- update `alt="…"` if the subject changed

### 5. Edit the manifest

In `src/data/image-manifest.json`, find `"<page>"` → `"images"` → `"<key>"`:

- change `"src"` to `"assets/images/<new-file>"` — **no leading slash here**
- update `"altHi"` / `"altEn"` if the subject changed

If the key isn't in the manifest, you can skip this (the HTML `src` will be used) — but
adding it keeps things consistent.

### 6. Check it

```bash
npm start
```

Open the page (`…/<page>.html` and `…/en/<page>.html`), confirm the new photo shows at the
right shape with no layout jump.

### 7. Commit

`git add` the new image, the edited HTML file(s), and `image-manifest.json`. If the old
image file is now unused anywhere, delete it in the same commit.

---

## Known inconsistency

On **`gyan-ganga-mission.html`**, six images in the "major construction and support work"
grid have drifted — the HTML names one file, the manifest names a different one, and the
manifest wins. If you touch that page's photos, reconcile the two.
