const form = document.querySelector(".form");
const cityInput = document.getElementById("city-input");
const cityName = document.querySelector(".city-name");
const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

const API_KEY = "799edad109b009ce1a9a4a6bc519ccf1";

async function getWeatheMap() {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Por favor, ingresa una ciudad");
    return;
  }

  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const res = await fetch(URL);

    const data = await res.json();
    console.log(data);

    const celsius = Math.round(data.main.temp - 273.15);

    const urlIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    cityName.innerHTML = `${data.name}, ${data.sys.country}`;
    temperature.innerHTML = `${celsius}°C`;
    description.innerHTML = `${data.weather[0].description}`;
    icon.setAttribute("src", urlIcon);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getWeatheMap();
});
