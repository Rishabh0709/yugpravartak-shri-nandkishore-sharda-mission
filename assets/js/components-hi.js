"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    const isHindiPage = document.documentElement.lang
        .toLowerCase()
        .startsWith("hi");

    await Promise.all([
        loadComponent(
            "#header-placeholder",
            isHindiPage
                ? "components/header-hi.html"
                : "components/header.html"
        ),
        loadComponent(
            "#footer-placeholder",
            isHindiPage
                ? "components/footer-hi.html"
                : "components/footer.html"
        )
    ]);

    initializeNavigation();
    setCurrentYear();
    highlightActiveNavigation();
	initHeaderScroll();
    initLangToggle();
    initMobileUtilities();
});

async function loadComponent(selector, filePath) {
    const container = document.querySelector(selector);

    if (!container) {
        return;
    }

    try {
        const response = await fetch(filePath, { cache: "no-store" });

        if (!response.ok) {
            throw new Error(
                `Unable to load ${filePath}: ${response.status}`
            );
        }

        container.innerHTML = await response.text();
    } catch (error) {
        console.error(error);

        container.innerHTML = `
            <p class="component-error">
                Unable to load website component.
            </p>
        `;
    }
}

function initHeaderScroll() {
    const header = document.getElementById("header");

    if (!header) {
        return;
    }

    const collapseAt = 150;
    const expandAt = 24;
    let isCompact = false;
    let ticking = false;

    const updateHeader = () => {
        const scrollPosition = Math.max(
            window.scrollY,
            document.documentElement.scrollTop
        );

        const shouldCompact = isCompact
            ? scrollPosition > expandAt
            : scrollPosition > collapseAt;

        if (shouldCompact !== isCompact) {
            isCompact = shouldCompact;
            header.classList.toggle("is-scrolled", isCompact);
        }

        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateHeader();
}

function initLangToggle() {
    const buttons = document.querySelectorAll(".lang-btn");

    if (!buttons.length) {
        return;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const chosenLang = button.getAttribute("data-lang");

            document.querySelectorAll(".lang-btn").forEach((btn) => {
                btn.classList.toggle(
                    "is-active",
                    btn.getAttribute("data-lang") === chosenLang
                );
            });
        });
    });
}

function initializeNavigation() {
    const toggleButton = document.querySelector(".nav-toggle");
    const navigation = document.querySelector(".site-nav");
    const overlay = document.querySelector(".nav-overlay");
    const navigationLinks = document.querySelectorAll(".site-nav a");
    const submenuItems = [...document.querySelectorAll(".has-submenu")];
    const submenuButtons = [...document.querySelectorAll(".nav-submenu-toggle")];

    if (!toggleButton || !navigation || !overlay) {
        return;
    }

    const closeSubmenus = (exception = null) => {
        submenuItems.forEach((item) => {
            if (item === exception) return;
            item.classList.remove("is-open");
            item.querySelector(".nav-submenu-toggle")?.setAttribute("aria-expanded", "false");
        });
    };

    const openNavigation = () => {
        navigation.classList.add("is-open");
        overlay.classList.add("is-visible");
        toggleButton.classList.add("is-active");
        toggleButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("nav-open");
    };

    const closeNavigation = () => {
        navigation.classList.remove("is-open");
        overlay.classList.remove("is-visible");
        toggleButton.classList.remove("is-active");
        toggleButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
        closeSubmenus();
    };

    toggleButton.addEventListener("click", () => {
        const isOpen = navigation.classList.contains("is-open");

        if (isOpen) {
            closeNavigation();
        } else {
            openNavigation();
        }
    });

    overlay.addEventListener("click", closeNavigation);

    submenuButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            const item = button.closest(".has-submenu");
            const willOpen = !item.classList.contains("is-open");

            closeSubmenus(item);
            item.classList.toggle("is-open", willOpen);
            button.setAttribute("aria-expanded", String(willOpen));
        });
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("click", (event) => {
        if (!navigation.contains(event.target)) closeSubmenus();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            const openItem = document.querySelector(".has-submenu.is-open");

            if (openItem) {
                const openButton = openItem.querySelector(".nav-submenu-toggle");
                closeSubmenus();
                openButton?.focus();
            } else {
                closeNavigation();
                toggleButton.focus();
            }
        }
    });

    window.matchMedia("(min-width: 993px)").addEventListener("change", closeSubmenus);
}

function setCurrentYear() {
    const yearElements = document.querySelectorAll(
        "[data-current-year]"
    );

    const currentYear = new Date().getFullYear();

    yearElements.forEach((element) => {
        element.textContent = currentYear;
    });
}

function highlightActiveNavigation() {
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";
    const currentHash = window.location.hash;

    const navigationLinks = document.querySelectorAll(
        ".site-nav a, .footer-navigation a"
    );

    navigationLinks.forEach((link) => {
        const rawHref = link.getAttribute("href");

        if (!rawHref || /^(https?:|mailto:|tel:)/.test(rawHref)) return;

        const destination = new URL(rawHref, window.location.href);
        const linkPage = destination.pathname.split("/").pop() || "index.html";
        const samePage = linkPage === currentPage;
        const exactDestination = samePage && (
            destination.hash
                ? destination.hash === currentHash
                : !currentHash
        );

        if (exactDestination) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }

        if (samePage) {
            link.closest(".has-submenu")?.classList.add("is-current");
        }
    });
}

function initMobileUtilities() {
    initBackToTop();
    initHorizontalScrollCues();
}

function initBackToTop() {
    let backToTop = document.getElementById("back-to-top");

    // Defensive fallback for a stale cached footer partial. The shared footer
    // remains the normal source; this creates one control only when it is absent.
    if (!backToTop) {
        backToTop = document.createElement("button");
        backToTop.className = "mobile-back-to-top";
        backToTop.id = "back-to-top";
        backToTop.type = "button";
        backToTop.setAttribute("aria-label", "Back to top");
        backToTop.innerHTML = `
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5"></path>
            </svg>
        `;
    }

    if (backToTop.dataset.initialized === "true") {
        return;
    }

    // The button is authored once in the shared footer, then moved outside
    // the footer's overflow-clipped decorative container for fixed positioning.
    document.body.appendChild(backToTop);
    backToTop.dataset.initialized = "true";

    let scrollTicking = false;
    const updateBackToTop = () => {
        backToTop.classList.toggle("is-visible", window.scrollY > 400);
        scrollTicking = false;
    };

    window.addEventListener("scroll", () => {
        if (!scrollTicking) {
            requestAnimationFrame(updateBackToTop);
            scrollTicking = true;
        }
    }, { passive: true });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth"
        });
    });

    updateBackToTop();
}

function initHorizontalScrollCues() {
    const scrollers = document.querySelectorAll([
        "[role='tablist']",
        ".activity-index-links",
        ".profile-jump-links",
        ".trust-index-links",
        ".gallery-filters",
        ".document-links",
        ".home-gallery-track",
        ".impact-chart-scroll",
        ".trust-chart-scroll",
        ".table-scroll",
        ".legal-table-scroll"
    ].join(","));

    scrollers.forEach((scroller) => {
        const updateCue = () => {
            const isScrollable = scroller.scrollWidth > scroller.clientWidth + 4;
            const isAtEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4;
            scroller.classList.toggle("mobile-scroll-cue", isScrollable);
            scroller.classList.toggle("is-at-end", isAtEnd);

            if (isScrollable && !scroller.hasAttribute("tabindex")) {
                scroller.tabIndex = 0;
                scroller.setAttribute("role", "region");
                scroller.setAttribute("aria-label", "Scrollable content");
            }
        };

        scroller.addEventListener("scroll", updateCue, { passive: true });
        window.addEventListener("resize", updateCue, { passive: true });
        requestAnimationFrame(updateCue);
    });
}

document.dispatchEvent(
    new CustomEvent("componentsLoaded")
);
