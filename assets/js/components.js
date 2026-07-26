"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadComponent(
            "#header-placeholder",
            "components/header.html"
        ),
        loadComponent(
            "#footer-placeholder",
            "components/footer.html"
        )
    ]);

    initializeNavigation();
    setCurrentYear();
    highlightActiveNavigation();
});

async function loadComponent(selector, filePath) {
    const container = document.querySelector(selector);

    if (!container) {
        return;
    }

    try {
        const response = await fetch(filePath);

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

function initializeNavigation() {
    const toggleButton = document.querySelector(".nav-toggle");
    const navigation = document.querySelector(".site-nav");
    const overlay = document.querySelector(".nav-overlay");
    const navigationLinks = document.querySelectorAll(".site-nav a");

    if (!toggleButton || !navigation || !overlay) {
        return;
    }

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

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });
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

    const navigationLinks = document.querySelectorAll(
        ".site-nav a, .footer-navigation a"
    );

    navigationLinks.forEach((link) => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}