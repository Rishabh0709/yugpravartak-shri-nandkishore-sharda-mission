/**
 * While the English site covers only a core set of pages, the shared
 * nav / footer / breadcrumb still emit /en/<page>.html links for every
 * page. For any page that does NOT yet have a real src/en/<page>.html,
 * this produces a tiny /en/<page>.html stub that redirects to the Hindi
 * page — so no /en/ link 404s (the "fall back to Hindi" behaviour).
 *
 * When a page is translated, drop src/en/<page>.html in and it wins
 * automatically (a real permalink beats this generated one); remove the
 * slug here on the next pass to keep the list honest.
 */
const fs = require("node:fs");
const path = require("node:path");

const SRC = path.join(__dirname, "..");

// Pages that have a real English translation — no redirect stub for these.
const TRANSLATED = new Set([
  "index", "index-v2", "about-mission", "itihaas", "divya-gyan",
  "buddhi-vivek-yog-sadhna", "nishkam-karm-sadhna",
  "swami-vivekanand-trust", "maa-shardamani-trust",
  "gyanyogi-adhyatm-kendra", "gyan-ganga-mission",
  "transparency", "sampark", "donate",
  "shri-nandkishore-sharda", "basanti-manihar", "madhubala-advani",
  "news-events", "testimonials", "gallery", "video-detail",
  "awards",
]);

// Special pages that are not part of the public nav and get no /en/ alias.
// shri-nandkishore-sharda-chintan -> redirect to /margdarshan-siddhant.html;
// sadhna-aarambh -> redirect to /faq.html (both pairs were merged).
const SKIP = new Set([
  "404", "patterns", "shri-nandkishore-sharda-chintan", "sadhna-aarambh",
]);

module.exports = () =>
  fs
    .readdirSync(SRC)
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .filter((slug) => !TRANSLATED.has(slug) && !SKIP.has(slug))
    .sort();
