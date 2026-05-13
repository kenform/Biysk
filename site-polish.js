(() => {
  const body = document.body;
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-close");
  const backdrop = document.querySelector(".menu-backdrop");
  const links = document.querySelectorAll(".mobile-menu a[href^='#'], .desktop-nav a[href^='#'], .header-btn[href^='#'], .btn[href^='#']");

  const openMenu = () => {
    body.classList.add("menu-open", "no-scroll");
    burger?.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    body.classList.remove("menu-open", "no-scroll");
    burger?.setAttribute("aria-expanded", "false");
  };

  burger?.addEventListener("click", () => {
    body.classList.contains("menu-open") ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener("click", closeMenu);
  backdrop?.addEventListener("click", closeMenu);

  menu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
