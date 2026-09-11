(function () {
    "use strict";

    var manifestCache = null;
    var base = window.__BASEURL__ || "/";
    // Root-relative (not relative to the current page's directory) -- pages
    // now live at clean trailing-slash URLs like /gallery/, so a plain
    // relative "data/..." or "assets/..." would wrongly resolve under
    // that directory (e.g. /impact/assets/... instead of /assets/...).
    var manifestUrl = base + "data/image-manifest.json";
    var language = (document.documentElement.getAttribute("lang") || "hi").slice(0, 2).toLowerCase();

    // Manifest src values are stored bare ("assets/images/...", no leading
    // slash) so they stay language-neutral; resolve them against the site
    // root here rather than leaving the browser to resolve them against
    // whatever directory the current page happens to live in.
    function withBase(src) {
        return src ? base + src.replace(/^\//, "") : src;
    }

    function getByKey(manifest, key) {
        if (!manifest || !key) return null;
        var parts = key.split(".");
        if (parts.length < 2) return null;
        var page = manifest.pages && manifest.pages[parts[0]];
        if (!page) return null;
        var itemKey = parts.slice(1).join(".");
        return (page.images && page.images[itemKey]) || (page.media && page.media[itemKey]) || null;
    }

    function applyImageManifest(manifest) {
        document.querySelectorAll("img[data-image-key]").forEach(function (img) {
            var item = getByKey(manifest, img.getAttribute("data-image-key"));
            if (!item || !item.src) return;
            img.setAttribute("src", withBase(item.src));
            var alt = language === "hi" ? item.altHi : item.altEn;
            if (typeof alt === "string" && alt.length) img.setAttribute("alt", alt);
        });

        document.querySelectorAll("source[data-media-key]").forEach(function (source) {
            var item = getByKey(manifest, source.getAttribute("data-media-key"));
            if (item && item.src) source.setAttribute("src", withBase(item.src));
        });

        document.querySelectorAll("video[data-poster-key]").forEach(function (video) {
            var item = getByKey(manifest, video.getAttribute("data-poster-key"));
            if (item && item.src) video.setAttribute("poster", withBase(item.src));
        });

        document.querySelectorAll("[data-full-key]").forEach(function (element) {
            var item = getByKey(manifest, element.getAttribute("data-full-key"));
            if (item && item.src) element.setAttribute("data-full", withBase(item.src));
        });

        document.querySelectorAll("[data-thumb-key]").forEach(function (element) {
            var item = getByKey(manifest, element.getAttribute("data-thumb-key"));
            if (item && item.src) element.setAttribute("data-thumb", withBase(item.src));
        });
    }

    function loadManifest() {
        if (manifestCache) {
            applyImageManifest(manifestCache);
            return;
        }

        fetch(manifestUrl, { cache: "no-cache" })
            .then(function (response) {
                if (!response.ok) throw new Error("Image manifest failed to load");
                return response.json();
            })
            .then(function (manifest) {
                manifestCache = manifest;
                applyImageManifest(manifest);
            })
            .catch(function () {
                // Keep the hard-coded src/alt fallbacks if the manifest cannot load.
            });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadManifest);
    } else {
        loadManifest();
    }
})();
