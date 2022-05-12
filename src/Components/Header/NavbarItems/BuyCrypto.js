import style from "../Style/Header.module.css";
import React from "react";
import {BsCreditCard2BackFill, BsBank2} from "react-icons/bs";
import {SiHiveBlockchain} from "react-icons/si";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BuyCrypto = () => {
  const { t } = useTranslation();
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <li className={style.navSubItem}>
          <Link to="/buy_crypto" className={style.navSubLink}>
            <BsCreditCard2BackFill className={style.navSubIcon} />
            <span className={style.navSubText}>{t('header.buy_menu.items.first')}</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/buy_crypto/bank" className={style.navSubLink}>
            <BsBank2 className={style.navSubIcon} />
            <span className={style.navSubText}>{t('header.buy_menu.items.second')}</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/buy_crypto/p2p" className={style.navSubLink}>
            <SiHiveBlockchain className={style.navSubIcon} />
            <span className={style.navSubText}>{t('header.buy_menu.items.third')}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BuyCrypto;
