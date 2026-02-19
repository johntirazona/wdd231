const modal = document.querySelector("#modal");
const info = document.querySelector("#modal-info");

document.addEventListener("click", e => {
if (e.target.tagName === "BUTTON") {
modal.classList.remove("hidden");
info.textContent = `More information about ${e.target.dataset.name}`;
}
});

document.querySelector("#close").addEventListener("click", () => {
modal.classList.add("hidden");
});