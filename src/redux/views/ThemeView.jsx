import React from "react";
import ThemeHeader from "../components/ThemeHeader";
import { useSelector } from "react-redux";

const ThemeView = () => {
  const theme = useSelector((state) => state.theme.mode);
  const text = useSelector((state) => state.theme.text);
  return (
    <div
      className={theme ? "bg-red-600" : "bg-green-600"}
      style={{ minHeight: "100vh" }}
    >
      <ThemeHeader />

      <div className="flex  justify-center items-center ">{text}</div>
    </div>
  );
};

export default ThemeView;
