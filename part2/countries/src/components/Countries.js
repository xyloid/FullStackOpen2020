import React from "react";
import Country from "./Country";

const maxCountries = 10;

const Countries = ({ countries }) => {
  if (countries.length > maxCountries) {
    return <div>Too many matches, specify another filter.</div>;
  } else if (countries.length === 1) {
    let country = countries[0];
    console.log("show single contry details", country);
    return (
      <div>
        <h2>{country.name}</h2>
        <p>captial {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    console.log("current country list", countries);
    return (
      <div>
        {countries.map((country) => (
          // <p key={country.name}>{country.name}</p>
          <Country key={country.name} country={country} />
        ))}
      </div>
    );
  }
};

export default Countries;