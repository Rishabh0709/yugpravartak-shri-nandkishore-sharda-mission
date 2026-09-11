"use strict";

/* ==========================================================
   DONATE PAGE
   Renders /donate/ + /en/donate/. Reads
   /data/donation-details.json (bank + UPI details, meant to be
   public). No payment gateway: the page shows a trust's verified
   account for the chosen cause, then helps the donor assemble an
   email for their receipt. Nothing is stored or sent by the site.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("[data-donation]");
    if (!root) return;

    const lang = document.documentElement.lang === "hi" ? "hi" : "en";
    const email = root.dataset.email || "";
    const base = window.__BASEURL__ || "/";

    const T = {
        hi: {
            loading: "विवरण लोड हो रहे हैं…",
            failed: "भुगतान विवरण अभी लोड नहीं हो सके। कृपया पृष्ठ पुनः लोड करें या राशि भेजने से पहले मिशन से सम्पर्क करें।",
            toConfirm: "पुष्टि होना शेष",
            incompleteNote: "इस न्यास के कुछ विवरण अभी अद्यतन किए जा रहे हैं। राशि भेजने से पहले कृपया इन्हें मिशन से सत्यापित करें।",
            copied: (l) => `${l} कॉपी हो गया।`,
            copyFailed: "ब्राउज़र स्वतः कॉपी नहीं कर सका। कृपया मान चुनकर मैन्युअल कॉपी करें।",
            fillRequired: "कृपया आगे बढ़ने से पहले सभी आवश्यक जानकारी भरें।",
            opening: "आपका ईमेल ऐप खुल रहा है। कृपया विवरण देखकर संदेश भेजें।",
            copiedDetails: `विवरण कॉपी हो गए। आप इन्हें ${email} पर ईमेल में पेस्ट कर सकते हैं।`,
            subject80G: "80G प्रमाण-पत्र हेतु दान विवरण",
            subjectReceipt: "दान रसीद हेतु विवरण",
            mailHeader: "यह संदेश दानकर्ता द्वारा वेबसाइट के माध्यम से तैयार किया गया है। इसमें दी गई जानकारी नीचे संलग्न है — इसे भेजने से पहले जाँच लें।",
            mail: { cause: "दान का उद्देश्य", trust: "प्राप्तकर्ता न्यास", name: "पूरा नाम", email: "ईमेल", phone: "सम्पर्क नंबर", pan: "पैन", address: "डाक पता", amount: "दान राशि (₹)", date: "अंतरण तिथि", utr: "यू.टी.आर. / लेन-देन संदर्भ" }
        },
        en: {
            loading: "Loading details…",
            failed: "Payment details could not be loaded. Please reload the page, or contact the Mission before transferring any amount.",
            toConfirm: "to be confirmed",
            incompleteNote: "Some details for this trust are still being updated. Please verify them with the Mission before transferring any amount.",
            copied: (l) => `${l} copied.`,
            copyFailed: "The browser could not copy automatically. Please select the value and copy it manually.",
            fillRequired: "Please complete all the required fields before continuing.",
            opening: "Your email application is opening. Please review the details and send the message.",
            copiedDetails: `Details copied. You can paste them into an email to ${email}.`,
            subject80G: "Donation details for an 80G certificate",
            subjectReceipt: "Donation details for a receipt",
            mailHeader: "This message was prepared by the donor through the website. The details entered are below — please review them before sending.",
            mail: { cause: "Donation purpose", trust: "Receiving trust", name: "Full name", email: "Email", phone: "Contact number", pan: "PAN", address: "Postal address", amount: "Donation amount (INR)", date: "Transfer date", utr: "UTR / transaction reference" }
        }
    }[lang];

    // --- element refs ---------------------------------------------------
    const selector = root.querySelector("#donate-cause");
    const routeStatus = root.querySelector("#route-status");
    const selectedTrust = root.querySelector("#selected-trust");
    const selectedCause = root.querySelector("#selected-cause");
    const incompleteBanner = root.querySelector("#route-incomplete");
    const bankBlock = root.querySelector("#bank-block");
    const upiBlock = root.querySelector("#upi-block");
    const qrImage = root.querySelector("#upi-qr");
    const upiIdEl = root.querySelector("#upi-id");
    const openUpi = root.querySelector("#open-upi");
    const complianceLabel = root.querySelector("#compliance-label");
    const complianceNumber = root.querySelector("#compliance-number");
    const complianceLink = root.querySelector("#compliance-link");
    const copyStatus = root.querySelector("#copy-status");

    const form = root.querySelector("#receipt-form");
    const formCause = root.querySelector("#receipt-cause");
    const formTrust = root.querySelector("#receipt-trust");
    const panField = root.querySelector("#pan-field");
    const panInput = root.querySelector("#donor-pan");
    const no80gNote = root.querySelector("#no-80g-note");
    const receiptSubmit = root.querySelector("#receipt-submit");
    const receiptCopy = root.querySelector("#receipt-copy");
    const receiptStatus = root.querySelector("#receipt-status");
    const dateInput = root.querySelector("#donation-date");

    const fields = {
        accountName: root.querySelector("#account-name"),
        bankName: root.querySelector("#bank-name"),
        branch: root.querySelector("#bank-branch"),
        accountNumber: root.querySelector("#account-number"),
        ifsc: root.querySelector("#ifsc-code")
    };

    let data = null;

    // --- render one route --------------------------------------------------
    const render = () => {
        if (!data) return;
        const activity = data.activities.find((a) => a.id === selector.value);
        const profile = activity && data.profiles[activity.profile];
        if (!activity || !profile) return;

        const causeLabel = activity.label[lang];
        selectedCause.textContent = causeLabel;
        selectedTrust.textContent = profile.trust;
        formCause.value = causeLabel;
        formTrust.value = profile.trust;
        copyStatus.textContent = "";

        // incomplete-data banner
        incompleteBanner.hidden = profile.complete !== false;
        if (profile.complete === false) incompleteBanner.textContent = T.incompleteNote;
        routeStatus.hidden = profile.complete === false;

        // bank fields — mark any unresolved "TRUST TO SUPPLY" value
        const raw = {
            accountName: profile.bank.accountName,
            bankName: profile.bank.bankName,
            branch: profile.bank.branch,
            accountNumber: profile.bank.accountNumber,
            ifsc: profile.bank.ifsc
        };
        Object.entries(fields).forEach(([key, el]) => {
            if (!el) return;
            const val = raw[key];
            const pending = /TO SUPPLY|ENTER/i.test(val || "");
            el.textContent = pending ? T.toConfirm : val;
            el.classList.toggle("is-pending", pending);
            const btn = root.querySelector(`[data-copy-field="${key}"]`);
            if (btn) btn.hidden = pending;
        });

        // UPI
        const upiPending = /TO SUPPLY|ENTER/i.test(profile.upi.id || "");
        upiIdEl.textContent = upiPending ? T.toConfirm : profile.upi.id;
        upiIdEl.classList.toggle("is-pending", upiPending);
        const upiCopyBtn = root.querySelector('[data-copy-field="upi"]');
        if (upiCopyBtn) upiCopyBtn.hidden = upiPending;
        if (upiPending) {
            qrImage.hidden = true;
            openUpi.setAttribute("aria-disabled", "true");
            openUpi.removeAttribute("href");
        } else {
            qrImage.src = base + profile.upi.qrImage.replace(/^\//, "");
            qrImage.alt = `${profile.trust} — UPI QR`;
            qrImage.hidden = false;
            openUpi.removeAttribute("aria-disabled");
            openUpi.href = `upi://pay?pa=${encodeURIComponent(profile.upi.id)}&pn=${encodeURIComponent(profile.upi.payeeName)}&cu=INR`;
        }

        // compliance line — transparency page is language-specific
        complianceLabel.textContent = profile.compliance.label[lang];
        complianceNumber.textContent = profile.compliance.number;
        const docPath = profile.compliance.documentsUrl.replace(/^\//, "");
        complianceLink.href = base + (lang === "hi" ? "" : "en/") + docPath;

        // 80G vs 12A-only
        const has80G = profile.has80G === true;
        panField.hidden = !has80G;
        panInput.required = has80G;
        no80gNote.hidden = has80G;
        receiptSubmit.textContent = receiptSubmit.dataset[has80G ? "label80g" : "labelreceipt"];
    };

    // --- clipboard ------------------------------------------------------
    const copyText = async (text) => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            }
        } catch (_) { /* fall through */ }
        try {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.cssText = "position:fixed;opacity:0";
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand("copy");
            ta.remove();
            return ok;
        } catch (_) {
            return false;
        }
    };

    root.querySelectorAll("[data-copy-field]").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const el = btn.dataset.copyField === "upi" ? upiIdEl : fields[btn.dataset.copyField];
            if (!el) return;
            const ok = await copyText(el.textContent.trim());
            copyStatus.textContent = ok ? T.copied(btn.dataset.copyLabel || "") : T.copyFailed;
        });
    });

    // --- receipt email -------------------------------------------------
    const summary = () => {
        const v = new FormData(form);
        const has80G = !panField.hidden;
        const lines = [
            (has80G ? T.subject80G : T.subjectReceipt),
            "",
            T.mailHeader,
            "",
            `${T.mail.cause}: ${v.get("cause")}`,
            `${T.mail.trust}: ${v.get("trust")}`,
            `${T.mail.name}: ${v.get("name")}`,
            `${T.mail.email}: ${v.get("email")}`,
            `${T.mail.phone}: ${v.get("phone")}`
        ];
        if (has80G) lines.push(`${T.mail.pan}: ${v.get("pan")}`);
        lines.push(
            `${T.mail.address}: ${v.get("address")}`,
            `${T.mail.amount}: ${v.get("amount")}`,
            `${T.mail.date}: ${v.get("date")}`,
            `${T.mail.utr}: ${v.get("reference")}`
        );
        return lines.join("\n");
    };

    const check = () => {
        if (form.reportValidity()) return true;
        receiptStatus.textContent = T.fillRequired;
        return false;
    };

    if (panInput) {
        panInput.addEventListener("input", () => {
            panInput.value = panInput.value.toUpperCase().replace(/\s/g, "");
        });
    }
    if (dateInput) dateInput.max = new Date().toISOString().split("T")[0];

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!check()) return;
        const subject = panField.hidden ? T.subjectReceipt : T.subject80G;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary())}`;
        receiptStatus.textContent = T.opening;
    });

    receiptCopy.addEventListener("click", async () => {
        if (!check()) return;
        const ok = await copyText(summary());
        receiptStatus.textContent = ok ? T.copiedDetails : T.copyFailed;
    });

    // --- load ---------------------------------------------------------
    selector.disabled = true;
    routeStatus.hidden = false;
    (async () => {
        try {
            const res = await fetch(base + "data/donation-details.json", { cache: "no-store" });
            if (!res.ok) throw new Error(res.status);
            const json = await res.json();
            if (!Array.isArray(json.activities) || !json.profiles) throw new Error("incomplete");
            data = json;

            selector.innerHTML = "";
            data.activities.forEach((a) => {
                const opt = document.createElement("option");
                opt.value = a.id;
                opt.textContent = a.label[lang];
                selector.append(opt);
            });
            selector.disabled = false;
            selector.addEventListener("change", render);
            render();
        } catch (err) {
            console.error("donation details failed", err);
            routeStatus.hidden = false;
            routeStatus.textContent = T.failed;
        }
    })();
});
