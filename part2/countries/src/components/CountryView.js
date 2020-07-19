import React from "react";

const CountryView = ({ country }) => {
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
      <img src={country.flag} alt="flag can not show" width="100" />
    </div>
  );
};

export default CountryView;
