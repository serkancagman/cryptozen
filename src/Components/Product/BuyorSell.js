import React from "react";
import style from "./Style/Product.module.css";
import { Slider } from "antd";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const BuyorSell = ({ type }) => {
  const { coin, coin_price } = useSelector((state) => state.current_coin);
  const [coinPrice, setCoinPrice] = React.useState(0);
  const {t} = useTranslation();
  return (
    <div className={style.buyorSell}>
      <div className={style.buyorSellTopArea}>
        <div className="d-flex justify-content-between  align-items-center">
          <span className={style.buyorSellTitle}>
            {type}
            <span className={style.coinName}> {coin}</span>
          </span>
          <button className={style.buyorSellButton}>Stop Order</button>
        </div>
      </div>
      <div className="d-flex my-1 justify-content-start flex-wrap align-items-center">
        <span className={style.buyorSellSubTitle}>{t('product.buy_or_sell.balance')}</span>
        <span
          className={`${style.buyorSellSubTitleCount} ${
            type === "Buy" ? style.buyText : style.sellText
          }`}
        >
          0.0000 USD
        </span>
        <span className={style.buyorSellSubTitle}>{t('product.buy_or_sell.deposit')}</span>
        <span className={style.buyorSellSubTitle}>{t('product.buy_or_sell.withdraw')}</span>
      </div>
      <div className="d-flex my-1 justify-content-start flex-wrap align-items-center">
        <span className={style.buyorSellSubTitle}>{t('product.buy_or_sell.obtainable')}</span>
        <span
          className={`${style.buyorSellSubTitleCount} ${
            type === "Buy" ? style.buyText : style.sellText
          }`}
        >
          0.0000 {coin}
        </span>
      </div>
      <form>
        <div className="col-12">
          <div className={style.buyorSellInputWrapper}>
            <input
              type="text"
              className={style.buyorSellInput}
              placeholder="0"
              value={coinPrice || coin_price}
              onChange={(e) => setCoinPrice(e.target.value)}
            />
            <span className={style.buyorSellInputText}>
            {t('product.product_table.price')} USD/<span className={style.coinName}>{coin}</span>
            </span>
          </div>
        </div>
        <div className="col-12">
          <div className={style.buyorSellInputWrapper}>
            <input
              type="text"
              className={style.buyorSellInput}
              placeholder="0"
            />
            <span className={style.buyorSellInputText}>
            {t('product.buy_or_sell.amount')} <span className={style.coinName}> {coin}</span>
            </span>
          </div>
        </div>
        <div className="col-12">
          <Slider defaultValue={0} />
        </div>
        <div className="col-12">
          <div className={style.buyorSellInputWrapper}>
            <input
              type="text"
              className={style.buyorSellInput}
              placeholder="0"
            />
            <span className={style.buyorSellInputText}>{t('product.buy_or_sell.total')} USD</span>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between"></div>
        </div>
      </form>
      <button
        className={`${style.buyorSellBtn} ${
          type === "Buy" || type === "Satın Al" ? style.buyBtn : style.sellBtn
        }`}
      >
        {type + " " + coin}
      </button>
    </div>
  );
};

export default BuyorSell;
