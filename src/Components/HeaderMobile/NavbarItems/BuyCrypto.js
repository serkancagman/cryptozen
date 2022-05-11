import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { BsCreditCard2BackFill, BsBank2 } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import { Link } from "react-router-dom";
const BuyCrypto = () => {
  return (
    <ul className={style.nav_list_sub}>
      <li className={style.nav_item_sub}>
        <Link to="/buy/list" className={style.nav_link_sub}>
          <BsCreditCard2BackFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Credit Card</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/buy/list" className={style.nav_link_sub}>
          <BsBank2 className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Bank Transfer</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/buy/list" className={style.nav_link_sub}>
          <SiHiveBlockchain className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>P2P Trade</span>
        </Link>
      </li>
    </ul>
  );
};

export default BuyCrypto;
