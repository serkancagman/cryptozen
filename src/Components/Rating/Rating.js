import HeaderTag from "Components/HeaderTag/HeaderTag";
import React from "react";
import style from "./Style/Rating.module.css";
import iconOne from "Assets/Rate/rate-1.png";
import iconTwo from "Assets/Rate/rate-2.png";
import iconThree from "Assets/Rate/rate-3.png";
import iconFour from "Assets/Rate/rate-4.png";
const Rating = () => {
  return (
    <section className={style.rating}>
      <div className="container">
        <div className={style.rateHeader}>
          <HeaderTag title="Token Rating" />
          <h2 className={style.rateTitle}> Crypto Token Rating </h2>
        </div>
        <div className="row justify-content-center align-items-center g-3">
          <div className="col-md-6 col-lg-3 col-12">
            <div className={style.ratingItem}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img src={iconOne} alt="icon" className="img-fluid" />
                <span className={style.ratingNumber}>4.5</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <div className={style.ratingItem}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img src={iconTwo} alt="icon" className="img-fluid" />
                <span className={style.ratingNumber}>4</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <div className={style.ratingItem}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img src={iconThree} alt="icon" className="img-fluid" />
                <span className={style.ratingNumber}>5</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <div className={style.ratingItem}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img src={iconFour} alt="icon" className="img-fluid" />
                <span className={style.ratingNumber}>3.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
