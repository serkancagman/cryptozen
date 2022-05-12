import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import { AiFillGift } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
const GiveawayList = () => {
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <li className={style.navSubItem}>
          <Link to="/rewards/activity" className={style.navSubLink}>
            <AiFillGift className={style.navSubIcon} />
            <span className={style.navSubText}>Bonus Campaigns</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/rewards/task" className={style.navSubLink}>
            <BiTask className={style.navSubIcon} />
            <span className={style.navSubText}>Tasks & Bonuses</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/referral" className={style.navSubLink}>
            <FaCoins className={style.navSubIcon} />
            <span className={style.navSubText}>My Referrals</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GiveawayList;
