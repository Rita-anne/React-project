import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loading: false });

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      loading: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: "Wednesday 07:00",
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      Precipitation: response.data.main.precipitation,
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.loading) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{weatherData.date}</li>
            </ul>
            <img src={weatherData.icon} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°c</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Description: {weatherData.description} </li>
              <li>Humudity: {weatherData.humidity}</li>
              <li>Wind: {Math.round(weatherData.wind)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // make an API call
    axios.get(apiUrl).then(displayWeather);
    return "loading...";
  }
}
