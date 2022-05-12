import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";
import { FaFileInvoiceDollar, FaCubes } from "react-icons/fa";
import { RiTimerFlashFill, RiCoinsFill } from "react-icons/ri";
import { GiInjustice, GiMining } from "react-icons/gi";
import { BsCircleSquare, BsCloudMinusFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const EarnList = () => {
  const { t } = useTranslation();
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <h6 className={style.navSubHeader}>{t("header.earn_menu.title")}</h6>
        <li className={style.navSubItem}>
          <Link to="/hodl" className={style.navSubStartLink}>
            <GiTwoCoins className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>
                {t("header.earn_menu.items.first.title")}
              </span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.first.description")}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/structured" className={style.navSubStartLink}>
            <FaFileInvoiceDollar className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t("header.earn_menu.items.second.title")}</span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.second.description")}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/autoinvest" className={style.navSubStartLink}>
            <RiTimerFlashFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t("header.earn_menu.items.third.title")}</span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.third.description")}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/margin/lend/USD" className={style.navSubStartLink}>
            <RiCoinsFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t("header.earn_menu.items.fourth.title")}</span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.fourth.description")}
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
              <span className={style.navSubText}>{t("header.earn_menu.items.fifth.title")}</span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.fifth.description")}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/margin/borrow" className={style.navSubStartLink}>
            <GiInjustice className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t("header.earn_menu.items.sixth.title")}</span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.sixth.description")}
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
              <span className={style.navSubText}>{t("header.earn_menu.items.seventh.title")}</span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.seventh.description")}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/lending/liquidity" className={style.navSubStartLink}>
            <BsCircleSquare className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>
              {t("header.earn_menu.items.eighth.title")}
              </span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.eighth.description")}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/cloud_mining" className={style.navSubStartLink}>
            <BsCloudMinusFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t("header.earn_menu.items.ninth.title")}</span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.ninth.description")}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/slot_auctions" className={style.navSubStartLink}>
            <BsCloudMinusFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t("header.earn_menu.items.tenth.title")}</span>
              <p className={style.navSubTextBottom}>
                {t("header.earn_menu.items.tenth.description")}
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EarnList;
