const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

//hamburger
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
}

// adding click events
var els = document.querySelectorAll("li");

[].forEach.call(els, function (el) {
  el.addEventListener("click", function () {
    [].forEach.call(els, function (clk) {
      clk.classList.remove("active");
    });
    el.classList.add("active");
  });
});
