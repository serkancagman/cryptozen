import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { Link } from "react-router-dom";
import {
  RiCustomerService2Fill,
  RiMessage2Fill,
  RiBugFill,
} from "react-icons/ri";
const Help = () => {
  return (
    <ul className={style.nav_list_sub}>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <RiCustomerService2Fill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Live Chat</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <RiMessage2Fill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Submit Request</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <RiBugFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Bug Bounty</span>
        </Link>
      </li>
    </ul>
  );
};

export default Help;
