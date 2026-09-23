(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const modal = document.querySelector("[data-news-modal]");
        if (!modal) return;
        const image = modal.querySelector("[data-news-modal-image]");
        const title = modal.querySelector("[data-news-modal-title]");
        const close = modal.querySelector("[data-news-close]");

        document.addEventListener("click", (event) => {
            const trigger = event.target.closest("[data-lightbox-image]");
            if (trigger) {
                image.src = trigger.dataset.lightboxImage;
                image.alt = trigger.dataset.lightboxTitle || "";
                title.textContent = trigger.dataset.lightboxTitle || "";
                modal.classList.add("is-open");
                close.focus();
                return;
            }
            if (event.target.closest("[data-news-close]")) closeModal();
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) closeModal();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
        });

        function closeModal() {
            modal.classList.remove("is-open");
            image.removeAttribute("src");
            image.alt = "";
        }
    });
}());
