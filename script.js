const apiKey = "da193cfc9cab85cbc183f8c32150a532";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kathmandu";

async function getWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = data.main.temp;
    document.querySelector(".humidity").innerText = data.main.humidity;
    document.querySelector(".wind").innerText = data.wind.speed;
}

getWeather(); 