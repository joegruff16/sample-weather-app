

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "03c9d5245e41ca3d90708da632392882";

// Added an event listener to activate the get weather button when submitting the form
weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    // Added if statement to determine when the error message would be displayed
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }

    }
    else {
        displayError("Please enter a city");
    }

});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}& appid=${apiKey}`;
    const response = await fetch(apiUrl);
    console.log(response);
}


function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);



}