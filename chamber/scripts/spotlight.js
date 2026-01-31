const spotlightContainer = document.querySelector("#spotlight-container");
const dataURL = "./data/members.json";

async function loadSpotlights() {
  try {
    const response = await fetch(dataURL);
    if (!response.ok) throw new Error("Failed to load members");

    const data = await response.json();

    const qualifiedMembers = data.members.filter(
      member => member.membership === 2 || member.membership === 3
    );

    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Membership:</strong> ${member.membership === 3 ? "Gold" : "Silver"}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Spotlight Error:", error);
    spotlightContainer.innerHTML = "<p>Unable to load spotlights.</p>";
  }
}

loadSpotlights();
