(() => {
  const onReady = (callback) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
      return;
    }

    callback();
  };

  onReady(() => {
    const root = document.documentElement;
    const burger = document.querySelector('.icon-menu');
    const menu = document.querySelector('.menu__body');

    if (burger && menu) {
      burger.setAttribute('aria-label', 'Открыть меню');
      burger.setAttribute('aria-expanded', 'false');

      burger.addEventListener('click', () => {
        const nextState = root.classList.contains('biysk-menu-open') === false;
        root.classList.toggle('biysk-menu-open', nextState);
        burger.setAttribute('aria-expanded', String(nextState));
      });

      menu.querySelectorAll('.menu__item, a').forEach((item) => {
        item.addEventListener('click', () => {
          root.classList.remove('biysk-menu-open');
          burger.setAttribute('aria-expanded', 'false');
        });
      });
    }

    document.querySelectorAll('.apartments__slide.swiper-slide-duplicate').forEach((slide) => {
      slide.remove();
    });

    const revealSelectors = [
      '.intro__title',
      '.intro__image',
      '.intro__content',
      '.tabs__main-title',
      '.tabs__navigation',
      '.tabs__body',
      '.city__title',
      '.city__description',
      '.city__info',
      '.apartments__title',
      '.apartments__slider',
      '.contacts__title',
      '.contacts__address',
      '.contacts__form'
    ];

    const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(',')));

    revealItems.forEach((item) => {
      item.classList.add('js-reveal');
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );

      revealItems.forEach((item) => {
        observer.observe(item);
      });

      return;
    }

    revealItems.forEach((item) => {
      item.classList.add('is-visible');
    });
  });
})();
