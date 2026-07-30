"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".profile-jump-nav");

    if (!navigation) return;

    const links = [...navigation.querySelectorAll('a[href^="#"]')];
    const destinations = links
        .map((link) => ({
            link,
            section: document.querySelector(link.getAttribute("href"))
        }))
        .filter((item) => item.section);

    if (!destinations.length) return;

    const linkRail = navigation.querySelector(".profile-jump-links");
    let currentLink = null;

    const setCurrent = (nextLink) => {
        if (nextLink === currentLink) return;

        currentLink = nextLink;

        destinations.forEach(({ link }) => {
            const isCurrent = link === nextLink;
            link.classList.toggle("is-current", isCurrent);

            if (isCurrent) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        if (linkRail && linkRail.scrollWidth > linkRail.clientWidth) {
            const preferredLeft = nextLink.offsetLeft
                - (linkRail.clientWidth / 2)
                + (nextLink.offsetWidth / 2);

            linkRail.scrollTo({
                left: Math.max(0, preferredLeft),
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth"
            });
        }
    };

    let ticking = false;

    const updateCurrentSection = () => {
        const marker = Math.min(220, window.innerHeight * 0.32);
        let current = destinations[0];

        destinations.forEach((destination) => {
            if (destination.section.getBoundingClientRect().top <= marker) {
                current = destination;
            }
        });

        setCurrent(current.link);
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateCurrentSection);
            ticking = true;
        }
    }, { passive: true });

    links.forEach((link) => {
        link.addEventListener("click", () => setCurrent(link));
    });

    updateCurrentSection();
});
