import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { Link } from "react-router-dom";
import { AiFillGift } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
const Giveaways = () => {
  return (
    <ul className={style.nav_list_sub}>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <AiFillGift className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Bonus Campaigns</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BiTask className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Tasks & Bonuses</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <FaCoins className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>My Referrals</span>
        </Link>
      </li>
    </ul>
  );
};

export default Giveaways;
