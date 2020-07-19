import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [allCountires, setAllCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);
  const [pattern, setPattern] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setAllCountries(response.data));
  }, []);

  const patternChange = (event) => {
    console.log("before", pattern);
    console.log("target", event.target.value);
    setPattern(event.target.value);
    // setState is asynchronuous.
    console.log("after", pattern);
    setCurrentCountries(searchCountries(event.target.value));
  };

  const searchCountries = (pat) =>
    allCountires.filter((country) =>
      country.name.toLowerCase().includes(pat.toLowerCase())
    );

  return (
    <div>
      <h1>Data for countries</h1>
      <div>
        <input onChange={patternChange} value={pattern} />
      </div>
      <p>You're looking for {pattern}</p>
      <Countries countries={currentCountries} />
    </div>
  );
}

export default App;
