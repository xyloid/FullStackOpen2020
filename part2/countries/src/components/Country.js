import React, { useState } from "react";
import CountryView from "./CountryView";

const Country = ({ country }) => {
  const [isShow, setShow] = useState(false);

  if (isShow) {
    return (
      <div>
        <p key={country.name}>
          {country.name}
          <button onClick={() => setShow(!isShow)}>hide</button>
        </p>

        <CountryView country={country} />
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
