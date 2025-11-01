const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  const isOpen = nav.classList.contains("show");
  menuBtn.textContent = isOpen ? "✖" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
});
