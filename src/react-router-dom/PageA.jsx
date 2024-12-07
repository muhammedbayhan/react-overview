import React from "react";
import { Link, Outlet } from "react-router-dom";

const PageA = () => {
  return (
    <div>
      PageA
      <br />
      <Link to="a-info">Ainfo</Link>
      <Outlet />
    </div>
  );
};

export default PageA;
