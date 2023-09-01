"use strict";

const scrollToTop = document.querySelector(".btn-scroll-top");

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
