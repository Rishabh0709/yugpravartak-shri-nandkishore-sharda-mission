"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const selector = document.querySelector("#donation-purpose");

    if (!selector) return;

    const routes = {
        "school-education": {
            available: true,
            trust: "Swami Vivekanand Students’ Welfare Charitable Trust",
            activity: "School education scholarships for girls",
            accountName: "Swami Vivekanand Students’ Welfare Charitable Trust",
            bankName: "ICICI Bank",
            branch: "Shastri Nagar Branch, Jodhpur",
            accountNumber: "683301420518",
            ifsc: "ICIC0006833",
            upi: "vivekanand@upi",
            qr: "assets/images/donation/swami-vivekanand-trust-upi-qr.png",
            upiLink: "upi://pay?pa=vivekanand@upi&pn=Swami%20Vivekanand%20Students%20Welfare%20Charitable%20Trust&cu=INR"
        },
        "higher-education": {
            available: false,
            trust: "Maa Shardamani Trust",
            activity: "Higher education for young women"
        },
        "boys-education": {
            available: false,
            trust: "Gyanyogi Shri Nandkishore Sharda Adhyatm Kendra",
            activity: "Education support for boys"
        },
        "ration-family": {
            available: false,
            trust: "Nandkishore Sharda Gyan Ganga Mission",
            activity: "Ration and family assistance"
        },
        "women-self-reliance": {
            available: false,
            trust: "Vatsalyamayi Maa Basanti Ji Manihar Sewing Centre",
            activity: "Women’s self-reliance and vocational training"
        },
        "spiritual-wellbeing": {
            available: false,
            trust: "Yugpravartak Shri Nandkishore Sharda Mission",
            activity: "Spiritual education and holistic wellbeing"
        }
    };

    const availablePanel = document.querySelector("#available-route");
    const unavailablePanel = document.querySelector("#unavailable-route");
    const status = document.querySelector("#route-status");
    const trustName = document.querySelector("#selected-trust");
    const activityName = document.querySelector("#selected-activity");
    const unavailableTrust = document.querySelector("#unavailable-trust");
    const unavailableActivity = document.querySelector("#unavailable-activity");
    const contactLink = document.querySelector("#donation-contact-link");
    const qrImage = document.querySelector("#upi-qr");
    const upiLink = document.querySelector("#open-upi");
    const copyStatus = document.querySelector("#copy-status");
    const certificateActivity = document.querySelector("#certificate-activity");
    const certificateTrust = document.querySelector("#certificate-trust");
    const certificateForm = document.querySelector("#certificate-form");
    const certificateStatus = document.querySelector("#certificate-status");
    const certificateCopyButton = document.querySelector("#copy-certificate-details");
    const panInput = document.querySelector("#donor-pan");
    const donationDate = document.querySelector("#donation-date");

    const fields = {
        accountName: document.querySelector("#account-name"),
        bankName: document.querySelector("#bank-name"),
        branch: document.querySelector("#bank-branch"),
        accountNumber: document.querySelector("#account-number"),
        ifsc: document.querySelector("#ifsc-code"),
        upi: document.querySelector("#upi-id")
    };

    const updateRoute = () => {
        const route = routes[selector.value];

        if (!route) return;

        trustName.textContent = route.trust;
        activityName.textContent = route.activity;
        certificateActivity.value = route.activity;
        certificateTrust.value = route.trust;
        copyStatus.textContent = "";

        if (route.available) {
            status.textContent = "Verified details available";
            availablePanel.hidden = false;
            unavailablePanel.hidden = true;

            Object.entries(fields).forEach(([key, element]) => {
                element.textContent = route[key];
            });

            qrImage.src = route.qr;
            qrImage.alt = `UPI QR code for ${route.trust}`;
            upiLink.href = route.upiLink;
        } else {
            status.textContent = "Details to be added";
            availablePanel.hidden = true;
            unavailablePanel.hidden = false;
            unavailableTrust.textContent = route.trust;
            unavailableActivity.textContent = route.activity;
            contactLink.href = `mailto:kishoreggm@gmail.com?subject=${encodeURIComponent(`Donation enquiry: ${route.activity}`)}`;
        }
    };

    const copyText = async (text) => {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }

        const temporary = document.createElement("textarea");
        temporary.value = text;
        temporary.setAttribute("readonly", "");
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";
        document.body.appendChild(temporary);
        temporary.select();
        document.execCommand("copy");
        temporary.remove();
    };

    document.querySelectorAll("[data-copy-field]").forEach((button) => {
        button.addEventListener("click", async () => {
            const field = fields[button.dataset.copyField];

            if (!field) return;

            try {
                await copyText(field.textContent.trim());
                copyStatus.textContent = `${button.dataset.copyLabel} copied.`;
            } catch {
                copyStatus.textContent = "Copying was not available. Please select the value manually.";
            }
        });
    });

    const certificateSummary = () => {
        const values = new FormData(certificateForm);

        return [
            "80G certificate request",
            "",
            `Donation purpose: ${values.get("activity")}`,
            `Receiving Trust: ${values.get("trust")}`,
            `Donor name: ${values.get("name")}`,
            `Contact number: ${values.get("phone")}`,
            `Email address: ${values.get("email")}`,
            `PAN: ${values.get("pan")}`,
            `Postal address: ${values.get("address")}`,
            `Donation amount: ₹${values.get("amount")}`,
            `Transfer date: ${values.get("date")}`,
            `UTR / transaction reference: ${values.get("reference")}`,
            "",
            "I confirm that these details are accurate and may be used for donation verification, receipt preparation and 80G documentation."
        ].join("\n");
    };

    const validateCertificateForm = () => {
        if (!certificateForm.reportValidity()) {
            certificateStatus.textContent = "Please complete all required fields before continuing.";
            return false;
        }

        return true;
    };

    panInput.addEventListener("input", () => {
        panInput.value = panInput.value.toUpperCase().replace(/\s/g, "");
    });

    donationDate.max = new Date().toISOString().split("T")[0];

    certificateForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validateCertificateForm()) return;

        const subject = `80G certificate request - ${certificateActivity.value}`;
        const mailto = `mailto:kishoreggm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(certificateSummary())}`;

        certificateStatus.textContent = "Your email application is opening. Please review the details and send the message to complete your request.";
        window.location.href = mailto;
    });

    certificateCopyButton.addEventListener("click", async () => {
        if (!validateCertificateForm()) return;

        try {
            await copyText(certificateSummary());
            certificateStatus.textContent = "Completed certificate details copied. You can paste them into an email to kishoreggm@gmail.com.";
        } catch {
            certificateStatus.textContent = "Copying was not available. Please use the email button instead.";
        }
    });

    selector.addEventListener("change", updateRoute);
    updateRoute();
});
