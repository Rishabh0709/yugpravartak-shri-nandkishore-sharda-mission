/**
 * The site moved from /<page>.html URLs to clean /<page>/ ones. This
 * enumerates every real content page (both locales) so a tiny stub can be
 * generated at its old .html address that redirects to the new one --
 * anyone with an old bookmark, a shared link, or an already-indexed
 * search result lands on the right page instead of a 404.
 *
 * The homepage is excluded: /index.html keeps working natively (static
 * hosts serve a directory's index.html at both "/" and "/index.html"),
 * so it needs no stub. index-backup.html is excluded because it never
 * had a public .html URL -- it was created directly under the new
 * clean-URL scheme.
 */
const fs = require("node:fs");
const path = require("node:path");

const SRC = path.join(__dirname, "..");
const EXCLUDE = new Set(["index", "index-backup", "404"]);

const listSlugs = (dir) =>
  fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .filter((slug) => !EXCLUDE.has(slug))
    .sort();

module.exports = () => ({
  hi: listSlugs(SRC),
  en: listSlugs(path.join(SRC, "en")),
});
