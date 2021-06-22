const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
}
