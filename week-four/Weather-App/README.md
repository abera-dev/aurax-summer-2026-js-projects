# Weather App

A weather dashboard that displays current conditions and hourly forecasts using the OpenWeatherMap API.

## Features

- Search by city name with autocomplete suggestions
- Auto-correct for misspelled city names (Levenshtein distance)
- Use My Location via browser geolocation
- Shows temperature, humidity, wind speed, precipitation
- 24-hour hourly forecast (8 × 3-hour intervals)
- Remembers last searched city via localStorage

## How to Use

1. Open `index.html` in a browser
2. Type a city name and press Enter or select from suggestions
3. Or click **Use My Location** for local weather

## Files

- `index.html` — App layout
- `style.css` — Glassmorphism styling
- `script.js` — API calls, autocomplete, auto-correct logic
