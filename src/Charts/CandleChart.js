import React from "react";
import { Stock } from "@ant-design/charts";
import { getCandleChartData } from "API/Api";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import moment from "moment";
const CandleChart = ({ coin }) => {
  const [chartData, setChartData] = React.useState([]);
  const { currency } = useSelector((state) => state.currency);
  let useCoinName = coin.toLowerCase();
  let useCurrency = currency.toLowerCase();
  const { data, isLoading, error } = useQuery(
    ["Candle Chart data", currency, useCoinName],
    () => getCandleChartData(useCoinName, useCurrency, 1)
  );

  React.useEffect(() => {
    let useData = [];
    if (data) {
      data.forEach((item) => {
        useData.push({
          trade_date: moment(item[0]).format("YYYY-MM-DD:HH:mm"),
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        });
      });
    }
    setChartData(useData);
  }, [data]);

  const config = {
    appendPadding: [10, 0, 10, 0],
    data: chartData,
    xField: "trade_date",
    yField: ["open", "close", "high", "low"],
    slider: {
      scrollable: true,
    },
    seriesField: "close",
    risingFill: "#9AE66E",
    fallingFill: "#FF3F00",
  };
  return <>{!isLoading && !error && <Stock {...config} />}</>;
};

export default CandleChart;
