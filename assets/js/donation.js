"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const selector = document.querySelector("#donation-purpose");

    if (!selector) return;

    let routes = {};

    const availablePanel = document.querySelector("#available-route");
    const unavailablePanel = document.querySelector("#unavailable-route");
    const status = document.querySelector("#route-status");
    const trustName = document.querySelector("#selected-trust");
    const activityName = document.querySelector("#selected-activity");
    const unavailableTrust = document.querySelector("#unavailable-trust");
    const unavailableMessage = document.querySelector("#unavailable-message");
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
    const complianceLabel = document.querySelector("#compliance-label");
    const complianceNumber = document.querySelector("#compliance-number");
    const complianceLink = document.querySelector("#compliance-link");

    const fields = {
        accountName: document.querySelector("#account-name"),
        bankName: document.querySelector("#bank-name"),
        branch: document.querySelector("#bank-branch"),
        accountNumber: document.querySelector("#account-number"),
        ifsc: document.querySelector("#ifsc-code"),
        upi: document.querySelector("#upi-id")
    };

    const updateRoute = () => {
        const activity = routes.activities?.[selector.value];
        const profile = routes.paymentProfiles?.[activity?.paymentProfile];

        if (!activity || !profile) return;

        const route = {
            ...profile,
            activity: activity.label
        };

        trustName.textContent = route.trust;
        activityName.textContent = route.activity;
        certificateActivity.value = route.activity;
        certificateTrust.value = route.trust;
        copyStatus.textContent = "";

        if (route.available) {
            status.textContent = "Verified details available";
            availablePanel.hidden = false;
            unavailablePanel.hidden = true;

            const displayValues = {
                accountName: route.bank.accountName,
                bankName: route.bank.bankName,
                branch: route.bank.branch,
                accountNumber: route.bank.accountNumber,
                ifsc: route.bank.ifsc,
                upi: route.upi.id
            };

            Object.entries(fields).forEach(([key, element]) => {
                if (element) element.textContent = displayValues[key];
            });

            qrImage.src = route.upi.qrImage;
            qrImage.alt = `${route.upi.qrCodeName} for ${route.trust}`;
            qrImage.hidden = false;
            upiLink.href = `upi://pay?pa=${encodeURIComponent(route.upi.id)}&pn=${encodeURIComponent(route.upi.payeeName)}&cu=${encodeURIComponent(route.upi.currency || "INR")}`;
            complianceLabel.textContent = route.compliance.label;
            complianceNumber.textContent = route.compliance.approvalNumber;
            complianceLink.href = route.compliance.documentsUrl;
        } else {
            status.textContent = "Details to be added";
            availablePanel.hidden = true;
            unavailablePanel.hidden = false;
            unavailableTrust.textContent = route.trust;
            unavailableMessage.textContent = ` does not yet have verified bank and UPI details for ${route.activity}. Please contact the Mission before transferring funds.`;
            contactLink.href = `mailto:kishoreggm@gmail.com?subject=${encodeURIComponent(`Donation enquiry: ${route.activity}`)}`;
        }
    };

    const loadRoutes = async () => {
        selector.disabled = true;
        status.textContent = "Loading verified details";

        try {
            const response = await fetch("../assets/data/donation-details.json", { cache: "no-store" });

            if (!response.ok) throw new Error(`Donation data request failed with status ${response.status}`);

            const data = await response.json();

            if (!data.activities || !data.paymentProfiles) throw new Error("Donation data is incomplete");

            routes = data;
            selector.disabled = false;
            updateRoute();
        } catch (error) {
            console.error("Unable to load donation details", error);
            status.textContent = "Payment details unavailable";
            availablePanel.hidden = true;
            unavailablePanel.hidden = false;
            unavailableTrust.textContent = "Payment information could not be loaded.";
            unavailableMessage.textContent = " Please refresh the page or contact the Mission before transferring funds.";
            contactLink.href = "mailto:kishoreggm@gmail.com?subject=Donation%20payment%20details";
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
    loadRoutes();
});
