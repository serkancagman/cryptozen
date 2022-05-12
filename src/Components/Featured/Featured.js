import React from "react";
import style from "./Style/Featured.module.css";
import { getCoinList } from "API/Api";
import { useQuery } from "react-query";
import PopularItem from "./PopularItem";
import { Link } from "react-router-dom";
import FeaturedTable from "./FeaturedTable";
import circleEffectImg from "Assets/Featured/round.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import PromotionCarousel from "./PromotionCarousel";
import { useSelector } from "react-redux";
import HeaderTag from "Components/HeaderTag/HeaderTag";
import Preloader from "Components/PreLoader/Preloader";
import { useTranslation } from "react-i18next";
const TopList = () => {
  const {currency} = useSelector(state => state.currency);
  const { data, isLoading, error } = useQuery(["coinList",currency], () =>
    getCoinList(currency)
  );
  const { t } = useTranslation();
  return (
    <section className={style.topList}>
      <div className="container">
        <div className={style.featuredHeader}>
          <HeaderTag title={t('featured.tag_text')} />
        <h3 className={style.topListTitle}>{t('featured.main_title')}</h3>
        </div>
        <div className="row g-3">
          {!isLoading && !error && (
            <>
              <PopularItem coin={data[0]} />
              <PopularItem coin={data[1]} />
              <PopularItem coin={data[2]} />
            </>
          )}
        </div>
        <div className={style.tableWrapper}>
          {!isLoading && !error ? <FeaturedTable data={data} /> : <Preloader />}
          <div className="d-flex justify-content-center align-items-center my-3">
            <Link to="/market_list" className={style.viewAll}>
              {" "}
              {t('featured.more')}
              <MdKeyboardArrowRight className={style.viewAllIcon} />
            </Link>
          </div>
        </div>
        <div className={style.promotionArea}>
          <PromotionCarousel />
        </div>
      </div>
      <div className={style.circleEffect}>
        <img className="img-fluid" src={circleEffectImg} alt="circle effect" />
      </div>
    </section>
  );
};

export default TopList;
