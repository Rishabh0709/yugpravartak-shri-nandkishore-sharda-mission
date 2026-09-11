"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.querySelector(".sm-lightbox");
    const triggers = Array.from(document.querySelectorAll(".sm-cert-trigger"));

    if (!dialog || !triggers.length) {
        return;
    }

    const image = dialog.querySelector(".lightbox-image");
    const title = dialog.querySelector("#sm-lightbox-title");
    const caption = dialog.querySelector(".lightbox-caption");
    const counter = dialog.querySelector(".lightbox-counter");
    const closeButton = dialog.querySelector(".lightbox-close");
    const previousButton = dialog.querySelector(".lightbox-prev");
    const nextButton = dialog.querySelector(".lightbox-next");

    // Certificate images use a real src="" attribute (not data-full), so
    // Eleventy's HTML base plugin already rewrites it with the pathPrefix
    // at build time — read it as-is, unlike gallery.js's data-full path.
    const isHi = document.documentElement.lang === "hi";
    const counterText = (i, n) => (isHi ? `प्रमाण-पत्र ${i} / ${n}` : `Certificate ${i} of ${n}`);

    let items = [];
    let activeIndex = 0;
    let opener = null;
    let touchStartX = 0;

    function showImage(index) {
        if (!items.length) return;
        activeIndex = (index + items.length) % items.length;
        const item = items[activeIndex];

        image.src = item.src;
        image.alt = item.alt || "";
        title.textContent = item.title || "";
        caption.textContent = item.caption || "";
        counter.textContent = counterText(activeIndex + 1, items.length);
    }

    function openLightbox(groupName, triggerEl) {
        const group = document.querySelector(`.sm-certs[data-certs-group="${groupName}"]`);
        if (!group) return;

        items = Array.from(group.querySelectorAll("img")).map((img) => ({
            src: img.getAttribute("src"),
            alt: img.getAttribute("alt") || "",
            title: img.dataset.title || "",
            caption: img.dataset.caption || ""
        }));

        if (!items.length) return;

        opener = triggerEl;
        showImage(0);
        document.body.classList.add("sm-modal-open");

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

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => openLightbox(trigger.dataset.certs, trigger));
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
        document.body.classList.remove("sm-modal-open");
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
});
