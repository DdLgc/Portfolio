// navigation mobile 

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("#main-navigation");
const menuLinks = document.querySelector("#main-navigation a");
const header = document.querySelector("#header");

function toggleMobileMenu() {
  const isOpen = hamburger.classList.toggle("active");

  mobileMenu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", isOpen);
}


function closeMobileMenu(){
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  hzmburger.setAttribute("aria-expanded", isOpen);
}

hamburger.addEventListener("click",toggleMobileMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
  header.classList.toggle("scrolled", window.scrollY >100);
});

const copyright = document.querySelector("#copyright");

if (copyright) {
  const currentYear = new Date().getFullYear();

  copyright.textContent = `© ${currentYear} David Le Gouellec`;
}