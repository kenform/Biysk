const body = document.body;
const burger = document.querySelector('.burger, .icon-menu, .menu__icon');
const closeButton = document.querySelector('.mobile-close');
const backdrop = document.querySelector('.menu-backdrop, [data-close-menu]');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

function setMenu(open) {
  body.classList.toggle('menu-open', open);
  document.documentElement.classList.toggle('menu-open', open);
  burger?.setAttribute('aria-expanded', String(open));
}

function openMenu() {
  setMenu(true);
}

function closeMenu() {
  setMenu(false);
}

burger?.addEventListener('click', (event) => {
  event.preventDefault();
  body.classList.contains('menu-open') ? closeMenu() : openMenu();
});

closeButton?.addEventListener('click', closeMenu);
backdrop?.addEventListener('click', closeMenu);

mobileLinks.forEach((link) => {
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
