import HeaderTag from "Components/HeaderTag/HeaderTag";
import React from "react";
import MarketTable from "./MarketTable";
import style from "./Style/Market.module.css";

const Market = () => {
  return (
    <section className={style.market}>
      <div className={style.marketInner}>
        <div className="container">
          <div className={style.marketHeader}>
            <HeaderTag title="Market" />
            <h2 className={style.marketTitle}>Market List</h2>
            <p className={style.marketDesc}>More than 200 coins information.</p>
          </div>
          <MarketTable />
        </div>
      </div>
      <div className={style.martketFade}></div>
    </section>
  );
};

export default Market;
