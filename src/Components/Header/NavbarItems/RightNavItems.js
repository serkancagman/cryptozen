import style from "../Style/Header.module.css";
import mobileQR from "Assets/QR/mobileqr.svg";
import { Link } from "react-router-dom";
import {
  RiCustomerService2Fill,
  RiMessage2Fill,
  RiBugFill,
} from "react-icons/ri";
// APP MENU ITEMS

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

// HELP MENU ITEMS
export const helpList = (
  <div className={style.navSubWrapper}>
    <ul className={style.navSubList}>
      <li className={style.navSubItem}>
        <Link to="/livechat" className={style.navSubLink}>
          <RiCustomerService2Fill className={style.navSubIcon} />
          <span className={style.navSubText}>Live Chat</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/request" className={style.navSubLink}>
          <RiMessage2Fill className={style.navSubIcon} />
          <span className={style.navSubText}>Submit Request</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/bug_bounty" className={style.navSubLink}>
          <RiBugFill className={style.navSubIcon} />
          <span className={style.navSubText}>Bug Bounty</span>
        </Link>
      </li>
    </ul>
  </div>
);
