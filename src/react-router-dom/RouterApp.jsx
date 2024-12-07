import React from "react";
import { Route, Routes } from "react-router-dom";
import PageA from "./PageA";
import PageMain from "./PageMain";
import PageB from "./PageB";
import Header from "./components/Header";
import Ainfo from "./Ainfo";

const RouterApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/a" element={<PageA />}>
          <Route path="a-info" element={<Ainfo />} />
        </Route>
        <Route path="/b" element={<PageB />} />
      </Routes>
    </>
  );
};

export default RouterApp;
