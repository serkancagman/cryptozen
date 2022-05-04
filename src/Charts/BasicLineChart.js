import React from "react";
import { TinyLine } from "@ant-design/plots";
import { getCoinChartData } from "API/Api";
import { useQuery } from "react-query";
const BasicLineChart = ({ coin }) => {
  const [chartData, setChartData] = React.useState([]);
  let useCoinName = coin.id.toLowerCase();
  const { data, isLoading, error } = useQuery(useCoinName, () =>
    getCoinChartData(useCoinName, "usd")
  );
  React.useEffect(() => {
    if (data) {
      setChartData(data.prices.map((item) => item[1]));
    }
  }, [data]);

  const currentColor =
    coin.market_cap_change_percentage_24h > 0 ? "#9AE66E" : "#FF3F00";

  const config = {
    height: 500,
    width: 180,
    autoFit: false,
    data: chartData,
    smooth: true,
    color: currentColor,
  };
  return <>{!isLoading && !error && <TinyLine {...config} />}</>;
};

export default BasicLineChart;
