"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const filters = Array.from(document.querySelectorAll(".gallery-filter"));
    const cards = Array.from(document.querySelectorAll("[data-gallery-item]"));
    const countTarget = document.querySelector("[data-visible-count]");
    const dialog = document.querySelector(".gallery-lightbox");

    if (!filters.length || !cards.length || !dialog) {
        return;
    }

    const image = dialog.querySelector(".lightbox-image");
    const title = dialog.querySelector("#lightbox-title");
    const caption = dialog.querySelector(".lightbox-caption");
    const counter = dialog.querySelector(".lightbox-counter");
    const closeButton = dialog.querySelector(".lightbox-close");
    const previousButton = dialog.querySelector(".lightbox-prev");
    const nextButton = dialog.querySelector(".lightbox-next");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let activeFilter = "all";
    let visibleCards = cards;
    let activeIndex = 0;
    let opener = null;
    let touchStartX = 0;

    function applyFilter(filterValue, updateAddress = true) {
        activeFilter = filters.some((filter) => filter.dataset.filter === filterValue) ? filterValue : "all";

        filters.forEach((filter) => {
            const isActive = filter.dataset.filter === activeFilter;
            filter.classList.toggle("is-active", isActive);
            filter.setAttribute("aria-pressed", String(isActive));
        });

        visibleCards = cards.filter((card) => activeFilter === "all" || card.dataset.category === activeFilter);
        cards.forEach((card) => {
            card.hidden = !visibleCards.includes(card);
        });

        if (countTarget) {
            countTarget.textContent = visibleCards.length;
        }

        if (updateAddress) {
            history.replaceState(null, "", activeFilter === "all" ? "#gallery" : `#${activeFilter}`);
        }
    }

    function showImage(index) {
        if (!visibleCards.length) return;

        activeIndex = (index + visibleCards.length) % visibleCards.length;
        const card = visibleCards[activeIndex];
        const cardImage = card.querySelector("img");

        image.src = card.dataset.full || cardImage.currentSrc || cardImage.src;
        image.alt = cardImage.alt || card.dataset.title || "";
        title.textContent = card.dataset.title || "गैलरी चित्र";
        caption.textContent = card.dataset.caption || "";
        counter.textContent = `चित्र ${activeIndex + 1} / ${visibleCards.length}`;
    }

    function openLightbox(card) {
        opener = card;
        activeIndex = Math.max(0, visibleCards.indexOf(card));
        showImage(activeIndex);
        document.body.classList.add("gallery-modal-open");

        if (!dialog.open) {
            dialog.showModal();
        }

        closeButton.focus({ preventScroll: true });
    }

    function closeLightbox() {
        if (dialog.open) {
            dialog.close();
        }
    }

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            applyFilter(filter.dataset.filter);
            const grid = document.querySelector("[data-gallery-grid]");
            if (grid) {
                grid.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
            }
        });
    });

    cards.forEach((card) => {
        card.addEventListener("click", () => openLightbox(card));
    });

    closeButton.addEventListener("click", closeLightbox);
    previousButton.addEventListener("click", () => showImage(activeIndex - 1));
    nextButton.addEventListener("click", () => showImage(activeIndex + 1));

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            closeLightbox();
        }
    });

    dialog.addEventListener("close", () => {
        image.removeAttribute("src");
        document.body.classList.remove("gallery-modal-open");
        if (opener) {
            opener.focus({ preventScroll: true });
        }
    });

    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            showImage(activeIndex - 1);
        }
        if (event.key === "ArrowRight") {
            event.preventDefault();
            showImage(activeIndex + 1);
        }
    });

    dialog.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    dialog.addEventListener("touchend", (event) => {
        const distance = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(distance) > 55) {
            showImage(distance > 0 ? activeIndex - 1 : activeIndex + 1);
        }
    }, { passive: true });

    window.addEventListener("hashchange", () => {
        const hash = window.location.hash.slice(1);
        applyFilter(hash && hash !== "gallery" ? hash : "all", false);
    });

    const initialHash = window.location.hash.slice(1);
    applyFilter(initialHash && initialHash !== "gallery" ? initialHash : "all", false);
});
