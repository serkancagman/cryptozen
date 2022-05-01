import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import {
  BsCreditCard2BackFill,
  BsBank2,
  BsClipboardData,
} from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import { MdPriceChange } from "react-icons/md";
import { AiOutlineRise, AiOutlineGlobal } from "react-icons/ai";
// Buy List Dropdown Menu
export const buyList = (
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
);

// Markets Dropdown Menu

export const martketList = (
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
);
