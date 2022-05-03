import React from "react";
import style from "./Style/MobileApp.module.css";
import phoneImg from "Assets/MobileApp/phone.png";
import marketIcon from "Assets/MobileApp/shape3.png";
import marketIcon2 from "Assets/MobileApp/shape4.png";
import phoneIcon from "Assets/MobileApp/shape2.png";
const MobileApp = () => {
  return (
    <section className={style.mobileApp}>
      <div className="container">
        <div className={style.mobileAppContent}>
          <div className="row g-3 align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="d-flex flex-column justify-content-center align-items-start">
                <h2 className={style.mobileAppTitle}>
                  Also available on IOS and Android
                </h2>
                <p className={style.mobileAppText}>
                  Completely whiteboard robust interfaces without multidiscipli
                  has to manufactured products. Progressively myocardinate
                  cooperat crypt technologies through principle- driven
                  e-commerce.
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
    </section>
  );
};

export default MobileApp;
