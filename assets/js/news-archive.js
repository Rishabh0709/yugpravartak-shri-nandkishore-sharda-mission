(function () {
    const state = {
        language: document.documentElement.lang === "hi" ? "hi" : "en",
        root: window.__BASEURL__ || ""
    };

    const copy = {
        en: { empty: "No past activities yet." },
        hi: { empty: "अभी तक कोई पिछला कार्यक्रम नहीं।" }
    };

    document.addEventListener("DOMContentLoaded", initArchive);

    async function initArchive() {
        const page = document.querySelector("[data-news-archive]");
        if (!page) return;

        try {
            const response = await fetch(`${state.root}data/news-events.json`);
            if (!response.ok) throw new Error(`Unable to load news/events: ${response.status}`);
            const data = await response.json();

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const past = (data.events || [])
                .filter(item => new Date(item.date) < today)
                .sort((a, b) => b.date.localeCompare(a.date));

            renderEvents("[data-archive-events]", past);
        } catch (error) {
            page.innerHTML += `<section class="news-events-section"><div class="hi-shell"><div class="news-event-card__body">${copy[state.language].empty}</div></div></section>`;
        }
    }

    function renderEvents(selector, items) {
        const grid = document.querySelector(selector);
        if (!grid) return;
        if (items.length === 0) {
            grid.innerHTML = `<p class="news-events-empty">${copy[state.language].empty}</p>`;
            return;
        }
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
