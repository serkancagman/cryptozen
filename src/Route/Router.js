import { Home, MarketList, Coin } from "Pages";
import React from "react";
import { Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market_list" element={<MarketList />} />
      <Route path="/market_list/:id" element={<Coin />} />
    </Routes>
  );
};

export default Router;
