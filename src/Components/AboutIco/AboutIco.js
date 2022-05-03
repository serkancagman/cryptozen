import React from "react";
import style from "./Style/AboutIco.module.css";
import aboutImage from "Assets/AboutIco/about.png";
import shapeImage from "Assets/AboutIco/about-shape.png";
import icon from "Assets/AboutIco/icon.png";
import icon2 from "Assets/AboutIco/icon2.png";
import icon3 from "Assets/AboutIco/icon3.png";
import HeaderTag from "Components/HeaderTag/HeaderTag";
const AboutIco = () => {
  return (
    <section className={style.aboutIco}>
      <div className="container">
        <div className={style.aboutIcoHeader}>
          <HeaderTag title="About ICO" />
          <h2 className={style.aboutIcoTitle}> About Crypto ICO </h2>
          <p className={style.aboutIcoDesc}>
            {" "}
            Monotonectally productivate virtual benefits vis-a-vis clicks ship.
            Seamlessly generate user friendly{" "}
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
                  <h4 className={style.aboutIcoItemTitle}> Money Exchange </h4>
                  <p className={style.aboutIcoItemDesc}>
                    Continually pontificate corporate deliverables through
                    clicks-and-mortar intellectual.
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
                    Balance Transfer{" "}
                  </h4>
                  <p className={style.aboutIcoItemDesc}>
                    Continually pontificate corporate deliverables through
                    clicks-and-mortar intellectual.
                  </p>
                </div>
              </div>
              <div className={style.aboutIcoItem}>
                <div className={style.aboutIcoItemIcon}>
                  <img src={icon3} alt="icon" className="img-fluid" />
                </div>
                <div className="d-flex justify-content-center align-items-start flex-column">
                  <h4 className={style.aboutIcoItemTitle}> Safe Transfer </h4>
                  <p className={style.aboutIcoItemDesc}>
                    Continually pontificate corporate deliverables through
                    clicks-and-mortar intellectual.
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
