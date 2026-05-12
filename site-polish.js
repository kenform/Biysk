(() => {
  const body = document.body;
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-overlay');

  if (!burger || !menu || !overlay) return;

  const links = [...menu.querySelectorAll('a[href]')];

  const openMenu = () => {
    body.classList.add('menu-open', 'no-scroll');
    burger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    body.classList.remove('menu-open', 'no-scroll');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    if (body.classList.contains('menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
})();