import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import { AiFillGift } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const GiveawayList = () => {
  const { t } = useTranslation();
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <li className={style.navSubItem}>
          <Link to="/rewards/activity" className={style.navSubLink}>
            <AiFillGift className={style.navSubIcon} />
            <span className={style.navSubText}>{t("header.giveaway_menu.items.first.title")}</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/rewards/task" className={style.navSubLink}>
            <BiTask className={style.navSubIcon} />
            <span className={style.navSubText}>{t("header.giveaway_menu.items.second.title")}</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/referral" className={style.navSubLink}>
            <FaCoins className={style.navSubIcon} />
            <span className={style.navSubText}>{t("header.giveaway_menu.items.third.title")}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GiveawayList;
