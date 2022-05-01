import { Home } from "Pages";
import React from "react";
import { Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
