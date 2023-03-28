function menuClick() {
  menuBtn.classList.toggle("opened-menu");
  mobileMenu.classList.toggle("show-menu");
}

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", menuClick);
