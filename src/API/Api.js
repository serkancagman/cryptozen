import axios from "axios";

export const getCoinList = async (currency) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=6&page=1&sparkline=false&price_change_percentage=24h`
  );

  return res.data;
};
export const getAllCoinList = async (currency) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h`
  );
  return res.data;
};
export const getCoinChartData = async (coin, currency) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}coins/${coin}/market_chart?vs_currency=${currency}&days=1&interval=hourly`
  );

  return res.data;
};
