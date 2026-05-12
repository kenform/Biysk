(() => {
  const root = document.documentElement;

  function closeMenu() {
    if (!root.classList.contains('menu-open')) return;
    root.classList.remove('menu-open');
    root.classList.remove('lock');
    document.body.style.paddingRight = '';
  }

  document.addEventListener('click', (event) => {
    const isMenuOpen = root.classList.contains('menu-open');
    if (!isMenuOpen) return;

    const clickedMenu = event.target.closest('.menu__body');
    const clickedBurger = event.target.closest('.icon-menu');
    const clickedHeaderButton = event.target.closest('.header__actions');

    if (!clickedMenu && !clickedBurger && !clickedHeaderButton) {
      closeMenu();
      return;
    }

    if (event.target.closest('.menu__link')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
})();
