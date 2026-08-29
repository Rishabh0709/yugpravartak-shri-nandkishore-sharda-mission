(function () {
    "use strict";

    const form = document.getElementById("contact-form");
    const copyButton = document.getElementById("copy-enquiry");
    const status = document.getElementById("contact-form-status");

    if (!form || !copyButton || !status) return;

    const isHindi = document.documentElement.lang === "hi";
    const copy = {
        heading: isHindi ? "सम्पर्क संदेश — युगप्रवर्तक श्री नन्दकिशोर शारदा मिशन" : "Contact enquiry — Yugpravartak Shri Nandkishore Sharda Mission",
        name: isHindi ? "नाम" : "Name",
        email: isHindi ? "ईमेल" : "Email",
        phone: isHindi ? "सम्पर्क नंबर" : "Contact number",
        phoneMissing: isHindi ? "नहीं दिया गया" : "Not provided",
        reason: isHindi ? "कारण" : "Reason",
        preference: isHindi ? "उत्तर का पसंदीदा माध्यम" : "Preferred response",
        defaultPreference: isHindi ? "ईमेल" : "Email",
        message: isHindi ? "संदेश:" : "Message:",
        subjectPrefix: isHindi ? "वेबसाइट सम्पर्क" : "Website enquiry",
        defaultReason: isHindi ? "सामान्य सम्पर्क" : "General enquiry",
        opening: isHindi ? "आपका ईमेल ऐप खुल रहा है। कृपया तैयार संदेश देखकर भेजें।" : "Your email application is opening. Please review the prepared message and send it when ready.",
        completeRequired: isHindi ? "कॉपी करने से पहले कृपया आवश्यक जानकारी भरें।" : "Please complete the required fields before copying the enquiry.",
        copied: isHindi ? "संदेश विवरण कॉपी हो गया। आप इसे ईमेल या किसी संदेश ऐप में पेस्ट कर सकते हैं।" : "Enquiry details copied. You can paste them into any email or messaging application.",
        copyFailed: isHindi ? "ब्राउज़र अपने-आप कॉपी नहीं कर सका। कृपया विवरण चुनकर मैन्युअली कॉपी करें।" : "Your browser could not copy automatically. Please select and copy the details manually."
    };

    function enquiryText() {
        const data = new FormData(form);
        return [
            copy.heading,
            "",
            `${copy.name}: ${data.get("name") || ""}`,
            `${copy.email}: ${data.get("email") || ""}`,
            `${copy.phone}: ${data.get("phone") || copy.phoneMissing}`,
            `${copy.reason}: ${data.get("reason") || ""}`,
            `${copy.preference}: ${data.get("preference") || copy.defaultPreference}`,
            "",
            copy.message,
            data.get("message") || ""
        ].join("\n");
    }

    async function copyText(textToCopy) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
            return;
        }
        const temporary = document.createElement("textarea");
        temporary.value = textToCopy;
        temporary.setAttribute("readonly", "");
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";
        document.body.appendChild(temporary);
        temporary.select();
        document.execCommand("copy");
        temporary.remove();
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const data = new FormData(form);
        const reason = data.get("reason") || copy.defaultReason;
        const subject = encodeURIComponent(`${copy.subjectPrefix}: ${reason}`);
        const body = encodeURIComponent(enquiryText());
        status.textContent = copy.opening;
        window.location.href = `mailto:kishoreggm@gmail.com?subject=${subject}&body=${body}`;
    });

    copyButton.addEventListener("click", async function () {
        if (!form.reportValidity()) {
            status.textContent = copy.completeRequired;
            return;
        }
        try {
            await copyText(enquiryText());
            status.textContent = copy.copied;
        } catch (error) {
            status.textContent = copy.copyFailed;
        }
    });
}());
