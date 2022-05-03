import React from "react";
import style from "./Style/TopList.module.css";
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
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
