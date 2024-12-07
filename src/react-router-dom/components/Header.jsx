import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex gap-10 text-3xl bg-red-200 h-24 w-full">
      <Link to="/">Main</Link>
      <Link to="/a">PageA</Link>
      <Link to="/b">PageB</Link>
    </div>
  );
};

export default Header;
