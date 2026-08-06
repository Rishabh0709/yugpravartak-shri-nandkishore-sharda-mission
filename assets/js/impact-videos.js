(() => {
    const dialog = document.querySelector("#impact-video-dialog");
    const iframe = dialog?.querySelector("iframe");
    const title = dialog?.querySelector(".video-dialog-title");
    const closeButton = dialog?.querySelector(".video-dialog-close");
    const launchers = document.querySelectorAll(".video-launch[data-video-id]");

    if (!dialog || !iframe || !title || !closeButton || !launchers.length) return;

    const stopVideo = () => {
        iframe.src = "about:blank";
        iframe.title = "";
    };

    const closeDialog = () => {
        if (dialog.open) dialog.close();
        stopVideo();
    };

    launchers.forEach((launcher) => {
        launcher.addEventListener("click", () => {
            const videoId = launcher.dataset.videoId;
            const videoTitle = launcher.dataset.videoTitle || "Video testimonial";

            if (!videoId) return;

            title.textContent = videoTitle;
            iframe.title = videoTitle;
            iframe.src = `https://drive.google.com/file/d/${encodeURIComponent(videoId)}/preview`;

            if (typeof dialog.showModal === "function") {
                dialog.showModal();
            } else {
                window.open(iframe.src, "_blank", "noopener,noreferrer");
                stopVideo();
            }
        });
    });

    closeButton.addEventListener("click", closeDialog);
    dialog.addEventListener("close", stopVideo);
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog();
    });
})();
