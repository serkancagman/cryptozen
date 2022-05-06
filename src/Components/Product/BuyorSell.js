import React from "react";
import style from "./Style/Product.module.css";
import { Slider } from "antd";
const BuyorSell = ({ coin, type }) => {
  return (
    <div className={style.buyorSell}>
      <div className="d-flex justify-content-between align-items-center">
        <span className={style.buyorSellTitle}>{type + " " + coin}</span>
        <button className={style.buyorSellButton}>Stop Order</button>
      </div>
      <div className={style.buyorSell}>
        <div className="d-flex justify-content-start align-items-center">
          <span className={style.buyorSellSubTitle}>My balance</span>
          <span className={style.buyorSellSubTitleCount}>0.0000 USD</span>
          <span className={style.buyorSellSubTitle}>Deposit</span>
          <span className={style.buyorSellSubTitle}>Withdraw</span>
        </div>
        <div className={style.buyorSell}>
          <div className="d-flex justify-content-start align-items-center">
            <span className={style.buyorSellSubTitle}>Obtainable</span>
            <span className={style.buyorSellSubTitleCount}>0.0000 {coin}</span>
          </div>
        </div>
        <form>
          <div className="col-12">
            <div className={style.buyorSellInputWrapper}>
              <input
                type="text"
                className={style.buyorSellInput}
                placeholder="0"
              />
              <span className={style.buyorSellInputText}>Price USD/{coin}</span>
            </div>
          </div>
          <div className="col-12">
            <div className={style.buyorSellInputWrapper}>
              <input
                type="text"
                className={style.buyorSellInput}
                placeholder="0"
              />
              <span className={style.buyorSellInputText}>Amount {coin}</span>
            </div>
          </div>
          <div className="col-12">
            <Slider defaultValue={30} tooltipVisible />
          </div>
          <div className="col-12">
            <div className={style.buyorSellInputWrapper}>
              <input
                type="text"
                className={style.buyorSellInput}
                placeholder="0"
              />
              <span className={style.buyorSellInputText}>Total USD</span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyorSell;
