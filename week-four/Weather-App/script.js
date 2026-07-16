// ========================================
// Weather App - JavaScript
// ========================================

// API Key from OpenWeatherMap
const API_KEY = '2f02facba7e322bc3a4d3a53d06765ce';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const resultsDiv = document.getElementById('weather-results');
const locationBtn = document.getElementById('location-btn');

// ----------------------------------------
// Event Listener - Form Submit
// ----------------------------------------
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();
    if (!city) {
        showError('Please enter a city name.');
        return;
    }

    await loadWeatherByCity(city);
});

// ----------------------------------------
// Event Listener - Use My Location
// ----------------------------------------
locationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        showError('Geolocation is not supported by your browser.');
        return;
    }

    showLoading();
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            await loadWeatherByCoords(latitude, longitude);
        },
        () => {
            showError('Unable to get your location. Please allow location access.');
        },
        { enableHighAccuracy: true }
    );
});

// ----------------------------------------
// Load Weather by City Name
// ----------------------------------------
async function loadWeatherByCity(city) {
    showLoading();
    try {
        const data = await fetchWeatherByCity(city);
        console.log('Weather data:', data);
        displayWeather(data);
        saveLastCity(city);
    } catch (error) {
        showError(error.message);
    }
}

// ----------------------------------------
// Load Weather by Coordinates
// ----------------------------------------
async function loadWeatherByCoords(lat, lon) {
    try {
        const data = await fetchWeatherByCoords(lat, lon);
        console.log('Weather data:', data);

        // Reverse geocode to get actual city name
        const locationName = await reverseGeocode(lat, lon);

        displayWeather(data, locationName);
        saveLastCity(data.name);
    } catch (error) {
        showError(error.message);
    }
}

// ----------------------------------------
// Reverse Geocode - Get city name from coordinates
// ----------------------------------------
async function reverseGeocode(lat, lon) {
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
        return data[0].name;
    }
    return null;
}

// ----------------------------------------
// Fetch Weather by City Name
// ----------------------------------------
async function fetchWeatherByCity(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    return await fetchWeatherData(url);
}

// ----------------------------------------
// Fetch Weather by Coordinates
// ----------------------------------------
async function fetchWeatherByCoords(lat, lon) {
    const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    return await fetchWeatherData(url);
}

// ----------------------------------------
// Core Fetch Logic
// ----------------------------------------
async function fetchWeatherData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('City not found. Please check the spelling.');
        }
        throw new Error('Something went wrong. Please try again.');
    }

    return await response.json();
}

// ----------------------------------------
// Display Weather Data in the UI
// ----------------------------------------
function displayWeather(data, locationName = null) {
    const cityName = locationName || data.name;
    const temp = Math.round(data.main.temp);
    const condition = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const coord = data.coord;

    resultsDiv.innerHTML = `
        <h2 class="city-name">${cityName}</h2>
        <p class="coordinates">${coord.lat.toFixed(2)}°N, ${coord.lon.toFixed(2)}°E</p>
        <img class="weather-icon" src="${iconUrl}" alt="${condition}">
        <p class="temperature">${temp}°C</p>
        <p class="condition">${condition}</p>
    `;
}

// ----------------------------------------
// Show Loading State
// ----------------------------------------
function showLoading() {
    resultsDiv.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
}

// ----------------------------------------
// Show Error State
// ----------------------------------------
function showError(message) {
    resultsDiv.innerHTML = `<p class="error">${message}</p>`;
}

// ----------------------------------------
// LocalStorage - Remember Last City
// ----------------------------------------
function saveLastCity(city) {
    localStorage.setItem('lastCity', city);
}

function getLastCity() {
    return localStorage.getItem('lastCity');
}

// ----------------------------------------
// Auto-load last city on page refresh
// ----------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const lastCity = getLastCity();
    if (lastCity) {
        cityInput.value = lastCity;
        loadWeatherByCity(lastCity);
    }
});