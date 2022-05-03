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
const TopList = () => {
  const { data, isLoading, error } = useQuery("coinList", () =>
    getCoinList("USD")
  );
  console.log(data);
  return (
    <section className={style.topList}>
      <div className="container">
        <h3 className={style.topListTitle}>Featured Coins</h3>
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
          {!isLoading && !error && <FeaturedTable data={data} />}
          <div className="d-flex justify-content-center align-items-center my-3">
            <Link to="/coins" className={style.viewAll}>
              {" "}
              View More
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
