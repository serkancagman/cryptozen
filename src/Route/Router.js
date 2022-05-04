import { Home,MarketList } from "Pages";
import React from "react";
import { Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market_list" element={<MarketList />} />
    </Routes>
  );
};

export default Router;
