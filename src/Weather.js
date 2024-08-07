import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.dOAZsSAxaIQRh0B4-JA6awHaFa&pid=Api&P=0&h=220"
            alt="Mostly cloudy"
            width={100}
            height={80}
          />
          <span className="temperature">6</span>
          <span className="unit">°c</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humudity: 72%</li>
            <li>Wind: 13Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
