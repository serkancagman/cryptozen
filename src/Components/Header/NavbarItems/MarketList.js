import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import { MdPriceChange } from "react-icons/md";
import { AiOutlineRise, AiOutlineGlobal } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
const MarketList = () => {
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <li className={style.navSubItem}>
          <Link to="/market_list" className={style.navSubLink}>
            <MdPriceChange className={style.navSubIcon} />
            <span className={style.navSubText}>Market Price</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/market_tracker" className={style.navSubLink}>
            <AiOutlineRise className={style.navSubIcon} />
            <span className={style.navSubText}>Market Tracker</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/big_data" className={style.navSubLink}>
            <BsClipboardData className={style.navSubIcon} />
            <span className={style.navSubText}>Big Data</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/coins" className={style.navSubLink}>
            <AiOutlineGlobal className={style.navSubIcon} />
            <span className={style.navSubText}>Global Currencies</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MarketList;
