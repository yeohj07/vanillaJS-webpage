const API_KEY = "df232d07a4ba41702dc7523b39c0469b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            city.innerText = data.name;
            weather.innerText = `Weather : ${data.weather[0].main} | Temperature(℃), City : ${data.main.temp}`;
        });
}

function onGeoError() {
    const weather = document.querySelector("#weather span:first-child");
    weather.innerText = "Weather location information not found";
    weather.style.font = "20px arial, sans-serif";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
