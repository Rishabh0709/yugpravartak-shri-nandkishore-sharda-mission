(function () {
    const state = {
        language: document.documentElement.lang === "hi" ? "hi" : "en",
        root: window.__BASEURL__ || ""
    };

    const copy = {
        en: {
            view: "View Cutting", close: "Close", empty: "Updates will be added soon.",
            viewArchive: "View past activities", hideArchive: "Show fewer"
        },
        hi: {
            view: "कटिंग देखें", close: "बन्द करें", empty: "अपडेट शीघ्र जोड़े जाएँगे।",
            viewArchive: "सभी पिछले कार्यक्रम देखें", hideArchive: "कम दिखाएँ"
        }
    };

    const RECENT_LIMIT = 3;

    document.addEventListener("DOMContentLoaded", initNewsEvents);

    async function initNewsEvents() {
        const page = document.querySelector("[data-news-events]");
        if (!page) return;

        try {
            const response = await fetch(`${state.root}data/news-events.json`);
            if (!response.ok) throw new Error(`Unable to load news/events: ${response.status}`);
            const data = await response.json();

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const events = (data.events || []).slice().sort((a, b) => a.date.localeCompare(b.date));
            const upcoming = events.filter(item => new Date(item.date) >= today);
            const past = events.filter(item => new Date(item.date) < today).reverse();

            const recentShown = past.slice(0, RECENT_LIMIT);
            const recentRest = past.slice(RECENT_LIMIT);
            renderEvents("[data-upcoming-events]", upcoming);
            renderEvents("[data-recent-events]", recentShown);
            setupRecentArchive(recentShown, recentRest);

            renderClippingTabs(data.clippings || []);
            setupModal();
        } catch (error) {
            page.innerHTML += `<section class="news-events-section"><div class="${shellClass()}"><div class="news-event-card__body">${copy[state.language].empty}</div></div></section>`;
        }
    }

    function setupRecentArchive(shown, rest) {
        const toggle = document.querySelector("[data-recent-archive]");
        if (!toggle || rest.length === 0) return;

        toggle.hidden = false;
        toggle.textContent = copy[state.language].viewArchive;

        let expanded = false;
        toggle.addEventListener("click", () => {
            expanded = !expanded;
            renderEvents("[data-recent-events]", expanded ? [...shown, ...rest] : shown);
            toggle.textContent = copy[state.language][expanded ? "hideArchive" : "viewArchive"];
        });
    }

    function renderEvents(selector, items) {
        const grid = document.querySelector(selector);
        if (!grid) return;
        grid.innerHTML = items.map(item => {
            const content = item[state.language] || item.en;
            const month = state.language === "hi" ? item.monthHi : item.monthEn;
            return `
                <article class="news-event-card">
                    <figure class="news-event-card__image">
                        <img src="${asset(item.image)}" alt="${escapeAttr(content.title)}" loading="lazy">
                        <span class="news-event-card__date"><span><strong>${escapeHtml(item.day)}</strong>${escapeHtml(month)}</span></span>
                    </figure>
                    <div class="news-event-card__body">
                        <h3>${escapeHtml(content.title)}</h3>
                        <p class="news-event-card__meta">${escapeHtml(content.meta)}</p>
                        <p>${escapeHtml(content.description)}</p>
                    </div>
                </article>`;
        }).join("");
    }

    function renderClippingTabs(items) {
        const tabs = document.querySelector("[data-news-ranges]");
        if (!tabs) {
            renderClippings(items);
            return;
        }

        const ranges = [
            { slug: "2021-2025", min: 2021, max: 2025, label: "2021-2025" },
            { slug: "2011-2020", min: 2011, max: 2020, label: "2011-2020" },
            { slug: "1996-2010", min: 1996, max: 2010, label: "1996-2010" }
        ];

        tabs.innerHTML = ranges.map((range, index) => {
            return `<button class="news-range-tab${index === 0 ? " is-active" : ""}" type="button" data-news-range="${range.slug}">${range.label}</button>`;
        }).join("");

        tabs.addEventListener("click", event => {
            const button = event.target.closest("[data-news-range]");
            if (!button) return;
            tabs.querySelectorAll(".news-range-tab").forEach(tab => tab.classList.toggle("is-active", tab === button));
            const range = ranges.find(entry => entry.slug === button.dataset.newsRange);
            renderClippings(items.filter(item => item.year >= range.min && item.year <= range.max));
        });

        renderClippings(items.filter(item => item.year >= ranges[0].min && item.year <= ranges[0].max));
    }

    function renderClippings(items) {
        const grid = document.querySelector("[data-news-clippings]");
        if (!grid) return;
        grid.innerHTML = items.map(item => {
            const content = item[state.language] || item.en;
            return `
                <button class="news-clip-card" type="button" data-news-image="${asset(item.image)}" data-news-title="${escapeAttr(content.title)}">
                    <figure class="news-clip-card__image">
                        <img src="${asset(item.image)}" alt="${escapeAttr(content.title)}" loading="lazy">
                    </figure>
                    <div class="news-clip-card__body">
                        <span class="news-clip-card__action">${copy[state.language].view}</span>
                    </div>
                </button>`;
        }).join("");
    }
    function setupModal() {
        const modal = document.querySelector("[data-news-modal]");
        if (!modal) return;
        const image = modal.querySelector("[data-news-modal-image]");
        const title = modal.querySelector("[data-news-modal-title]");
        const close = modal.querySelector("[data-news-close]");

        document.addEventListener("click", event => {
            const trigger = event.target.closest("[data-news-image]");
            if (!trigger) return;
            image.src = trigger.dataset.newsImage;
            image.alt = trigger.dataset.newsTitle || "";
            title.textContent = trigger.dataset.newsTitle || "";
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
            image.removeAttribute("src");
            image.alt = "";
        }
    }

    function shellClass() {
        return "hi-shell";
    }

    function asset(path) {
        if (!path) return "";
        if (/^https?:/.test(path)) return path;
        return `${state.root}${path}`;
    }

    function escapeHtml(value) {
        return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    function escapeAttr(value) {
        return escapeHtml(value);
    }
}());

