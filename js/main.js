import AOS from "aos";

AOS.init({
  disable: "mobile",
  once: true,
  duration: 500,
});

const menuButtons = document.querySelectorAll([
  "[mobile-menu]",
  ".mobile-menu__list__item",
]);
const mobileMenu = document.querySelector(".mobile-menu");
let showMenu = false;

const toggleMenu = () => {
  showMenu = !showMenu;
  if (showMenu) mobileMenu.style.transform = "translateX(-100%)";
  else mobileMenu.style.transform = "translateX(0)";
};

menuButtons.forEach((el) => el.addEventListener("click", toggleMenu));
