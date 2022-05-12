import style from "../Style/Header.module.css";
import React from "react";
import {BsCreditCard2BackFill, BsBank2} from "react-icons/bs";
import {SiHiveBlockchain} from "react-icons/si";
import { Link } from "react-router-dom";
const BuyCrypto = () => {
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <li className={style.navSubItem}>
          <Link to="/buy_crypto" className={style.navSubLink}>
            <BsCreditCard2BackFill className={style.navSubIcon} />
            <span className={style.navSubText}>Credit Card</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/buy_crypto/bank" className={style.navSubLink}>
            <BsBank2 className={style.navSubIcon} />
            <span className={style.navSubText}>Bank Transfer</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/buy_crypto/p2p" className={style.navSubLink}>
            <SiHiveBlockchain className={style.navSubIcon} />
            <span className={style.navSubText}>P2P Trade</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BuyCrypto;
