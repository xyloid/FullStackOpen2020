import React, { useState } from "react";

const Country = ({ country }) => {
  const [isShow, setShow] = useState(false);

  if (isShow) {
    return (
      <div>
        <p key={country.name}>
          {country.name}
          <button onClick={() => setShow(!isShow)}>hide</button>
        </p>

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
    console.log(country);
    return (
      <p key={country.name}>
        {country.name} <button onClick={() => setShow(!isShow)}>show</button>
      </p>
    );
  }
};

export default Country;
