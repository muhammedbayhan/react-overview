import React, { useState } from "react";
import CountryList from "./CountryList";
import SearchBar from "./SearchBar";

const LiftingStateUp = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} />
      <CountryList search={search} />
    </div>
  );
};

export default LiftingStateUp;
