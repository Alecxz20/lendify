const button = document.querySelector("i");
const links = document.querySelector(".nav-links");

button.addEventListener("click", function () {
  links.classList.toggle("hide-unhide");
});
