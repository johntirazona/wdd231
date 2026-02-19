import { getPlaces } from "./fetch.js";

const container = document.querySelector("#cards");

getPlaces().then(data => {
  if (!data) return;

  // Check if we're on the homepage
  const isHome = document.body.classList.contains("home");

  // If homepage, pick 3 random places; otherwise, show all
  const placesToShow = isHome ? getRandomPlaces(data, 3) : data;

  placesToShow.forEach(place => {
    const card = document.createElement("article");

    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" loading="lazy">
      <h3>${place.name}</h3>
      <p>${place.location}</p>
      <p>${place.type}</p>
      <button data-name="${place.name}">Details</button>
    `;

    container.appendChild(card);
  });
});

// Shuffle helper function
function getRandomPlaces(data, count = 3) {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Menu toggle
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("header nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});