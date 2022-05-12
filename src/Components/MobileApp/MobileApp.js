import React from "react";
import style from "./Style/MobileApp.module.css";
import phoneImg from "Assets/MobileApp/phone.png";
import marketIcon from "Assets/MobileApp/shape3.png";
import marketIcon2 from "Assets/MobileApp/shape4.png";
import phoneIcon from "Assets/MobileApp/shape2.png";
import { useTranslation } from "react-i18next";
const MobileApp = () => {
  const { t } = useTranslation();
  return (
    <section className={style.mobileApp}>
      <div className="container">
        <div className={style.mobileAppContent}>
          <div className="row g-3 align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="d-flex flex-column justify-content-center align-items-start">
                <h2 className={style.mobileAppTitle}>
                  {t('mobile_app.main_title')}
                </h2>
                <p className={style.mobileAppText}>
                  {t('mobile_app.description')}
                </p>
                <div className="d-flex justify-content-start align-items-center">
                  <div className={style.storeIcon}>
                    <img
                      src={marketIcon}
                      alt="market icon"
                      className="img-fluid"
                    />
                  </div>
                  <div className={style.storeIcon}>
                    <img
                      src={marketIcon2}
                      alt="market icon"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
            <div className={style.phone_wrapper}>
            <div className={style.mobileAppImg}>
                <div className={style.mobileAppInner}>
                  <img src={phoneImg} alt="phone" className="img-fluid" />
                  <div className={style.phoneIcon}>
                    <img
                      src={phoneIcon}
                      alt="phone icon"
                      className="img-fluid"
                    />
                  </div>
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

export default MobileApp;
