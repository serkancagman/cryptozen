import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { Link } from "react-router-dom";
import { GiTwoCoins, GiInjustice, GiMining } from "react-icons/gi";
import { FaFileInvoiceDollar, FaCubes } from "react-icons/fa";
import { RiTimerFlashFill, RiCoinsFill } from "react-icons/ri";
import { BsCircleSquare, BsCloudMinusFill } from "react-icons/bs";
const Earn = () => {
  return (
    <ul className={style.nav_list_sub}>
      <h6 className={style.nav_link_sub_header}> Earn </h6>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <GiTwoCoins className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>HODL & Earn</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            A one stop investment center with a variety of products.
          </p>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <FaFileInvoiceDollar className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Structured Products</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Pre-packed products that include assets linked to interest and
            derivatives.
          </p>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <RiTimerFlashFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Auto Inverstment</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            One-click investment, flexible portfolio, redeemable and changeable
            anytime.
          </p>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <RiCoinsFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Crypto Lending</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            A investment to lend your crypto at specified interest rate and loan
            term to get earnings.
          </p>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <FaCubes className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Crypto Loan</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Crypto loan is to pledge one crypto to borrow another.
          </p>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <GiInjustice className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Margin Borrowing</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Borrowing to amplify your buying power with your own holdings as
            margin.
          </p>
        </div>
      </li>
      <h6 className={style.nav_link_sub_header}> Mining </h6>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <GiMining className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Liquidity Mining</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Earn income from fees by providing Dual-Assets liquidity to the
            market.
          </p>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsCircleSquare className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>
            Lending & Single-Asset Vault
          </span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Provide Single-Asset liquidity to earn income. Deposit or withdraw
            anytime.
          </p>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsCloudMinusFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Cloud Mining</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Mining cryptocurrency without buying hardware.
          </p>
        </div>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsCloudMinusFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Slot Auctions</span>
        </Link>
        <div className={style.nav_list_sub_Inner}>
          <p className={style.nav_link_sub_text}>
            {" "}
            Participate in parachain auctions & receive rewards.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Earn;
