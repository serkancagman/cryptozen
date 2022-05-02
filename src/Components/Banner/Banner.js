import React from "react";
import style from "./Style/Banner.module.css";
import bannerBg from "Assets/Banner/hero.jpg";
import { BiDollar } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
const Banner = () => {
  return (
    <section className={style.banner}>
      <div className={style.bannerContent}>
        <div className="container">
          <div className="row-g-3 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className={style.bannerInner}>
                <div className={style.bannerSloganArea}>
                  <h4 className={style.bannerSlogan}>
                    <span className={style.bannerSloganIcon}>
                      <BiDollar className={style.bannerLeftIcon} />
                    </span>
                    <span className={style.bannerSloganText}>
                      Secure & Safe Crypto Currency
                    </span>
                  </h4>
                </div>
                <h2 className={style.bannerTitle}>
                  Make your{" "}
                  <span className={style.strongTextBanner}>Crypto</span>{" "}
                  Transaction
                </h2>
                <p className={style.bannerDescription}>
                  Buy and Sales 100+ Cryptocurrencies with 20+ flat currencies
                  market using bank transfers or your credit/debit card in your
                  exchange type bitcoin establshed token area.
                </p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <button className={style.bannerHowBtn}>
                  <div className={`d-flex justify-content-center align-items-center ${style.howBtnInner}`}>
                    <BsPlayCircle className={style.bannerButtonIcon} />
                    <span className={style.bannerButtonText}>
                      {" "}
                      How it works{" "}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bannerBgArea}>
        <div className={style.bannerBgInner}>
          <img src={bannerBg} className={style.bannerBg} alt="banner" />
          <div className={style.bannerBgOverlay}></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
