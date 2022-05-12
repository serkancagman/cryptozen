import React from "react";
import style from "./Style/AboutIco.module.css";
import aboutImage from "Assets/AboutIco/about.png";
import shapeImage from "Assets/AboutIco/about-shape.png";
import icon from "Assets/AboutIco/icon.png";
import icon2 from "Assets/AboutIco/icon2.png";
import icon3 from "Assets/AboutIco/icon3.png";
import HeaderTag from "Components/HeaderTag/HeaderTag";
import { useTranslation } from "react-i18next";
const AboutIco = () => {
  const {t} = useTranslation();
  return (
    <section className={style.aboutIco}>
      <div className="container">
        <div className={style.aboutIcoHeader}>
          <HeaderTag title={t('about_ico.tag_text')} />
          <h2 className={style.aboutIcoTitle}>{t('about_ico.main_title')}</h2>
          <p className={style.aboutIcoDesc}>
            {t('about_ico.description')}
          </p>
        </div>
        <div className="row align-items-center justify-content-center g-3">
          <div className="col-md-12 col-lg-6">
            <div className="d-flex justify-content-center align-items-center">
              <div className={style.aboutIcoImage}>
                <img src={aboutImage} alt="about" className="img-fluid" />
              </div>
              <img src={shapeImage} alt="shape" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center align-items-start">
              <div className={style.aboutIcoItem}>
                <div className={style.aboutIcoItemIcon}>
                  <img src={icon} alt="icon" className="img-fluid" />
                </div>
                <div className="d-flex justify-content-center align-items-start flex-column">
                  <h4 className={style.aboutIcoItemTitle}>{t('about_ico.items.first.title')}</h4>
                  <p className={style.aboutIcoItemDesc}>
                  {t('about_ico.items.first.description')}
                  </p>
                </div>
              </div>
              <div className={style.aboutIcoItem}>
                <div className={style.aboutIcoItemIcon}>
                  <img src={icon2} alt="icon" className="img-fluid" />
                </div>
                <div className="d-flex justify-content-center align-items-start flex-column">
                  <h4 className={style.aboutIcoItemTitle}>
                    {" "}
                    {t('about_ico.items.second.title')}{" "}
                  </h4>
                  <p className={style.aboutIcoItemDesc}>
                  {t('about_ico.items.second.description')}
                  </p>
                </div>
              </div>
              <div className={style.aboutIcoItem}>
                <div className={style.aboutIcoItemIcon}>
                  <img src={icon3} alt="icon" className="img-fluid" />
                </div>
                <div className="d-flex justify-content-center align-items-start flex-column">
                  <h4 className={style.aboutIcoItemTitle}>{t('about_ico.items.thirth.title')}</h4>
                  <p className={style.aboutIcoItemDesc}>
                  {t('about_ico.items.thirth.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIco;
