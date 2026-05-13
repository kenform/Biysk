(() => {
  const body = document.body;
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const closeButton = document.querySelector(".mobile-close");
  const overlay = document.querySelector(".menu-overlay");
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  const openMenu = () => {
    body.classList.add("menu-open");
    toggle?.setAttribute("aria-expanded", "true");
    menu?.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-hidden", "true");
  };

  toggle?.addEventListener("click", () => {
    body.classList.contains("menu-open") ? closeMenu() : openMenu();
  });

  closeButton?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      closeMenu();

      const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
})();
