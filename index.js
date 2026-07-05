// aim is to f(fetch weather reult from openweathermap and update html with received information)
// when search-icon is clicked the function is called using the value of the input to get the specified information


// API CONST
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "39e582e7cb3c44e205661dae97cd8787";



// CREATING THE FUNCTION
async function getWeather(country) {
    const response = await fetch(apiUrl + country + `&appid=${apiKey}`);
    var error = document.querySelector(".error-msg")
    var weather = document.querySelector(".weather")
    if(response.status == 404){
        // ERROR STYLE EDIT
        error.style.display="block"
        weather.style.display="none"
    }else{
        var data = await response.json();

        // UPDATING WEATHER CONDITION IN HTML
        var temp = document.querySelector(".weather-summary h1");
        var country = document.querySelector(".weather-summary h3")
        var humidity = document.querySelector(".humidity p")
        var wind = document.querySelector(".wind p")
        temp.textContent = Math.round(data.main.temp)+"°";
        country.textContent = data.name;
        humidity.textContent = data.main.humidity + "%"
        wind.textContent = data.wind.speed + " km/h"

        // UPDATING WEATHER ICONS IN HTML
        var weatherCondition = data.weather[0].main;
        var weatherImage = document.querySelector(".weather-summary img");
        weatherImage.setAttribute("src","images/" + weatherCondition + ".png")

        //ERROR STYLE EDIT
        weather.style.display="block"
        error.style.display="none"
    }
    

}

var searchIcon = document.querySelector(".search-icon")
var searchInput = document.querySelector("input")

searchIcon.addEventListener("click",()=>{
    getWeather(searchInput.value); 
})
document.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        getWeather(searchInput.value)
    }
})
