import { getPlaces } from "./fetch.js";

const container = document.querySelector("#cards");

getPlaces().then(data => {

data.forEach(place => {

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

const visits = Number(localStorage.getItem("visits")) || 0;
localStorage.setItem("visits", visits + 1);

const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("open");
});