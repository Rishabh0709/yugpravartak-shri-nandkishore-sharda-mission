/* Transparency page — progressive enhancement only.
   When a trust card is deep-linked (e.g. #swami-vivekanand-trust-records
   from a trust page's "पंजीकरण एवं पारदर्शिता" strip), open its
   "show all years" disclosure so every document is visible at once.
   The page is fully usable without this. */
(function () {
    "use strict";

    function openTargetCard() {
        var id = (location.hash || "").replace(/^#/, "");
        if (!id) return;
        var card = document.getElementById(id);
        if (!card || !card.classList.contains("tr-card")) return;
        card.querySelectorAll("details.tr-more").forEach(function (d) {
            d.open = true;
        });
    }

    openTargetCard();
    window.addEventListener("hashchange", openTargetCard);
})();
