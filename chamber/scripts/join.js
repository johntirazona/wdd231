// timestamp
document.getElementById("timestamp").value = new Date().toLocaleString();

// modal handling
document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.modal).showModal();
  });
});