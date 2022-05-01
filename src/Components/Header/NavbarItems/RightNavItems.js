import style from "../Style/Header.module.css";
import mobileQR from "Assets/QR/mobileqr.svg";
import { Link } from "react-router-dom";
export const appList = (
  <div className={style.navSubWrapper}>
    <Link to="/app/dashboard" className="d-flex justify-content-center">
      <div className={style.navSubInner}>
        <span className={style.navSubMainLinkText}>Mobile</span>
        <img
          src={mobileQR}
          className={style.navSubMainLinkImg}
          alt="mobileqr"
        />
      </div>
      <div className={style.navSubInner}>
        <span className={style.navSubMainLinkText}>Desktop</span>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className={style.navSubMainLinkButton}> Windows </button>
          <button className={style.navSubMainLinkButton}> MacOS </button>
        </div>
      </div>
    </Link>
  </div>
);
