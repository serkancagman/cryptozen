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

export const searchCoin = async (query) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/search?query=${query}`
  );
  return res.data;
};

export const getDefaultSearchData = async (currency) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=24h`
  );
  return res.data;
};

export const getCoinData = async (coin) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}coins/${coin}?localization=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
  );
  return res.data;
};

export const getCandleChartData = async (coin, currency, time) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}coins/${coin}/ohlc?vs_currency=${currency}&days=${time}`
  );
  return res.data;
};
