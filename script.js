const input = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".desc");

searchBtn.addEventListener("click",(e)=>{
    let city = input.value
    getWeather(city);
})

function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'5180bb9a1cbc7936ced8077c075578d2'}`)
    .then(response => response.json())
    .then(data=>{
        
        const iconCode = data.weather[0].icon;
        console.log(data)
        icon.innerHTML= `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon"/> `
        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML= `<h1>${weatherCity},${weatherCountry}</h1>`
        const temp = data.main.temp - 273.15;
        const tempData = temp.toFixed(2)
        temperature.innerHTML = `<h1>${tempData}°C</h1>`
        const desc = data.weather[0].description;
        description.innerHTML = `<h1>${desc}</h1>`
    });
}
//http://openweathermap.org/img/wn/50d.png
