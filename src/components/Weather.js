import React from "react";

const Weather = (props) => (
  <div className="weather-info">
    {props.city && props.country && (
      <p className="weather-key">
        Location:{" "}
        <span className="weather-value">
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather-key">
        Temperature:{" "}
        <span className="weather-value"> {props.temperature}&#176;</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather-key">
        Humidity: <span className="weather-value"> {props.humidity}%</span>
      </p>
    )}
    {props.description && (
      <p className="weather-key">
        Description: <span className="weather-value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="weather-error">{props.error}</p>}
  </div>
);

export default Weather;
