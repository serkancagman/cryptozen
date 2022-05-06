import React from "react";
import { useParams } from "react-router-dom";
import BuyorSell from "./BuyorSell";
import ProductDetail from "./ProductDetail";
import ProductTable from "./ProductTable";
import style from "./Style/Product.module.css";
const Product = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = React.useState("spot");
  return (
    <section className={style.product}>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4">
            <ProductTable />
          </div>
          <div className="col-lg-8">
            <div className="col-12">
              <ProductDetail name={id} />
            </div>
            <div className="col-12">
              <div className={style.tradeOptions}>
                <div className={style.tradeOptionsBar}>
                  <div className="d-flex align-items-center justify-content-start">
                    <div
                      onClick={() => setSelectedOption("spot")}
                      className={`${style.tradeOptionsBarItem} ${
                        selectedOption === "spot" && style.selected
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={style.tradeOptionsBarItemTitle}>
                          Spot Trading
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedOption("cross")}
                      className={`${style.tradeOptionsBarItem} ${
                        selectedOption === "cross" && style.selected
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={style.tradeOptionsBarItemTitle}>
                          Cross Margin
                        </span>
                        <span className={style.tradeOptionsBarItemText}>
                          {" "}
                          3X{" "}
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedOption("isolated")}
                      className={`${style.tradeOptionsBarItem} ${
                        selectedOption === "isolated" && style.selected
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={style.tradeOptionsBarItemTitle}>
                          Isolated Margin
                        </span>
                        <span className={style.tradeOptionsBarItemText}>
                          {" "}
                          3X{" "}
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedOption("perpetual")}
                      className={`${style.tradeOptionsBarItem} ${
                        selectedOption === "perpetual" && style.selected
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={style.tradeOptionsBarItemTitle}>
                          Perpetual Contract
                        </span>
                        <span className={style.tradeOptionsBarItemText}>
                          {" "}
                          20X{" "}
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedOption("leverage")}
                      className={`${style.tradeOptionsBarItem} ${
                        selectedOption === "leverage" && style.selected
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={style.tradeOptionsBarItemTitle}>
                          Leverage Tokens
                        </span>
                        <span className={style.tradeOptionsBarItemText}>
                          {" "}
                          3X{" "}
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedOption("liquidity")}
                      className={`${style.tradeOptionsBarItem} ${
                        selectedOption === "liquidity" && style.selected
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={style.tradeOptionsBarItemTitle}>
                          Liquidity Mining
                        </span>
                        <span className={style.tradeOptionsBarItemPercent}>
                          {" "}
                          5.02%{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={style.tradeOptionsMain}>
                <div className="row">
                  <div className="col-6">
                    <BuyorSell type="Buy" />
                  </div>
                  <div className="col-6">
                    <BuyorSell type="Sell" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
