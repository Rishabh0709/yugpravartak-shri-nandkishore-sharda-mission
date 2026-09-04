/**
 * Transparency documents, assembled at build time.
 *
 * Trust identity (names, dates, 80G numbers) comes from trusts.json;
 * the actual file lists are read from assets/documents/<id>/<kind>/ so the
 * page updates itself whenever a PDF is added or removed.
 *
 * Consumed by src/transparency.html. Section anchors are "<id>-records"
 * (the convention already used by src/data/donation-details.json).
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..", "..", "assets", "documents");
const TRUSTS = require("./trusts.json").trusts;

// Order + labels for the legal PDFs; anything not listed here is ignored
// (e.g. PANCARD.pdf, a stray duplicate of PAN.pdf).
const LEGAL = [
  { key: "12A", label: { hi: "12A पंजीकरण", en: "12A registration" } },
  { key: "80G", label: { hi: "80G अनुमोदन", en: "80G approval" } },
  { key: "PAN", label: { hi: "पैन कार्ड", en: "PAN card" } },
  { key: "FCRA", label: { hi: "एफ.सी.आर.ए. पंजीकरण", en: "FCRA registration" } },
  { key: "NGO-DARPAN", label: { hi: "एन.जी.ओ. दर्पण", en: "NGO Darpan" } },
];

function pdfs(...segments) {
  const dir = path.join(ROOT, ...segments);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .sort();
}

const dashYears = (s) => s.replace(/(\d)-(\d)/, "$1–$2");

module.exports = () =>
  TRUSTS.map((t) => {
    const legalFiles = pdfs(t.id, "legal");
    const legal = LEGAL.filter((d) => legalFiles.includes(`${d.key}.pdf`)).map((d) => ({
      key: d.key,
      label: d.label,
      number: t.approvals[d.key] || null,
      url: `/assets/documents/${t.id}/legal/${d.key}.pdf`,
    }));

    const financialReports = pdfs(t.id, "financial-reports").map((f) => ({
      year: dashYears(f.replace(/\.pdf$/i, "")),
      url: `/assets/documents/${t.id}/financial-reports/${f}`,
    }));

    const scholarshipCertificates = pdfs(t.id, "scholarship-certificates").map((f) => {
      const base = f.replace(/\.pdf$/i, "");
      const isSummary = /summary/i.test(base);
      const span = dashYears(base.replace(/summary-?/i, ""));
      return {
        label: isSummary
          ? { hi: `${span} — संकलित सारांश`, en: `${span} — consolidated summary` }
          : { hi: span, en: span },
        summary: isSummary,
        url: `/assets/documents/${t.id}/scholarship-certificates/${f}`,
      };
    });

    return { ...t, legal, financialReports, scholarshipCertificates };
  });
