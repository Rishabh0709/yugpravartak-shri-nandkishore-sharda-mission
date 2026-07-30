(() => {
  const track = document.querySelector('[data-home-gallery]');
  const previous = document.querySelector('[data-gallery-prev]');
  const next = document.querySelector('[data-gallery-next]');

  if (!track || !previous || !next) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tolerance = 4;

  track.querySelectorAll('.home-gallery-card img').forEach((photo) => {
    const syncProportions = () => {
      if (!photo.naturalWidth || !photo.naturalHeight) return;
      photo.closest('.home-gallery-card')?.style.setProperty(
        '--photo-ratio',
        String(photo.naturalWidth / photo.naturalHeight)
      );
    };

    if (photo.complete) syncProportions();
    else photo.addEventListener('load', syncProportions, { once: true });
  });

  const updateControls = () => {
    const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
    previous.disabled = track.scrollLeft <= tolerance;
    next.disabled = track.scrollLeft >= maximum - tolerance;
  };

  const move = (direction) => {
    const distance = Math.min(track.clientWidth * 0.82, 640);
    track.scrollBy({ left: direction * distance, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });

  let scheduled = false;
  track.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateControls();
      scheduled = false;
    });
  }, { passive: true });

  window.addEventListener('resize', updateControls);
  updateControls();
})();
