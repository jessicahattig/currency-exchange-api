import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency';


// Get references to DOM elements
const amountInput = document.querySelector('#amount');
const currencySelect = document.querySelector('#currency');
const convertButton = document.querySelector('#convert');
const resultDiv = document.querySelector('#result');

// Event listener for the convert button
convertButton.addEventListener('click', async () => {
  const amount = parseFloat(amountInput.value);
  const currency = currencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = 'Please enter a valid amount.';
    return;
  }

  try {
    const exchangeRateData = await CurrencyConverter.getExchangeRate();
    const targetRate = exchangeRateData.conversion_rate;
    const convertedAmount = (amount * targetRate).toFixed(2);

    resultDiv.textContent = `${amount} USD is approximately ${convertedAmount} ${currency}`;
  } catch (error) {
    resultDiv.textContent = 'An error occurred while fetching the exchange rate.';
  }
});


// // Business Logic

// function getWeather(searchValue) {
//   let promise = WeatherService.getWeather(searchValue);
//   promise.then(function (data) {
//     const response = data.response;
//     const searchValue = data.searchValue;
//     const lat = response.coord.lat;
//     const lon = response.coord.lon;
//     printElements(response, searchValue, lat, lon);
//     getAirPollution(lat, lon);
//   }, function (response) {
//     printError(this, response, searchValue);
//   });
// }

// function getAirPollution(lat, lon) {
//   let promise = WeatherService.getAirPollution(lat, lon) 
//     promise.then(function(response) {
//       printAirPollution(response);
//     }, function(response) {
//       printError(response)
//     });
// }


// // UI Logic

// function printError(request, apiResponse, searchValue) {
//   console.log(apiResponse[1])
//   document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${searchValue}: ${apiResponse[1].cod} ${apiResponse.message}: ${apiResponse[1].message}`;
// }

// function printElements(apiResponse, searchValue, lat, lon) {
//   const fahrenheitTemp = Math.round(100 * ((apiResponse.main.temp - 273.15) * 1.8 + 32) / 100);
//   const minTemp = Math.round(100 * ((apiResponse.main.temp_min - 273.15) * 1.8 + 32) / 100);
//   const maxTemp = Math.round(100 * ((apiResponse.main.temp_max - 273.15) * 1.8 + 32) / 100);
//   const feelsLikeTemp = Math.round(100 * ((apiResponse.main.feels_like - 273.15) * 1.8 + 32) / 100);
//   document.querySelector('#showResponse').innerText = `The humidity in ${searchValue} is ${apiResponse.main.humidity}%.
//   The temperature in Kelvins is ${apiResponse.main.temp} degrees.
//   The temperature in Fahrenheit is ${fahrenheitTemp} degrees.
//   The minimum temperature in Fahrenheit is ${minTemp} degrees.
//   The maximum temperature in Fahrenheit is ${maxTemp} degrees.
//   The weather 'feels' like ${feelsLikeTemp} degrees Fahrenheit.
//   The current weather is ${apiResponse.weather[0].description}.
//   The wind speed is ${apiResponse.wind.speed} mph.`
//   getAirPollution(lat, lon);
// }

// function printAirPollution(airPollutionResponse) {
//   const airQualityIndex = airPollutionResponse.list[0].main.aqi;
//   document.querySelector('#showResponse2').innerText = `The air quality index is ${airQualityIndex} (Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor)`;
// }

// function handleFormSubmission(event) {
//   event.preventDefault();
//   const city = document.querySelector('#location').value;
//   document.querySelector('#location').value = null;
//   getWeather(city);
// }

// window.addEventListener("load", function () {
//   document.querySelector('form').addEventListener("submit", handleFormSubmission);
// });