const body = document.body;
const burger = document.querySelector('.burger, .icon-menu, .menu__icon');
const backdrop = document.querySelector('[data-close-menu], .mobile-overlay, .menu-backdrop');
const menuLinks = document.querySelectorAll('.mobile-menu a, .menu__body a, .menu__item');

function closeMenu() {
  body.classList.remove('menu-open', 'no-scroll');
  document.documentElement.classList.remove('menu-open', 'lock');
  burger?.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  const isOpen = body.classList.toggle('menu-open');
  document.documentElement.classList.toggle('menu-open', isOpen);
  body.classList.toggle('no-scroll', isOpen);
  burger?.setAttribute('aria-expanded', String(isOpen));
}

burger?.addEventListener('click', (event) => {
  event.preventDefault();
  toggleMenu();
});

backdrop?.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelectorAll('[data-popup], .apartment-card, .apartments__slide').forEach((card) => {
  card.removeAttribute('data-popup');
  card.style.cursor = 'default';
  card.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
});

document.querySelectorAll('.popup, #popup, .popup_show').forEach((popup) => {
  popup.remove();
});
