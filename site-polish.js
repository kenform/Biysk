(() => {
  const root = document.documentElement;

  function closeMenu() {
    if (!root.classList.contains('menu-open')) return;
    root.classList.remove('menu-open');
    root.classList.remove('lock');
    document.body.style.paddingRight = '';
  }

  document.addEventListener('click', (event) => {
    if (!root.classList.contains('menu-open')) return;

    const isBurger = event.target.closest('.icon-menu');
    const isMenu = event.target.closest('.menu__body');
    const isMenuLink = event.target.closest('.menu__link');

    if (isMenuLink || (!isBurger && !isMenu)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
})();
