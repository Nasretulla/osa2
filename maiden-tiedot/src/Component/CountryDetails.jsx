import React, { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_SOME_KEY;

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (country.capital) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`
      )
        .then((Response) => Response.json())
        .then((data) => {
          setWeather(data);
          console.log("API Response:", data);
        })
        .catch((error) => {
          console.log("error fetching weather data", error);
        });
    }
  }, [country.capital]);

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>

      <h4>Languages: </h4>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>

      <img src={country.flags.png} style={{ width: "100px" }} />

      <h3>Weather in {country.capital}</h3>
      <p>Temperature: {weather.main?.temp} Celcius </p>

      {weather.weather && weather.weather.length > 0 && (
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
      )}

      {<p>wind {weather.wind?.speed} m/s</p>}
    </>
  );
};

export default CountryDetails;
