
"use strict";

// Navigation mobile
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("#main-navigation");
const menuLinks = document.querySelectorAll("#main-navigation a");
const header = document.querySelector("#header");

function toggleMobileMenu() {
  const isOpen = hamburger.classList.toggle("active");

  mobileMenu.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );
}

function closeMobileMenu() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Ouvrir le menu");
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", toggleMobileMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && hamburger.classList.contains("active")) {
      closeMobileMenu();
      hamburger.focus();
    }
  });
}

// Apparence du header au défilement
if (header) {
  function updateHeaderOnScroll() {
    header.classList.toggle("scrolled", window.scrollY > 100);
  }

  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();
}

// Copyright dynamique
const copyright = document.querySelector("#copyright");

if (copyright) {
  copyright.textContent = `© ${new Date().getFullYear()} David Le Gouellec`;
}
