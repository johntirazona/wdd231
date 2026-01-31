const apiKey = "7cf84953846bae342394573603fc7a36";
const city = "Cebu City";
const units = "metric";

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const forecastContainer = document.querySelector("#forecast");

const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

async function getWeather() {
  try {

    const response = await fetch(currentURL);
    if (!response.ok) throw new Error("Weather data not available");
    const data = await response.json();

    currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDesc.textContent = data.weather[0].description;

    const forecastResponse = await fetch(forecastURL);
    if (!forecastResponse.ok) throw new Error("Forecast data not available");
    const forecastData = await forecastResponse.json();

    displayForecast(forecastData.list);

  } catch (error) {
    console.error(error);
    currentTemp.textContent = "N/A";
    weatherDesc.textContent = "Unable to load weather data";
  }
}

function displayForecast(list) {
  forecastContainer.innerHTML = "";

  const filtered = list.filter(item => item.dt_txt.includes("12:00:00"));

  filtered.slice(0, 3).forEach(day => {
    const date = new Date(day.dt_txt);
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });

    const temp = Math.round(day.main.temp);

    forecastContainer.innerHTML += `
      <div class="forecast-day">
        <span>${weekday}</span>
        <span>${temp}°C</span>
      </div>
    `;
  });
}

getWeather();
