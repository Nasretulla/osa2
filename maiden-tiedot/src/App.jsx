import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import CountryDetails from "./Component/CountryDetails";

const App = () => {
  // all countries from API
  const [allCountries, setAllCountries] = useState([]);

  //users input
  const [findCountryName, setFindCountryName] = useState("");

  useEffect(() => {
    console.log("fetching data", allCountries);
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        console.log(response.data);
        setAllCountries(response.data);
      });
  }, []);

  const handleChange = (event) => {
    setFindCountryName(event.target.value);
  };

  const filteredCountries = findCountryName
    ? allCountries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(findCountryName.toLowerCase())
      )
    : allCountries;

  return (
    <>
      <form>
        find country <input value={findCountryName} onChange={handleChange} />
      </form>

      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : (
        <ul>
          {filteredCountries.map((country, index) => (
            <li key={index}>{country.name.common}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
