/**
 * Pages whose slug changed (2026-09-12) to drop a Hindi/Sanskrit word
 * where the page itself is a plain generic concept, not a person's name
 * or the mission's own coined terminology (which correctly stay as-is
 * in both locales -- see OPEN-ITEMS.md).
 *
 * Drives two redirect layers per locale from each old slug: the
 * pre-clean-URL /<from>.html address, and the very-briefly-live
 * clean-URL /<from>/ address (the rename happened right after the
 * .html -> / migration, so that form may already be bookmarked/
 * indexed too). Both meta-refresh to the new /<to>/ address.
 */
module.exports = () => [
  { from: "itihaas", to: "history" },
  { from: "jigyasa-samadhan", to: "spiritual-qa" },
  { from: "adhyatmik-gyan-charcha", to: "spiritual-discussions" },
  { from: "margdarshan-siddhant", to: "guiding-principles" },
];
