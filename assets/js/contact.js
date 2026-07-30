(function () {
    "use strict";

    const form = document.getElementById("contact-form");
    const copyButton = document.getElementById("copy-enquiry");
    const status = document.getElementById("contact-form-status");

    if (!form || !copyButton || !status) return;

    function enquiryText() {
        const data = new FormData(form);
        return [
            "Contact enquiry — Yugpravartak Shri Nandkishore Sharda Mission",
            "",
            `Name: ${data.get("name") || ""}`,
            `Email: ${data.get("email") || ""}`,
            `Contact number: ${data.get("phone") || "Not provided"}`,
            `Reason: ${data.get("reason") || ""}`,
            `Preferred response: ${data.get("preference") || "Email"}`,
            "",
            "Message:",
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
        const reason = data.get("reason") || "General enquiry";
        const subject = encodeURIComponent(`Website enquiry: ${reason}`);
        const body = encodeURIComponent(enquiryText());
        status.textContent = "Your email application is opening. Please review the prepared message and send it when ready.";
        window.location.href = `mailto:kishoreggm@gmail.com?subject=${subject}&body=${body}`;
    });

    copyButton.addEventListener("click", async function () {
        if (!form.reportValidity()) {
            status.textContent = "Please complete the required fields before copying the enquiry.";
            return;
        }
        try {
            await copyText(enquiryText());
            status.textContent = "Enquiry details copied. You can paste them into any email or messaging application.";
        } catch (error) {
            status.textContent = "Your browser could not copy automatically. Please select and copy the details manually.";
        }
    });
}());
