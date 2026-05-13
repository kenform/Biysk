(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const burger = document.querySelector('.burger');
  const closeButton = document.querySelector('.mobile-close');
  const backdrop = document.querySelector('.menu-backdrop');
  const menu = document.querySelector('.mobile-menu');

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 6);
  };

  const openMenu = () => {
    body.classList.add('menu-open');
    burger?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    body.classList.remove('menu-open');
    burger?.setAttribute('aria-expanded', 'false');
  };

  burger?.addEventListener('click', () => {
    body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });

  closeButton?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  menu?.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('scroll', setHeaderState, { passive: true });
  setHeaderState();
})();
