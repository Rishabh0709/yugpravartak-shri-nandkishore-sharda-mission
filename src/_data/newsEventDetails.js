/**
 * Exposes the events in data/news-events.json that carry a "detail" block
 * (full brief + photos + press clippings) to Eleventy at build time, so
 * each gets a real, statically-rendered detail page -- not a client-side
 * fetch-and-render like video-detail.html, so the brief/photos/clippings
 * are there in the HTML for search engines, link previews and anyone
 * without JS, and the page can be shared as its own URL.
 */
const fs = require("node:fs");
const path = require("node:path");

const SOURCE = path.join(__dirname, "..", "data", "news-events.json");

module.exports = () => {
  const data = JSON.parse(fs.readFileSync(SOURCE, "utf8"));
  return (data.events || []).filter((event) => event.detail);
};
