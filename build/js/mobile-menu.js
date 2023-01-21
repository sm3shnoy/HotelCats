const mobileMenuButton = document.querySelector(".main-nav__toggle");
const mobileMenu = document.querySelector(".main-nav");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("main-nav--opened");
};

mobileMenuButton.addEventListener("click", toggleMobileMenu);

export { toggleMobileMenu };
