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
 * When the site is later pointed at https://www.manidweepjodhpur.org
 * (still hosted on GitHub Pages, but at the domain root), build with:
 *   ELEVENTY_PATH_PREFIX=/  npm run build
 * and add a src/CNAME file containing: www.manidweepjodhpur.org
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
  // Uncomment when moving to the custom domain:
  // eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  eleventyConfig.addWatchTarget("assets/");
  eleventyConfig.addWatchTarget("src/data/");

  // Keep the existing .html URL shape (…/bhaiyaji.html, not …/bhaiyaji/).
  // Front-matter `permalink` still wins for robots.txt / sitemap.xml / redirects.
  eleventyConfig.addGlobalData("permalink", () => (data) => `${data.page.filePathStem}.html`);

  // "/assets/x" -> "/<pathPrefix>/assets/x"  (for URLs built inside JSON/JS, not HTML)
  eleventyConfig.addFilter("prefix", (p) => {
    if (!p) return p;
    return (PATH_PREFIX.replace(/\/$/, "") + "/" + String(p).replace(/^\//, "")).replace(/\/{2,}/g, "/");
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

  // Sitemap collection: every built .html page except redirects / 404.
  eleventyConfig.addCollection("sitemap", (api) =>
    api.getAll().filter((item) => {
      const url = item.url || "";
      const isPage = url === "/" || url.endsWith(".html");
      if (!isPage) return false;
      if (url.endsWith("/404.html")) return false;
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
