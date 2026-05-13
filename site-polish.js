(() => {
  const body = document.body;
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('.mobile-close');
  const backdrop = document.querySelector('.menu-backdrop');
  const menuLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');

  if (!burger || !menu) return;

  const openMenu = () => {
    body.classList.add('menu-open', 'no-scroll');
    burger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    body.classList.remove('menu-open', 'no-scroll');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });

  closeButton?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
})();
