import React from "react";

const SearchBar = (props) => {
  return (
    <div className="flex justify-center my-6">
      <div className="relative w-96">
        <input
          onChange={props.handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-md"
          type="text"
          placeholder="🔍 Search for a country..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
