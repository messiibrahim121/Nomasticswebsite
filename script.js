const togglebars = document.querySelector(".toggle-bars")
const nav = document.querySelector(".nav")

togglebars.addEventListener("click", () => {
    nav.classList.toggle("show");
  });