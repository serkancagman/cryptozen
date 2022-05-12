import React from "react";
import style from "./Style/Banner.module.css";
import bannerBg from "Assets/Banner/hero.jpg";
import oneImg from "Assets/Banner/one.png";
import twoImg from "Assets/Banner/two.png";
import fourthImg from "Assets/Banner/four.png";
import fifthImg from "Assets/Banner/five.png";
import sixthImg from "Assets/Banner/three.png";
import { BiDollar } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import { Trans } from "react-i18next";
import Countdown from "./Countdown";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className={style.banner}>
      <div className={style.bannerContent}>
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className={style.bannerInner}>
                <div className={style.bannerSloganArea}>
                  <h4 className={style.bannerSlogan}>
                    <span className={style.bannerSloganIcon}>
                      <BiDollar className={style.bannerLeftIcon} />
                    </span>
                    <span className={style.bannerSloganText}>
                      {t("banner.top_title")}
                    </span>
                  </h4>
                </div>
                <h2 className={style.bannerTitle}>
                  <Trans
                    i18nKey="banner.main_title"
                    components={{
                      strong_anchor: (
                        <span className={style.strongTextBanner}>Kripto</span>
                      ),
                    }}
                  />
                </h2>
                <p className={style.bannerDescription}>
                  {t("banner.description")}
                </p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <button className={style.bannerHowBtn}>
                  <div
                    className={`d-flex justify-content-center align-items-center ${style.howBtnInner}`}
                  >
                    <BsPlayCircle className={style.bannerButtonIcon} />
                    <span className={style.bannerButtonText}>
                      {" "}
                      {t("banner.button_text")}
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-lg-7 text-center col-md-12">
              <div className={style.bannerImage}>
                <div className={style.bannerMainImage}>
                  <img src={twoImg} alt="banner" className={style.firstImage} />
                </div>
                <div className={style.bannerImageSecond}>
                  <img src={oneImg} alt="banner" className="img-fluid" />
                </div>
                <div className={style.bannerImageThird}>
                  <img src={twoImg} alt="banner" className={style.thirdImage} />
                </div>
                <div className={style.bannerImageFourth}>
                  <img
                    src={fourthImg}
                    alt="banner"
                    className={style.soldTotalImage}
                  />
                </div>
                <div className={style.bannerImageFifth}>
                  <img src={fifthImg} alt="banner" className="img-fluid" />
                </div>
                <div className={style.bannerImageSixth}>
                  <img src={sixthImg} alt="banner" className="img-fluid" />
                </div>
                <Countdown />
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
