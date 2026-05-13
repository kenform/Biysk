const body = document.body;
const burger = document.querySelector('.burger');
const closeButton = document.querySelector('.mobile-close');
const backdrop = document.querySelector('[data-close-menu]');
const menuLinks = document.querySelectorAll('.mobile-menu a');

function openMenu() {
  body.classList.add('menu-open', 'no-scroll');
  burger?.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  body.classList.remove('menu-open', 'no-scroll');
  burger?.setAttribute('aria-expanded', 'false');
}

burger?.addEventListener('click', () => {
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

document.querySelectorAll('[data-popup], .apartments__slide, .apartment-card').forEach((card) => {
  card.removeAttribute('data-popup');
  card.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
});

document.querySelectorAll('.popup, .popup_show, [id="popup"]').forEach((popup) => {
  popup.remove();
});
