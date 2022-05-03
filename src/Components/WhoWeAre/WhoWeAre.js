import HeaderTag from "Components/HeaderTag/HeaderTag";
import React from "react";
import style from "./Style/WhoWeAre.module.css";
import { BsPlusCircleDotted } from "react-icons/bs";
import colImg from "Assets/WhoWeAre/single.png";
const WhoWeAre = () => {
  return (
    <section className={style.whoWeAre}>
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center align-items-start">
              <HeaderTag title="Trading Platform" />
              <h2 className={style.whoWeAreTitle}>
                We complete every project extra care as customer.
              </h2>
              <p className={style.whoWeAreDesc}>
                Globally transition ours multidisciplinary applications for
                bleeding-edge vortals. harness o ours plug-and-plays networks
                without stand-alone bandwidth market harness competitive
                channels.
              </p>
              <p className={style.whoWeAreDesc}>
                Seamlessly redefine ethical materials through ours high-payoff
                growth strategie appropriately envisioneer robust
                infrastructures before robust for the aynergistically generate
                B2B alignments after.
              </p>
              <button className={style.whoWeAreBtn}>
                <div
                  className={`d-flex align-items-center justify-content-center ${style.moreBtn}`}
                >
                  <BsPlusCircleDotted className={style.moreIcon} />
                  <span className={style.moreText}>Read More</span>
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
