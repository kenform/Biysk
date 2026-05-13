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

/* Biysk finish layer: apartment modal */
(() => {
  const cards = Array.from(document.querySelectorAll('#apartments .apartment-card, #apartments article'));
  if (!cards.length) return;

  const modal = document.createElement('div');
  modal.className = 'apartment-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="apartment-modal__backdrop" data-modal-close></div>
    <div class="apartment-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="apartment-modal-title">
      <button class="apartment-modal__close" type="button" aria-label="Закрыть" data-modal-close>×</button>
      <div class="apartment-modal__inner">
        <div class="apartment-modal__image"><img alt=""></div>
        <div class="apartment-modal__content">
          <h2 class="apartment-modal__title" id="apartment-modal-title"></h2>
          <div class="apartment-modal__price"></div>
          <div class="apartment-modal__meta"></div>
          <p class="apartment-modal__text">
            Просторное помещение свободного назначения: рабочие зоны, переговорные, кухни или отдельные кабинеты.
          </p>
          <a class="btn apartment-modal__submit" href="#contacts" data-modal-close>
            <img src="img/svg/button-arrow.svg" alt="">
            <span>Оставить заявку</span>
          </a>
        </div>
        <form class="apartment-modal__form">
          <h3 class="apartment-modal__form-title">Арендовать эту квартиру</h3>
          <div class="apartment-modal__fields">
            <div class="apartment-modal__field">
              <label>Имя</label>
              <input type="text" autocomplete="name">
            </div>
            <div class="apartment-modal__field">
              <label>Телефон</label>
              <input type="tel" autocomplete="tel">
            </div>
            <button class="btn apartment-modal__submit" type="submit">
              <img src="img/svg/button-arrow.svg" alt="">
              <span>Отправить</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const image = modal.querySelector('.apartment-modal__image img');
  const title = modal.querySelector('.apartment-modal__title');
  const price = modal.querySelector('.apartment-modal__price');
  const meta = modal.querySelector('.apartment-modal__meta');

  const clean = (text) => (text || '').replace(/\s+/g, ' ').trim();

  const getByRegex = (text, regex, fallback) => {
    const found = clean(text).match(regex);
    return found ? found[0] : fallback;
  };

  const openModal = (card) => {
    const text = card.innerText || '';
    const img = card.querySelector('img');

    const number = getByRegex(text, /№\s?\d+/i, 'Квартира');
    const area = getByRegex(text, /\d+\s?м²/i, '');
    const floor = getByRegex(text, /\d+\s?этаж/i, '');
    const cost = getByRegex(text, /[\d\s]+₽\/мес/i, '');

    title.textContent = number;
    price.textContent = cost;
    meta.innerHTML = [area, floor].filter(Boolean).map((item) => `<span>${item}</span>`).join('');

    if (img) {
      image.src = img.currentSrc || img.src;
      image.alt = number;
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    modal.querySelector('.apartment-modal__close').focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  };

  cards.forEach((card) => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      openModal(card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openModal(card);
    });
  });

  modal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();
