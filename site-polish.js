(() => {
  const body = document.body;
  const burger = document.querySelector('.burger');
  const closeMenuEls = document.querySelectorAll('[data-close-menu]');
  const menuLinks = document.querySelectorAll('.mobile-menu a');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-img');
  const modalTitle = document.querySelector('.modal-title');
  const modalPrice = document.querySelector('.modal-price');
  const modalSize = document.querySelector('.modal-size');
  const modalFloor = document.querySelector('.modal-floor');

  function closeMenu() {
    body.classList.remove('menu-open');
    burger?.setAttribute('aria-expanded', 'false');
  }

  burger?.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  closeMenuEls.forEach((el) => el.addEventListener('click', closeMenu));
  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.querySelectorAll('[data-modal-open]').forEach((card) => {
    card.addEventListener('click', () => {
      modalImg.src = card.dataset.img;
      modalImg.alt = card.dataset.title;
      modalTitle.textContent = card.dataset.title;
      modalPrice.textContent = card.dataset.price;
      modalSize.textContent = card.dataset.size;
      modalFloor.textContent = card.dataset.floor;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      body.classList.add('no-scroll');
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      body.classList.remove('no-scroll');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      body.classList.remove('no-scroll');
    }
  });
})();
