import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryView = ({ country }) => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumid] = useState(0);
  const [condition, setCondition] = useState("");

  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country.capital}`
      )
      .then((response) => {
        console.log("temp_c:", response);
        setTemperature(response.data.current.temp_c);
        setHumid(response.data.current.humidity);
        setCondition(response.data.current.condition.icon);
      });
  }, [country.capital, api_key]);

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
      <h2>Weather in {country.capital}</h2>
      <img src={condition} alt="weather icon can not show" width="50" />
      <p>temperature {temperature}</p>
      <p>humidity {humidity}</p>
    </div>
  );
};

export default CountryView;
