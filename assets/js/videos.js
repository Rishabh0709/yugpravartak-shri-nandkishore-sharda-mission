(function () {
    const state = {
        data: null,
        language: document.documentElement.lang === "hi" ? "hi" : "en",
        root: document.documentElement.lang === "hi" ? "../" : "",
        activeCategory: "all"
    };

    const copy = {
        en: {
            all: "All",
            watch: "Watch Video",
            read: "Read More",
            emptyTitle: "Videos will be added here soon.",
            emptyBody: "This category is ready. Add a video entry in the shared videos data file to publish it here.",
            close: "Close video",
            back: "Back",
            missing: "Video not found"
        },
        hi: {
            all: "सभी",
            watch: "वीडियो देखें",
            read: "और पढ़ें",
            emptyTitle: "इस श्रेणी में वीडियो शीघ्र जोड़े जाएँगे।",
            emptyBody: "यह श्रेणी तैयार है। साझा वीडियो डेटा में नया वीडियो जोड़ते ही वह यहाँ दिखाई देगा।",
            close: "वीडियो बन्द करें",
            back: "वापस लौटें",
            missing: "वीडियो नहीं मिला"
        }
    };

    document.addEventListener("DOMContentLoaded", initVideos);

    async function initVideos() {
        const archive = document.querySelector("[data-video-archive]");
        const detail = document.querySelector("[data-video-detail]");
        if (!archive && !detail) return;

        try {
            const response = await fetch(`${state.root}assets/json/videos.json`);
            if (!response.ok) throw new Error(`Unable to load videos: ${response.status}`);
            state.data = await response.json();
            if (archive) renderArchive(archive);
            if (detail) renderDetail(detail);
        } catch (error) {
            const target = archive || detail;
            target.innerHTML = `<div class="video-empty"><h2>${copy[state.language].missing}</h2><p>${error.message}</p></div>`;
        }
    }

    function renderArchive(container) {
        const filters = document.querySelector("[data-video-filters]");
        const grid = document.querySelector("[data-video-grid]");
        if (!grid) return;

        const fixedCategories = parseList(container.dataset.videoCategory || container.dataset.videoCategories);
        const excludedCategories = parseList(container.dataset.videoExclude);

        if (fixedCategories.length) {
            state.activeCategory = fixedCategories.join(",");
            if (filters) filters.remove();
            renderCards(grid, fixedCategories, excludedCategories);
            setupModal(container);
            return;
        }

        if (!filters) return;
        const visibleCategories = state.data.categories.filter(category => !excludedCategories.includes(category.slug));
        filters.innerHTML = [
            `<button class="video-filter is-active" type="button" data-category="all">${copy[state.language].all}</button>`,
            ...visibleCategories.map(category => `<button class="video-filter" type="button" data-category="${category.slug}">${category[state.language]}</button>`)
        ].join("");

        filters.addEventListener("click", event => {
            const button = event.target.closest("[data-category]");
            if (!button) return;
            state.activeCategory = button.dataset.category;
            filters.querySelectorAll(".video-filter").forEach(item => item.classList.toggle("is-active", item === button));
            renderCards(grid, [], excludedCategories);
        });

        renderCards(grid, [], excludedCategories);
        setupModal(container);
    }

    function renderCards(grid, fixedCategories = [], excludedCategories = []) {
        const videos = fixedCategories.length
            ? state.data.videos.filter(video => fixedCategories.includes(video.category))
            : state.activeCategory === "all"
                ? state.data.videos.filter(video => !excludedCategories.includes(video.category))
                : state.data.videos.filter(video => video.category === state.activeCategory && !excludedCategories.includes(video.category));

        if (!videos.length) {
            grid.innerHTML = `<div class="video-empty"><h2>${copy[state.language].emptyTitle}</h2><p>${copy[state.language].emptyBody}</p></div>`;
            return;
        }

        grid.innerHTML = videos.map(video => {
            const item = video[state.language] || video.en;
            const category = state.data.categories.find(entry => entry.slug === video.category);
            const thumbnail = toAsset(video.thumbnail);
            const detailHref = state.language === "hi" ? `video-detail.html?id=${video.id}` : `video-detail.html?id=${video.id}`;
            const showReadMore = video.readMore !== false;
            const watchButton = video.videoUrl
                ? `<button class="video-action video-action--primary" type="button" data-video-url="${escapeAttr(video.videoUrl)}" data-video-title="${escapeAttr(item.title)}">${copy[state.language].watch}</button>`
                : `<button class="video-action video-action--primary" type="button" disabled>${copy[state.language].watch}</button>`;

            return `
                <article class="video-card">
                    <figure class="video-card__media">
                        <img src="${thumbnail}" alt="${escapeAttr(item.title)}" loading="lazy">
                        ${video.videoUrl ? `<button class="video-card__play" type="button" aria-label="${escapeAttr(copy[state.language].watch)}" data-video-url="${escapeAttr(video.videoUrl)}" data-video-title="${escapeAttr(item.title)}">▶</button>` : ""}
                    </figure>
                    <div class="video-card__body">
                        <h2>${item.title}</h2>
                        <p class="video-card__meta">${item.meta}</p>
                        <p class="video-card__excerpt">${item.excerpt}</p>
                        <div class="video-card__actions">
                            ${watchButton}
                            ${showReadMore ? `<a class="video-action video-action--secondary" href="${detailHref}">${copy[state.language].read}</a>` : ""}
                        </div>
                    </div>
                </article>`;
        }).join("");
    }

    function renderDetail(container) {
        const id = new URLSearchParams(window.location.search).get("id");
        const video = state.data.videos.find(item => item.id === id) || state.data.videos[0];
        if (!video) {
            container.innerHTML = `<div class="video-empty"><h2>${copy[state.language].missing}</h2></div>`;
            return;
        }

        const item = video[state.language] || video.en;
        const category = state.data.categories.find(entry => entry.slug === video.category);
        document.title = `${item.title} | ${state.language === "hi" ? "वीडियो" : "Videos"}`;

        container.innerHTML = `
            <section class="video-hero">
                <div class="${state.language === "hi" ? "hi-shell" : "container"} video-hero__content">
                    <span class="${state.language === "hi" ? "hi-kicker" : "section-eyebrow"}">${category ? category[state.language] : ""}</span>
                    <h1>${item.title}</h1>
                    <p>${item.excerpt}</p>
                </div>
            </section>
            <section class="video-section">
                <div class="${state.language === "hi" ? "hi-shell" : "container"} video-detail-layout">
                    <div class="video-detail-frame">
                        ${video.videoUrl ? `<iframe src="${escapeAttr(video.videoUrl)}" title="${escapeAttr(item.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>` : `<img src="${toAsset(video.thumbnail)}" alt="${escapeAttr(item.title)}">`}
                    </div>
                    <article class="video-detail-copy">
                        <p class="video-card__meta">${item.meta}</p>
                        <div class="video-detail-hook">${item.hook}</div>
                        ${item.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
                        <a class="video-action video-action--secondary" href="${getVideoBackHref(video)}">${copy[state.language].back}</a>
                    </article>
                </div>
            </section>`;
    }

    function getVideoBackHref(video) {
        if (state.language === "hi") {
            if (video.category === "sanskar-classes") return "student-testimonials.html#student-video-title";
            if (video.category === "dignitaries-views") return "dignitaries-views.html";
            return "success-stories.html";
        }

        if (video.category === "success-stories" || video.category === "life-transformation") return "success-stories.html";
        if (video.category === "dignitaries-views") return "testimonials.html";
        return "index.html";
    }
    function setupModal(scope) {
        const modal = document.querySelector("[data-video-modal]");
        if (!modal) return;
        const frame = modal.querySelector("[data-video-frame]");
        const title = modal.querySelector("[data-video-modal-title]");
        const close = modal.querySelector("[data-video-close]");

        scope.addEventListener("click", event => {
            const trigger = event.target.closest("[data-video-url]");
            if (!trigger) return;
            title.textContent = trigger.dataset.videoTitle || "";
            frame.innerHTML = `<iframe src="${escapeAttr(trigger.dataset.videoUrl)}" title="${escapeAttr(trigger.dataset.videoTitle || "Video")}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
            modal.classList.add("is-open");
            close.focus();
        });

        close.addEventListener("click", closeModal);
        modal.addEventListener("click", event => {
            if (event.target === modal) closeModal();
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
        });

        function closeModal() {
            modal.classList.remove("is-open");
            frame.innerHTML = "";
        }
    }


    function parseList(value) {
        return String(value || "")
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);
    }
    function toAsset(path) {
        if (!path) return "";
        if (/^https?:/.test(path)) return path;
        return `${state.root}${path}`;
    }

    function escapeAttr(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
}());





