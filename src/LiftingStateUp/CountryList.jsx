import axios from "axios";
import React, { useEffect, useState } from "react";

const CountryList = (props) => {
  const [countryList, setCountryList] = useState([]);

  const filteredCountryList = countryList.filter((country) =>
    country.name.common.toLowerCase().includes(props.search.toLowerCase())
  );
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountryList(response.data);
    });
  }, []);
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {filteredCountryList.map((country, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-lg p-6 w-80 bg-white"
        >
          <img
            className="h-20 w-32 mx-auto mb-4 rounded "
            src={country.flags.png}
            alt={country.name.common}
          />
          <h2 className="text-lg font-semibold text-center mb-2">
            {country.name.common}
          </h2>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Capital:</strong> {country.capital || "N/A"}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
