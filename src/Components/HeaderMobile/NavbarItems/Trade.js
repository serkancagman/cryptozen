import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { Link } from "react-router-dom";
import {
  AiOutlineSwap,
  AiOutlineFieldTime,
  AiFillSetting,
} from "react-icons/ai";
import { GiInjustice, GiTransform, GiBearFace } from "react-icons/gi";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
const Trade = () => {
  return (
    <ul className={style.nav_list_sub}>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <AiOutlineSwap className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Market Price</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Crypto-to-crypto trading, such as selling USDT for BTC
          </p>
          <div className="d-flex justify-content-center align-items-center my-1">
            <Link to="/#" className={style.btn_sub}>
              {" "}
              Standart{" "}
            </Link>
            <span className={style.btn_sub}>|</span>
            <Link to="/#" className={style.btn_sub}>
              {" "}
              Professional{" "}
            </Link>
          </div>
        </div>
      </li>

      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <GiInjustice className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Margin Trading</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Borrowing from other users to amplify the profit and loss
          </p>
          <div className="d-flex justify-content-center align-items-center my-1">
            <Link to="/#" className={style.btn_sub}>
              {" "}
              Standart{" "}
            </Link>
            <span className={style.btn_sub}>|</span>
            <Link to="/#" className={style.btn_sub}>
              {" "}
              Professional{" "}
            </Link>
          </div>
        </div>
      </li>

      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <MdOutlineGeneratingTokens className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Leveraged Tokens</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Enjoy up to 5X leveraged trading with Gate.io Leveraged ETF Tokens
          </p>
        </div>
      </li>

      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <CgArrowsExchangeAltV className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Push Transactions</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Push Transactions / Transfer an asset at a given price to another
            account using the Push function, a peer-to-peer sell/buy operation
          </p>
        </div>
      </li>

      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <RiExchangeDollarLine className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Flash Swap</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Swap one currency with another in one click
          </p>
        </div>
      </li>

      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsFileEarmarkPersonFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Perpetual</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            A crypto derivative. It differs from the traditional futures mainly
            because it has no settlement date
          </p>
          <div className="d-flex justify-content-center align-items-center my-1">
            <Link to="/#" className={style.btn_sub}>
              {" "}
              USD - MARGIN{" "}
            </Link>
            <span className={style.btn_sub}>|</span>
            <Link to="/#" className={style.btn_sub}>
              {" "}
              BTC - MARGIN{" "}
            </Link>
            <span className={style.btn_sub}>|</span>
            <Link to="/#" className={style.btn_sub}>
              {" "}
              Perpetual Contract (Testnet){" "}
            </Link>
          </div>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <AiOutlineFieldTime className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Margin Trading</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Borrowing from other users to amplify the profit and loss
          </p>
          <div className="d-flex justify-content-center align-items-center my-1">
            <Link to="/#" className={style.btn_sub}>
              {" "}
              Standart{" "}
            </Link>
            <span className={style.btn_sub}>|</span>
            <Link to="/#" className={style.btn_sub}>
              {" "}
              Professional{" "}
            </Link>
          </div>
        </div>
      </li>

      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <AiFillSetting className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Options</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            European options group with put and call options of different strike
            prices and exercise dates.
          </p>
        </div>
      </li>

      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <GiBearFace className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>CBBC</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            European options group with put and call options of different strike
            prices and exercise dates.
          </p>
        </div>
      </li>

      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <GiTransform  className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Warrant</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            If you are bullish on the price movement of the underlying asset,buy
            a call warrant;if you are bearish,buy a put warrant
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Trade;
