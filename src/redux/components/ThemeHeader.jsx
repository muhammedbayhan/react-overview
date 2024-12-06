import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const ThemeHeader = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-full h-24 bg-red-400 sticky">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-4 bg-green-400"
        >
          CHANGE{" "}
        </button>
      </div>
    </div>
  );
};

export default ThemeHeader;
