import BasicLineChart from "Charts/BasicLineChart";
import React from "react";
import style from "./Style/TopList.module.css";
import increaseIcon from "Assets/TopList/riseUp.png";
import decreaseIcon from "Assets/TopList/riseDown.png";
import { getCoinChartData } from "API/Api";
import { useQuery } from "react-query";
const PopularItem = ({ coin }) => {
  let useCoinName = coin.name.toLowerCase();
  const { data, isLoading, error } = useQuery(useCoinName, () =>
    getCoinChartData(useCoinName, "usd")
  );
  console.log(coin);
  return (
    <div className="col-lg-4 col-md-6">
      <div className={style.popularItem}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-start justify-content-center flex-column">
            <img src={coin.image} alt="coin" className={style.coinImage} />
            <span className={style.coinName}>{coin.name}</span>
            <span className={style.coinPrice}>USD {coin.current_price}</span>
          </div>
          <div className="d-flex flex-column align-items-end justify-content-between">
            <span className={style.coinTimeType}>24h</span>
            {!isLoading && !error && (
              <div className={style.chart}>
                <BasicLineChart
                  data={data.prices.map((price) => price[1])}
                  currentColor={
                    coin.market_cap_change_percentage_24h > 0
                      ? "#6FDFDF"
                      : "#FF3F00"
                  }
                />
              </div>
            )}
           
                  <span className={`${style.marketCapChange} ${coin.market_cap_change_percentage_24h > 0 ? style.riseUp : style.riseDown}`}>
                    {" "}
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </span>
            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
