(() => {
  const body = document.body;
  const header = document.querySelector(".site-header");
  const burger = document.querySelector(".burger");
  const closeButton = document.querySelector(".mobile-close");
  const backdrop = document.querySelector(".menu-backdrop");
  const menu = document.querySelector(".mobile-menu");

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  const openMenu = () => {
    if (!menu) return;
    body.classList.add("menu-open", "no-scroll");
    burger?.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    body.classList.remove("menu-open", "no-scroll");
    burger?.setAttribute("aria-expanded", "false");
  };

  burger?.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.contains("menu-open") ? closeMenu() : openMenu();
  });

  closeButton?.addEventListener("click", closeMenu);
  backdrop?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      closeMenu();

      const headerHeight = header?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

      window.setTimeout(() => {
        window.scrollTo({ top, behavior: "smooth" });
        history.pushState(null, "", hash);
      }, 60);
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => event.preventDefault());
  });

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
})();
