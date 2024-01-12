// Openweather API
const apiKey = "25de973db99ffa570f16d255733cb67f";
const apiNewUrl =
  "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";

// Select HTML elements
const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".fa-solid");
const weatherImg = document.querySelector(".current-weather");
const forecastImg = document.querySelector(".forecast-img");

// Async function for fetching weather data
async function checkWeather(city) {
  const response = await fetch(apiNewUrl + city + `&appid=${apiKey}`);

  var data = await response.json();
  console.log(data);

  // Select elements to change in current weather
  document.getElementById("temp").innerHTML =
    Math.round(data.list[4].main.temp) + "°C";
  document.getElementById("city").innerHTML = data.city.name;
  document.getElementById("wind").innerHTML = data.list[4].main.humidity + "%";
  document.getElementById("hum").innerHTML = data.list[4].wind.speed + "km/h";
  document.getElementById("feel").innerHTML = data.list[0].main.feels_like + "%";
  document.getElementById("press").innerHTML = data.list[0].main.pressure + "%";

  if (data.list[4].weather[0].main === "Clouds") {
    weatherImg.src = "Images/clouds.png";
  } else if (data.list[4].weather[0].main === "Clear") {
    weatherImg.src = "images/clear.png";
  } else if (data.list[4].weather[0].main === "Rain") {
    weatherImg.src = "images/rain.png";
  } else if (data.list[4].weather[0].main === "Drizzle") {
    weatherImg.src = "images/drizzle.png";
  } else if (data.list[4].weather[0].main === "Mist") {
    weatherImg.src = "images/mist.png";
  }
}

searchIcon.addEventListener("click", () => {
  checkWeather(searchBar.value);
});
