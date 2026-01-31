const spotlightContainer = document.querySelector("#spotlights");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const qualified = data.filter(
      member => member.membershipLevel === 2 || member.membershipLevel === 3
    );

    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <span class="level">${member.membershipLevel === 3 ? "Gold" : "Silver"} Member</span>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Spotlight error:", error);
  }
}

loadSpotlights();
