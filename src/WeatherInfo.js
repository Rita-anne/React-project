import React from "react";
import Day from "./Day";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <Day date={props.data.date} />
            </li>
          </ul>
          <img src={props.data.icon} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°c</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Description: {props.data.description} </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} Km?h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
