import axios from "axios";

export const getCoinList = async (currency) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=6&page=1&sparkline=false&price_change_percentage=24h`
  );

  return res.data;
};
