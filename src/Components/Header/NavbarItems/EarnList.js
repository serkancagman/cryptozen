import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";
import { FaFileInvoiceDollar, FaCubes } from "react-icons/fa";
import { RiTimerFlashFill, RiCoinsFill } from "react-icons/ri";
import { GiInjustice, GiMining } from "react-icons/gi";
import { BsCircleSquare, BsCloudMinusFill } from "react-icons/bs";
const EarnList = () => {
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <h6 className={style.navSubHeader}>Earn</h6>
        <li className={style.navSubItem}>
          <Link to="/hodl" className={style.navSubStartLink}>
            <GiTwoCoins className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>HODL & Earn</span>
              <p className={style.navSubTextBottom}>
                A one stop investment center with a variety of products.
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/structured" className={style.navSubStartLink}>
            <FaFileInvoiceDollar className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>Structured Products</span>
              <p className={style.navSubTextBottom}>
                Pre-packed products that include assets linked to interest and
                derivatives.
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/autoinvest" className={style.navSubStartLink}>
            <RiTimerFlashFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>Auto Inverstment</span>
              <p className={style.navSubTextBottom}>
                One-click investment, flexible portfolio, redeemable and
                changeable anytime.
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/margin/lend/USD" className={style.navSubStartLink}>
            <RiCoinsFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>Crypto Lending</span>
              <p className={style.navSubTextBottom}>
                A investment to lend your crypto at specified interest rate and
                loan term to get earnings.
              </p>
            </div>
          </Link>
        </li>
      </ul>
      <ul className={style.navSubList}>
        <h6 className={style.navSubHeader}>Loan</h6>
        <li className={style.navSubItem}>
          <Link to="/cryptoloan/usd" className={style.navSubStartLink}>
            <FaCubes className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>Crypto Loan</span>
              <p className={style.navSubTextBottom}>
                Crypto loan is to pledge one crypto to borrow another.
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/margin/borrow" className={style.navSubStartLink}>
            <GiInjustice className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>Margin Borrowing</span>
              <p className={style.navSubTextBottom}>
                Borrowing to amplify your buying power with your own holdings as
                margin.
              </p>
            </div>
          </Link>
        </li>
      </ul>
      <ul className={style.navSubList}>
        <h6 className={style.navSubHeader}>Mining</h6>
        <li className={style.navSubItem}>
          <Link to="/liquidity" className={style.navSubStartLink}>
            <GiMining className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>Liquidity Mining</span>
              <p className={style.navSubTextBottom}>
                Earn income from fees by providing Dual-Assets liquidity to the
                market.
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/lending/liquidity" className={style.navSubStartLink}>
            <BsCircleSquare className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>
                Lending & Single-Asset Vault
              </span>
              <p className={style.navSubTextBottom}>
                Provide Single-Asset liquidity to earn income. Deposit or
                withdraw anytime.
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/cloud_mining" className={style.navSubStartLink}>
            <BsCloudMinusFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>Cloud Mining</span>
              <p className={style.navSubTextBottom}>
                Mining cryptocurrency without buying hardware.
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/slot_auctions" className={style.navSubStartLink}>
            <BsCloudMinusFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>Slot Auctions</span>
              <p className={style.navSubTextBottom}>
                Participate in parachain auctions & receive rewards.
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EarnList;
