let lastY = window.scrollY;
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const goingDown = y > lastY;
  if (y > 80) {
    header.style.transform = goingDown ? 'translateY(-100%)' : 'translateY(0)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastY = y;
});

// ---------- Modal: Project Details ----------
(function () {
  const modal = document.getElementById('project-modal');
  const contentHost = modal.querySelector('.modal__content');
  let lastFocused;

  function openModal(html) {
    lastFocused = document.activeElement;
    contentHost.innerHTML = html;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.classList.add('open');

    // focus first focusable, fallback to close button
    const focusable = modal.querySelector(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (focusable || modal.querySelector('.modal__close')).focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    contentHost.innerHTML = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  // Open on Details click
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.details-btn');
    if (!btn) return;
    const card = btn.closest('.card');
    const tmpl = card.querySelector('.details-template');
    if (tmpl) openModal(tmpl.innerHTML);
  });

  // Close: backdrop click or X button
  modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();

// ---------- Experience: expand/collapse bullets ----------
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.exp-details-btn');
  if (!btn) return;

  const controlsId = btn.getAttribute('aria-controls');
  const extra = document.getElementById(controlsId);
  const card = btn.closest('.exp-card');

  const willOpen = extra.hasAttribute('hidden'); // currently closed -> will open
  if (willOpen) {
    extra.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = 'Hide details';
    card?.classList.add('is-open');
  } else {
    extra.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Details';
    card?.classList.remove('is-open');
  }
});
