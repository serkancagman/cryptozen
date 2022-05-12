import HeaderTag from "Components/HeaderTag/HeaderTag";
import React from "react";
import style from "./Style/WhoWeAre.module.css";
import { BsPlusCircleDotted } from "react-icons/bs";
import colImg from "Assets/WhoWeAre/single.png";
import { useTranslation } from "react-i18next";
const WhoWeAre = () => {
  const { t } = useTranslation();
  return (
    <section className={style.whoWeAre}>
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center align-items-start">
              <HeaderTag title={t("who_we_are.tag_text")} />
              <h2 className={style.whoWeAreTitle}>
                {t("who_we_are.main_title")}
              </h2>
              <p className={style.whoWeAreDesc}>
                {t("who_we_are.description_first")}
              </p>
              <p className={style.whoWeAreDesc}>
                {t("who_we_are.description_second")}
              </p>
              <button className={style.whoWeAreBtn}>
                <div
                  className={`d-flex align-items-center justify-content-center ${style.moreBtn}`}
                >
                  <BsPlusCircleDotted className={style.moreIcon} />
                  <span className={style.moreText}>
                    {t("who_we_are.more_text")}
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 text-center">
            <img src={colImg} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
