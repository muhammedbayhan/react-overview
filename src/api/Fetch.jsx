import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => {
        setCountries(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          <h1>{country.name.common}</h1>
          <h3>{country.capital}</h3>
          <h3>{country.region}</h3>
          <h3>{country.subregion}</h3>
          <h3>{country.population}</h3>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
      ))}
    </div>
  );
};

export default Fetch;
