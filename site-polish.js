
(() => {
  const body = document.body;
  const toggle = document.querySelector(".menu-toggle, .burger");
  const menu = document.querySelector(".mobile-menu");
  const closeButtons = document.querySelectorAll(".mobile-close, [data-menu-close], [data-close-menu], .menu-overlay, .mobile-overlay");
  const menuLinks = document.querySelectorAll(".mobile-menu a[href^='#']");

  const openMenu = () => {
    body.classList.add("menu-open", "no-scroll");
    toggle?.setAttribute("aria-expanded", "true");
    menu?.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    body.classList.remove("menu-open", "no-scroll");
    toggle?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-hidden", "true");
  };

  toggle?.addEventListener("click", () => {
    body.classList.contains("menu-open") ? closeMenu() : openMenu();
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeMenu);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      closeMenu();

      const header = document.querySelector(".site-header");
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;

      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
})();
