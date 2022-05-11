import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { Link } from "react-router-dom";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { GiAbstract002, GiStarFormation } from "react-icons/gi";
import { SiFacepunch } from "react-icons/si";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
const NftBox = () => {
  return (
    <ul className={style.nav_list_sub}>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <RiNotificationBadgeFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Offering/INO</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <GiAbstract002 className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>NFT Markets</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <GiStarFormation className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Featured NFTs</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <AiFillFire className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Top NFTs</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsPersonLinesFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>My Assets</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <SiFacepunch className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Open Punks</span>
        </Link>
      </li>
    </ul>
  );
};

export default NftBox;
