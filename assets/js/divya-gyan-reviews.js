(function () {
    "use strict";

    const modal = document.getElementById("dg-review-modal");
    if (!modal) return;

    const dialog = modal.querySelector(".dg-review-modal__dialog");
    const titleEl = document.getElementById("dg-review-modal-title");
    const designationEl = document.getElementById("dg-review-modal-designation");
    const bodyEl = document.getElementById("dg-review-modal-body");
    let lastFocusedElement = null;

    const openModal = (trigger) => {
        const article = trigger.closest(".dg-review");
        const template = article?.querySelector(".dg-review__full");
        if (!article || !template) return;

        lastFocusedElement = trigger;
        titleEl.textContent = article.querySelector("footer strong")?.textContent || "";
        designationEl.textContent = article.querySelector("footer span")?.textContent || "";
        bodyEl.replaceChildren(template.content.cloneNode(true));
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        dialog?.focus();
    };

    const closeModal = () => {
        modal.hidden = true;
        document.body.style.overflow = "";
        lastFocusedElement?.focus?.();
    };

    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-dg-review-open]");
        if (trigger) {
            openModal(trigger);
            return;
        }
        if (event.target.closest("[data-dg-review-close]")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) {
            closeModal();
        }
    });
})();
