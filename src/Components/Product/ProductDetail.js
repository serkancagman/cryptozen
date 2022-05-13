import React from "react";
import style from "./Style/Product.module.css";
import { useQuery } from "react-query";
import { getCoinData } from "API/Api";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCoin } from "Redux/CoinSlice/CoinSlice";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import useNumberStep from "Hooks/useNumberStep";
import { Rate } from "antd";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Preloader from "Components/PreLoader/Preloader";
import { useTranslation } from "react-i18next";
const ProductDetail = ({ name }) => {
  const dispatch = useDispatch();
  const { currency, currencyIcon } = useSelector((state) => state.currency);
  const { data, isLoading, error } = useQuery(["coinData", name], () =>
    getCoinData(name)
  );
  const { t } = useTranslation();
  React.useEffect(() => {
    if (data) {
      dispatch(setCurrentCoin(data));
    }
  }, [data]);

  const shortedNumber = useNumberStep;

  return (
    <div className={style.productDetail}>
      <div className={style.productDetailTop}>
        <div className={style.product_top_wrapper}>
          {!isLoading && !error ? (
            <>
              <div className={style.productNameInfo}>
                <div className="d-flex align-items-center justify-content-start">
                  <div className={style.productImageWrapper}>
                    <img
                      src={data.image.large}
                      alt={data.name}
                      className={style.productImage}
                    />
                  </div>
                  <div className={style.productNameWrapper}>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <div className="d-flex justify-content-start align-items-center">
                        <Link
                          to={`/coin_info/${data.id}`}
                          className={style.productName}
                        >
                          {data.symbol}
                        </Link>
                        <span className={style.productName}>/{currency}</span>
                        <Rate count={1} />
                      </div>
                      <Link
                        to={`/coin_info/${data.id}`}
                        className="d-flex justify-content-start align-items-center"
                      >
                        <ImBook className={style.productIcon} />
                        <span className={style.productNameLong}>
                          {data.name}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.priceandvalue_wrapper}>
                <div className={style.productPriceInfo}>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <span className={style.productCurrencyIcon}>
                        {currencyIcon}
                      </span>
                      <span
                        className={`${style.productPriceValue} ${
                          data.market_data
                            .market_cap_change_percentage_24h_in_currency.usd >
                          0
                            ? style.priceUp
                            : style.priceDown
                        }`}
                      >
                        {" "}
                        {data.market_data.current_price.usd}
                      </span>
                    </div>
                    <div
                      className={`${style.productPriceChange} ${
                        data.market_data
                          .market_cap_change_percentage_24h_in_currency.usd > 0
                          ? style.priceUp
                          : style.priceDown
                      }`}
                    >
                      {" "}
                      <span>
                        {" "}
                        {data.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                          2
                        )}
                        %
                      </span>
                      <span>
                        {data.market_data
                          .market_cap_change_percentage_24h_in_currency.usd >
                        0 ? (
                          <TiArrowSortedUp className={style.priceUp} />
                        ) : (
                          <TiArrowSortedDown className={style.priceDown} />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={style.productVolumeInfo}>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center mx-2 align-items-start flex-column">
                      <span className={style.productVolumeTitle}>{t('product.product_top.high')}</span>
                      <span className={style.productVolumeValue}>
                        {data.market_data.high_24h.usd}
                      </span>
                    </div>
                    <div className="d-flex justify-content-center mx-2 align-items-start flex-column">
                      <span className={style.productVolumeTitle}>{t('product.product_top.low')}</span>
                      <span className={style.productVolumeValue}>
                        {data.market_data.low_24h.usd}
                      </span>
                    </div>
                    <div className="d-flex justify-content-center mx-2 align-items-start flex-column">
                      <span className={style.productVolumeTitle}>
                      {t('product.product_top.volume')}
                      </span>
                      <span className={style.productVolumeValue}>
                        {currencyIcon +
                          "" +
                          shortedNumber(data.market_data.total_volume.usd)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) :<Preloader />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
