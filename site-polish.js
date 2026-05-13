(() => {
  const body = document.body;
  const header = document.querySelector(".b-header");
  const burger = document.querySelector(".b-burger");
  const closeButton = document.querySelector(".b-mobile-close");
  const backdrop = document.querySelector(".b-menu-backdrop");

  const closeMenu = () => {
    body.classList.remove("b-menu-open");
    window.setTimeout(() => body.classList.remove("b-menu-animate"), 420);
    burger?.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    body.classList.add("b-menu-open");
    body.classList.add("b-menu-animate");
    burger?.setAttribute("aria-expanded", "true");
  };

  burger?.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.contains("b-menu-open") ? closeMenu() : openMenu();
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
      }, 40);
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => event.preventDefault());
  });
})();
