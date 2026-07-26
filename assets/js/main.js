/* ==========================================================================
   main.js — Manidweep homepage
   Four small, independent behaviors. No framework, no build step, so this
   can be dropped into any static host as-is.
   ========================================================================== */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Nav solidifies on scroll ─────────────────────────────────────── */
  var nav = document.getElementById('siteNav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 2. Mobile menu toggle ───────────────────────────────────────────── */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── 3. Chaitanya particles — the hero's ambient signature motif.
     Skipped entirely under reduced-motion, since it is decorative. ──── */
  var particleField = document.getElementById('heroParticles');
  if (particleField && !prefersReducedMotion) {
    var COUNT = 26;
    for (var i = 0; i < COUNT; i++) {
      var dot = document.createElement('span');
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = 40 + Math.random() * 55 + '%';
      dot.style.animationDelay = (Math.random() * 9).toFixed(2) + 's';
      dot.style.animationDuration = (7 + Math.random() * 6).toFixed(2) + 's';
      particleField.appendChild(dot);
    }
  }

  /* ── 4. Scroll-reveal for each band's content ────────────────────────── */
  var revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealTargets.forEach(function (el) { observer.observe(el); });
    }
  }

  /* Footer year */
  var yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
