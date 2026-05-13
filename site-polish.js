const body = document.body;
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.mobile-close');
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

closeBtn?.addEventListener('click', closeMenu);
backdrop?.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
