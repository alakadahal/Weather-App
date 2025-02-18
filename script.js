const apiKey = "da193cfc9cab85cbc183f8c32150a532";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.wather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.wather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.wather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.wather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }





}
searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});

