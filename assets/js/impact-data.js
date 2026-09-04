(function () {
    const language = document.documentElement.lang === "hi" ? "hi" : "en";
    const assetRoot = "";

    document.addEventListener("DOMContentLoaded", initImpactData);

    async function initImpactData() {
        const summaryTarget = document.querySelector("[data-impact-summary]");
        const recordsTarget = document.querySelector("[data-impact-records]");
        if (!summaryTarget && !recordsTarget) return;

        try {
            const response = await fetch(`data/impact-data.json`);
            if (!response.ok) throw new Error(`Unable to load impact data: ${response.status}`);
            const data = await response.json();
            if (summaryTarget) renderSummary(summaryTarget, data);
            if (recordsTarget) renderRecords(recordsTarget, data);
        } catch (error) {
            const message = language === "hi" ? "सेवा-प्रभाव के आँकड़े अभी लोड नहीं हो सके।" : "Impact figures could not be loaded right now.";
            if (summaryTarget) summaryTarget.innerHTML = `<div class="impact-summary-card"><p>${message}</p></div>`;
            if (recordsTarget) recordsTarget.innerHTML = `<div class="impact-definition"><div class="impact-definition-mark" aria-hidden="true">i</div><div><strong>${message}</strong><p>${escapeHtml(error.message)}</p></div></div>`;
        }
    }

    function renderSummary(target, data) {
        target.innerHTML = data.streams.map(stream => {
            const content = stream.content[language];
            return `
                <article class="impact-summary-card">
                    <div class="impact-value">${formatValue(stream.summaryValue)}</div>
                    <h3>${content.title}</h3>
                    <p>${content.summary}</p>
                    <a href="#${stream.id}">${data.labels[language].summaryLink} <span aria-hidden="true">→</span></a>
                </article>`;
        }).join("");
    }

    function renderRecords(target, data) {
        target.innerHTML = data.streams.map(renderRecord).join("");
    }

    function renderRecord(stream) {
        const content = stream.content[language];
        const chartClass = stream.singleChart
            ? "impact-chart-grid impact-chart-grid--single"
            : (stream.charts.length === 1 ? "impact-chart-grid impact-chart-grid--solo" : "impact-chart-grid");
        const extraClass = stream.singleChart ? " impact-record--ration" : "";
        return `
            <article class="impact-record${extraClass}" id="${stream.id}">
                <header class="impact-record-header">
                    <div>
                        <span class="activity-eyebrow">${content.eyebrow}</span>
                        <h3>${content.title}</h3>
                        <p>${content.description}</p>
                    </div>
                    <div class="impact-record-kpis" aria-label="${escapeAttr(content.title)} headline figures">
                        ${stream.kpis.map(renderKpi).join("")}
                    </div>
                </header>
                <div class="${chartClass}">
                    ${stream.charts.map(renderChart).join("")}
                    ${stream.singleChart ? renderContinuity(content) : ""}
                </div>
                ${content.highlight ? `<p class="impact-record-highlight">${content.highlight}</p>` : ""}
                <footer class="impact-record-footer"><p>${content.footer}</p><a href="${content.linkHref}">${content.linkText} <span aria-hidden="true">→</span></a></footer>
            </article>`;
    }

    function renderKpi(kpi) {
        return `<div><strong>${formatValue(kpi.value)}</strong><span>${kpi[language]}</span></div>`;
    }

    function renderChart(chart) {
        const content = chart.content[language];
        return `
            <figure class="impact-chart-card">
                <figcaption><strong>${content.title}</strong><span>${content.subtitle}</span></figcaption>
                <div class="impact-chart-scroll" tabindex="0" role="region" aria-label="${escapeAttr(content.aria)}">
                    <ol class="impact-bars ${chart.barsClass}" aria-label="${escapeAttr(content.aria)}">
                        ${chart.points.map(renderPoint).join("")}
                    </ol>
                </div>
            </figure>`;
    }

    function renderPoint(point) {
        const finalClass = point.final ? " class=\"is-final\"" : "";
        return `<li${finalClass} style="--bar:${point.bar}%" aria-label="${escapeAttr(point.period + ': ' + point.value)}"><b>${point.value}</b><i></i><span>${point.period}</span></li>`;
    }

    function renderContinuity(content) {
        return `
            <div class="impact-continuity-note">
                <span>${content.continuityTitle}</span>
                <p>${content.continuityText}</p>
            </div>`;
    }


    function formatValue(value) {
        return typeof value === "string" ? value : value[language];
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"]/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;"
        }[character]));
    }

    function escapeAttr(value) {
        return escapeHtml(value).replace(/'/g, "&#39;");
    }
}());
