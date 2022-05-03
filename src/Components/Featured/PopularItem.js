import BasicLineChart from "Charts/BasicLineChart";
import React from "react";
import style from "./Style/Featured.module.css";

const PopularItem = ({ coin }) => {

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

            <div className={style.chart}>
              <BasicLineChart coin={coin} />
            </div>

            <span
              className={`${style.marketCapChange} ${
                coin.market_cap_change_percentage_24h > 0
                  ? style.riseUp
                  : style.riseDown
              }`}
            >
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
