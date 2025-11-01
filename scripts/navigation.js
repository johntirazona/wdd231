const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  const isOpen = nav.classList.contains("show");
  menuBtn.textContent = isOpen ? "✖" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// ✅ Add this part for WAYFINDING (active page highlight)
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("#mainNav a").forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});
