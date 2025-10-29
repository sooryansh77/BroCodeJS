const search = document.querySelector(".search");
const searchBox = document.querySelector(".searchBox");
const card = document.querySelector(".card");
const apiKey = "8240edf176518e24003b441dddb4bc9e";

search.addEventListener("submit", async event => {
    event.preventDefault();

    const city = searchBox.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city!");
    }

});

async function getWeatherData(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiURL);

    if(!response.ok){
        throw new Error("Couldn't fetch weather");
    }
    return response.json();
}

function displayWeatherInfo(data){
    console.log(data);
    
    const {
        name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]
    } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmojiDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmojiDisplay.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("city")
    tempDisplay.classList.add("temp")
    humidityDisplay.classList.add("humidity")
    descDisplay.classList.add("forecast")
    weatherEmojiDisplay.classList.add("weatherEmoji")

    card.append(cityDisplay, tempDisplay, humidityDisplay, descDisplay, weatherEmojiDisplay);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "☔";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >=700 && weatherId < 800):
            return "🌫️";
        case (weatherId == 800):
            return "☀️";
        case (weatherId > 800 && weatherId < 900):
            return "💭";
        default:
            return "🤷";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("weatherError");
    card.textContent = "";
    card.style.display = "flex";
    card.append(errorDisplay);
    
}