import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { MdPriceChange } from "react-icons/md";
import { AiOutlineRise, AiOutlineGlobal } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { Link } from "react-router-dom";
const Markets = () => {
  return (
    <ul className={style.nav_list_sub}>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <MdPriceChange className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Market Price</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <AiOutlineRise className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Market Tracker</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsClipboardData className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Big Data</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <AiOutlineGlobal className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Global Currencies</span>
        </Link>
      </li>
    </ul>
  );
};

export default Markets;
