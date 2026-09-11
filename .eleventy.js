const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const fs = require("node:fs");
const path = require("node:path");

/**
 * Deploy target switch
 * --------------------
 * While the site lives on the GitHub *project* URL
 *   https://rishabh0709.github.io/yugpravartak-shri-nandkishore-sharda-mission/
 * every absolute path must be prefixed with the repo name.
 *
 * When the site is pointed at https://manidweepjodhpur.org (still
 * hosted on GitHub Pages, but at the domain root), build with:
 *   ELEVENTY_PATH_PREFIX=/  npm run build
 * src/CNAME (containing manidweepjodhpur.org) is already in place and
 * copied into the build output below. Note: the site formerly live at
 * .org is moving to manidweepjodhpur.com instead — separate repo, not
 * this one.
 */
const PATH_PREFIX =
  process.env.ELEVENTY_PATH_PREFIX || "/yugpravartak-shri-nandkishore-sharda-mission/";

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);

  // Rewrites every root-absolute href/src in the built HTML to include PATH_PREFIX.
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Static files copied verbatim into the output root.
  // NOTE: assets/ stays at the repo root (large tree, kept out of the Eleventy
  // input dir on purpose); Eleventy only copies it into the build output.
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/data": "data" });
  eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  eleventyConfig.addWatchTarget("assets/");
  eleventyConfig.addWatchTarget("src/data/");

  // Clean, trailing-slash URLs (…/bhaiyaji/, not …/bhaiyaji.html). The
  // homepage (filePathStem "/index" or "/en/index") maps to "/" or "/en/".
  // Front-matter `permalink` still wins for robots.txt / sitemap.xml / redirects.
  eleventyConfig.addGlobalData("permalink", () => (data) => {
    const stem = data.page.filePathStem;
    if (stem.endsWith("/index")) {
      return stem.slice(0, -"index".length) || "/";
    }
    return `${stem}/`;
  });

  // "/assets/x" -> "/<pathPrefix>/assets/x"  (for URLs built inside JSON/JS, not HTML)
  eleventyConfig.addFilter("prefix", (p) => {
    if (!p) return p;
    return (PATH_PREFIX.replace(/\/$/, "") + "/" + String(p).replace(/^\//, "")).replace(/\/{2,}/g, "/");
  });

  // ISO date ("1944-07-16" or just "1944") -> Hindi ("16 जुलाई 1944" / "1944")
  const HI_MONTHS = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"];
  eleventyConfig.addFilter("hindiDate", (iso) => {
    if (!iso) return iso;
    const m = String(iso).match(/^(\d{4})(?:-(\d{2})-(\d{2}))?$/);
    if (!m) return iso;
    if (!m[2]) return m[1];
    return `${Number(m[3])} ${HI_MONTHS[Number(m[2]) - 1]} ${m[1]}`;
  });

  // ISO date -> English ("16 July 1944" / "July 1944" / "1944")
  const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  eleventyConfig.addFilter("enDate", (iso) => {
    if (!iso) return iso;
    const m = String(iso).match(/^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/);
    if (!m) return iso;
    if (!m[2]) return m[1];
    if (!m[3]) return `${EN_MONTHS[Number(m[2]) - 1]} ${m[1]}`;
    return `${Number(m[3])} ${EN_MONTHS[Number(m[2]) - 1]} ${m[1]}`;
  });

  // Keep the photo-tooling album.json manifests out of the published output
  // (they carry absolute local paths and nothing on the site fetches them).
  eleventyConfig.on("eleventy.after", ({ dir }) => {
    const walk = (d) => {
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const full = path.join(d, e.name);
        if (e.isDirectory()) walk(full);
        else if (e.name === "album.json") fs.rmSync(full);
      }
    };
    const imgDir = path.join(dir.output, "assets", "images");
    if (fs.existsSync(imgDir)) walk(imgDir);
  });

  // Sitemap collection: every built page (trailing-slash URL) except
  // utility files (robots.txt, sitemap.xml, 404.html -- none of which
  // end in "/") and anything marked noindex.
  eleventyConfig.addCollection("sitemap", (api) =>
    api.getAll().filter((item) => {
      const url = item.url || "";
      if (!url.endsWith("/")) return false;
      if (item.data.noindex) return false;
      return true;
    })
  );

  return {
    pathPrefix: PATH_PREFIX,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
