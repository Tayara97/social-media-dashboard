let toggle = document.querySelector(".toggle-switcher");
let container = document.querySelector(".container");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark");
});
