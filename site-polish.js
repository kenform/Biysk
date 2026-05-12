(() => {
  const ready = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  };

  ready(() => {
    const revealTargets = [
      '.page__intro',
      '.intro__body',
      '.page__tabs',
      '.tabs__main-title',
      '.tabs__content',
      '.page__city',
      '.city__content',
      '.digits-city__item',
      '.page__apartments',
      '.apartments__slide',
      '.page__contacts',
      '.contacts__body'
    ];

    const elements = [...document.querySelectorAll(revealTargets.join(','))]
      .filter((el, index, arr) => arr.indexOf(el) === index);

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    elements.forEach((el) => el.classList.add('js-reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    elements.forEach((el) => observer.observe(el));
  });
})();

