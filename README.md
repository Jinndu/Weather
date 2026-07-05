# Weather 🌦️

A simple weather application built with **HTML, CSS, and JavaScript** that fetches real-time weather information using the **OpenWeatherMap API**.

This project was built to practice working with APIs and asynchronous JavaScript while dynamically updating the user interface with live weather data.

---

## Features


- 🔍 Search for any city or country
- 🌡️ Display the current temperature
- 📍 Display the searched location
- 💧 Display humidity
- 💨 Display wind speed
- 🖼️ Weather icon changes based on the current weather condition
- ⌨️ Search using either:
  - The search button
  - The **Enter** key
- ❌ Displays an error message when an invalid location is entered

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API

---

## What I Learned

This project focused primarily on improving my JavaScript skills by interacting with an external API.

### New Concepts

- Working with REST APIs
- Understanding API keys
- `fetch()`
- `async` functions
- `await`
- Parsing JSON responses using `response.json()`
- Handling asynchronous operations
- Passing arguments into functions
- Event listeners and callback functions
- Dynamically updating the DOM with API data
- Basic API error handling using HTTP status codes (404)

### HTML & CSS

No major HTML or CSS concepts were introduced during this project. The layout was relatively simple, allowing me to focus on JavaScript and API integration.

---

## Future Improvements

- Add a loading spinner while data is being fetched
- Display more weather information (feels like, pressure, visibility, sunrise/sunset)
- Add a 5-day weather forecast
- Automatically detect the user's current location
- Improve responsiveness for smaller devices
- Add animations based on weather conditions
- Refactor the JavaScript into smaller reusable functions

---

## API Used

**OpenWeatherMap Current Weather API**

The application sends a request to the OpenWeatherMap API and updates the interface with the returned weather data.

---

## Project Goal

The purpose of this project was to become comfortable with:

- Consuming APIs
- Working with asynchronous JavaScript
- Fetching and processing JSON data
- Updating the DOM using live data
- Handling user input and basic API errors

---

## Note

This project is intended for learning purposes.

If you clone this repository, you'll need your own **OpenWeatherMap API key**. Avoid exposing API keys in public repositories or production applications.
