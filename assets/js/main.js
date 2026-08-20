"use strict";

/* ==========================================================
   WEBSITE INTERACTIONS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initializeHero();
    initializeSmoothLinks();
    initializeRevealAnimations();
	initializeImpactStories();
    initializeImpactTabs();
    initializeMobileDisclosures();
    initializeImageHints();
});
/* ==========================================================
   HERO
========================================================== */

function initializeHero() {
    const hero = document.querySelector(".hero");

    if (!hero) {
        return;
    }

    const heroContent = hero.querySelector(".hero-content");
    const particlesContainer = hero.querySelector(".hero-particles");

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    createHeroParticles(particlesContainer, prefersReducedMotion);

    if (prefersReducedMotion) {
        hero.classList.add("hero-ready");
        return;
    }

    requestAnimationFrame(() => {
        hero.classList.add("hero-ready");
    });

    initializeHeroMouseParallax(hero);
    initializeHeroScrollParallax(hero, heroContent);
}

/* ==========================================================
   HERO PARTICLES
========================================================== */

function createHeroParticles(container, reducedMotion) {
    if (!container) {
        return;
    }

    container.innerHTML = "";

    const particleCount = reducedMotion
        ? 6
        : getParticleCount();

    const fragment = document.createDocumentFragment();

    for (let index = 0; index < particleCount; index += 1) {
        const particle = document.createElement("span");

        const size = randomNumber(2, 5);
        const left = randomNumber(5, 95);
        const top = randomNumber(20, 88);
        const duration = randomNumber(8, 17);
        const delay = randomNumber(-14, 0);
        const drift = randomNumber(-35, 35);
        const opacity = randomNumber(25, 70) / 100;

        particle.style.setProperty("--particle-size", `${size}px`);
        particle.style.setProperty("--particle-left", `${left}%`);
        particle.style.setProperty("--particle-top", `${top}%`);
        particle.style.setProperty("--particle-duration", `${duration}s`);
        particle.style.setProperty("--particle-delay", `${delay}s`);
        particle.style.setProperty("--particle-drift", `${drift}px`);
        particle.style.setProperty("--particle-opacity", opacity);

        fragment.appendChild(particle);
    }

    container.appendChild(fragment);
}

function getParticleCount() {
    if (window.innerWidth < 480) {
        return 10;
    }

    if (window.innerWidth < 992) {
        return 15;
    }

    return 22;
}

/* ==========================================================
   MOUSE PARALLAX
========================================================== */

function initializeHeroMouseParallax(hero) {
    if (!window.matchMedia("(pointer: fine)").matches) {
        return;
    }

    let animationFrame = null;

    hero.addEventListener("pointermove", (event) => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(() => {
            const bounds = hero.getBoundingClientRect();

            const x =
                (event.clientX - bounds.left) / bounds.width - 0.5;

            const y =
                (event.clientY - bounds.top) / bounds.height - 0.5;

            hero.style.setProperty(
                "--hero-mouse-x",
                `${x * 14}px`
            );

            hero.style.setProperty(
                "--hero-mouse-y",
                `${y * 10}px`
            );
        });
    });

    hero.addEventListener("pointerleave", () => {
        hero.style.setProperty("--hero-mouse-x", "0px");
        hero.style.setProperty("--hero-mouse-y", "0px");
    });
}

/* ==========================================================
   SCROLL PARALLAX
========================================================== */

function initializeHeroScrollParallax(hero, content) {
    let ticking = false;

    const updateHero = () => {
        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;

        if (scrollY > heroHeight) {
            ticking = false;
            return;
        }

        const progress = Math.min(scrollY / heroHeight, 1);

        hero.style.setProperty(
            "--hero-scroll-y",
            `${scrollY * 0.18}px`
        );

        hero.style.setProperty(
            "--hero-overlay-opacity",
            `${0.12 + progress * 0.28}`
        );

        if (content) {
            content.style.transform =
                `translate3d(0, ${scrollY * 0.12}px, 0)`;

            content.style.opacity =
                String(Math.max(1 - progress * 1.15, 0));
        }

        ticking = false;
    };

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                requestAnimationFrame(updateHero);
                ticking = true;
            }
        },
        { passive: true }
    );
}

/* ==========================================================
   IMPACT SUCCESS STORIES
========================================================== */

function initializeImpactStories() {
    const slider = document.querySelector(".impact-story-slider");

    if (!slider) {
        return;
    }

    const track = slider.querySelector(".impact-story-track");
    const stories = Array.from(
        slider.querySelectorAll("[data-impact-story]")
    );

    const previousButton = slider.querySelector(
        ".impact-slider-button--previous"
    );

    const nextButton = slider.querySelector(
        ".impact-slider-button--next"
    );

    const pagination = document.querySelector(
        ".impact-story-pagination"
    );

    if (
        !track ||
        !stories.length ||
        !previousButton ||
        !nextButton ||
        !pagination
    ) {
        return;
    }

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    let currentIndex = 0;
    let autoplayTimer = null;

    const paginationButtons = stories.map((story, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.setAttribute(
            "aria-label",
            `View success story ${index + 1}`
        );

        button.addEventListener("click", () => {
            showStory(index);
            restartAutoplay();
        });

        pagination.appendChild(button);

        return button;
    });

    function showStory(index) {
        currentIndex = (
            index + stories.length
        ) % stories.length;

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        stories.forEach((story, storyIndex) => {
            story.classList.toggle(
                "is-active",
                storyIndex === currentIndex
            );

            story.setAttribute(
                "aria-hidden",
                storyIndex === currentIndex
                    ? "false"
                    : "true"
            );
        });

        paginationButtons.forEach((button, buttonIndex) => {
            const isActive = buttonIndex === currentIndex;

            button.classList.toggle("is-active", isActive);

            button.setAttribute(
                "aria-current",
                isActive ? "true" : "false"
            );
        });
    }

    function showNextStory() {
        showStory(currentIndex + 1);
    }

    function showPreviousStory() {
        showStory(currentIndex - 1);
    }

    function startAutoplay() {
        if (prefersReducedMotion || stories.length < 2) {
            return;
        }

        autoplayTimer = window.setInterval(
            showNextStory,
            6500
        );
    }

    function stopAutoplay() {
        if (!autoplayTimer) {
            return;
        }

        window.clearInterval(autoplayTimer);
        autoplayTimer = null;
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    previousButton.addEventListener("click", () => {
        showPreviousStory();
        restartAutoplay();
    });

    nextButton.addEventListener("click", () => {
        showNextStory();
        restartAutoplay();
    });

    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);

    slider.addEventListener("focusin", stopAutoplay);

    slider.addEventListener("focusout", (event) => {
        if (!slider.contains(event.relatedTarget)) {
            startAutoplay();
        }
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    showStory(0);
    startAutoplay();
}



/* ==========================================================
   SMOOTH ANCHOR LINKS
========================================================== */

function initializeSmoothLinks() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

/* ==========================================================
   SECTION REVEAL
========================================================== */

function initializeRevealAnimations() {
    const elements = document.querySelectorAll(
        [
            ".section-heading",
            ".journey-content",
            ".journey-visual",
            ".service-timeline-card",
            ".gallery-item",
            ".contact-content",
            ".contact-card",
            ".reflection-content"
        ].join(",")
    );

    if (!elements.length) {
        return;
    }

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    elements.forEach((element, index) => {
        element.classList.add("reveal-element");

        element.style.setProperty(
            "--reveal-delay",
            `${Math.min((index % 4) * 90, 270)}ms`
        );
    });

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -60px 0px"
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
}

/* ==========================================================
   MOBILE READING + IMAGE HINTS
========================================================== */

function initializeMobileDisclosures() {
    const disclosures = document.querySelectorAll("[data-mobile-disclosure]");

    if (!disclosures.length) {
        return;
    }

    const narrowScreen = window.matchMedia("(max-width: 520px)").matches;

    disclosures.forEach((disclosure) => {
        disclosure.open = !narrowScreen;
    });
}

function initializeImageHints() {
    document.querySelectorAll('img[loading="lazy"]:not([decoding])').forEach((image) => {
        image.decoding = "async";
    });
}


function initializeImpactTabs() {
    const stage = document.querySelector("[data-impact-stage]");

    if (!stage) {
        return;
    }

    const tabs = Array.from(stage.querySelectorAll('[role="tab"]'));
    const panels = Array.from(stage.querySelectorAll('[role="tabpanel"]'));

    function activateImpact(tab, moveFocus = false) {
        const targetId = tab.dataset.impactTarget;

        tabs.forEach((item) => {
            const isActive = item === tab;
            item.setAttribute("aria-selected", String(isActive));
            item.tabIndex = isActive ? 0 : -1;
        });

        panels.forEach((panel) => {
            const isActive = panel.id === targetId;
            panel.classList.toggle("is-active", isActive);
            panel.setAttribute("aria-hidden", String(!isActive));
        });

        if (moveFocus) {
            tab.focus({ preventScroll: true });
        }

        tab.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => activateImpact(tab));
        tab.addEventListener("keydown", (event) => {
            let nextIndex = null;

            if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
            if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
            if (event.key === "Home") nextIndex = 0;
            if (event.key === "End") nextIndex = tabs.length - 1;
            if (nextIndex === null) return;

            event.preventDefault();
            activateImpact(tabs[nextIndex], true);
        });
    });
}

/* ==========================================================
   UTILITIES
========================================================== */

function randomNumber(minimum, maximum) {
    return Math.random() * (maximum - minimum) + minimum;
}


// Testimonials Slider Logic
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("testimonialSlider");
    const slides = document.querySelectorAll(".hi-testimonial-slide");
    const dotsContainer = document.getElementById("sliderDots");
    if (!slider || !slides.length || !dotsContainer) return;

    let currentSlide = 0;
    let autoSlideInterval;
    let isPaused = false;

    // Generate Dots
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("hi-slider-dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".hi-slider-dot");

    window.goToSlide = function (n) {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
        resetTimer();
    };

    window.moveSlide = function (step) {
        goToSlide(currentSlide + step);
    };

    function startTimer() {
        if (isPaused || autoSlideInterval) return;
        autoSlideInterval = setInterval(() => moveSlide(1), 6000);
    }

    function stopTimer() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }

    function resetTimer() {
        stopTimer();
        startTimer();
    }

    function pauseTimer() {
        isPaused = true;
        stopTimer();
    }

    function resumeTimer() {
        isPaused = false;
        startTimer();
    }

    slider.addEventListener("mouseenter", pauseTimer);
    slider.addEventListener("mouseleave", resumeTimer);
    slider.addEventListener("focusin", pauseTimer);
    slider.addEventListener("focusout", (event) => {
        if (!slider.contains(event.relatedTarget)) {
            resumeTimer();
        }
    });

    startTimer();
});


