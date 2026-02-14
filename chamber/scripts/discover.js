import { places } from "../data/discover.mjs";

const grid = document.querySelector("#discover-grid");

/* ---------- BUILD CARDS ---------- */
places.forEach(place => {
const card = document.createElement("article");

card.innerHTML = `
<h2>${place.name}</h2>
<figure>
  <img src="${place.image}" alt="${place.name}" loading="lazy">
</figure>
<address>${place.address}</address>
<p>${place.description}</p>
<button>Learn More</button>
`;

grid.appendChild(card);
});

/* ---------- LAST VISIT MESSAGE ---------- */
const messageBox = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
messageBox.textContent = "Welcome! Let us know if you have any questions.";
}
else {
const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

if (days < 1) {
messageBox.textContent = "Back so soon! Awesome!";
}
else if (days === 1) {
messageBox.textContent = "You last visited 1 day ago.";
}
else {
messageBox.textContent = `You last visited ${days} days ago.`;
}
}

localStorage.setItem("lastVisit", now);