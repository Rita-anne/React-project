import React from "react";
import Day from "./Day";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <li>{props.data.description} </li>
          </ul>
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
