function menuClick() {
  menuBtn.classList.toggle("opened-menu");
}

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", menuClick);
