import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import {
  AiOutlineSwap,
  AiOutlineFieldTime,
  AiFillSetting,
} from "react-icons/ai";
import { GiInjustice, GiTransform, GiBearFace } from "react-icons/gi";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const TradeList = () => {
  const { t } = useTranslation();
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <h6 className={style.navSubHeader}>Spot</h6>
        <li className={style.navSubItem}>
          <span className={style.navSubStartLink}>
            <AiOutlineSwap className={style.navSubIcon} />
            <div className={style.navSubTextWrapper}>
              <span className={style.navSubText}>{t('header.trade_menu.items.first.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.first.description')}
              </p>
              <div className={style.navSubLinkOptionsWrapper}>
                <div className={style.navSubLinkOptions}>
                  <Link to="/spot_trade" className={style.navSubOptionLink}>
                    {" "}
                    Standart{" "}
                  </Link>
                  <span className={style.navSubOptionLinkDash}> | </span>
                  <Link to="/spot_trade/pro" className={style.navSubOptionLink}>
                    {" "}
                    Professional{" "}
                  </Link>
                </div>
              </div>
            </div>
          </span>
        </li>
        <li className={style.navSubItem}>
          <span className={style.navSubStartLink}>
            <GiInjustice className={style.navSubIcon} />
            <div className={style.navSubTextWrapper}>
              <span className={style.navSubText}>{t('header.trade_menu.items.second.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.second.description')}
              </p>
              <div className={style.navSubLinkOptionsWrapper}>
                <div className={style.navSubLinkOptions}>
                  <Link to="/margin_trade" className={style.navSubOptionLink}>
                    {" "}
                    Standart{" "}
                  </Link>
                  <span className={style.navSubOptionLinkDash}> | </span>
                  <Link
                    to="/margin_trade/pro"
                    className={style.navSubOptionLink}
                  >
                    {" "}
                    Professional{" "}
                  </Link>
                </div>
              </div>
            </div>
          </span>
        </li>
        <li className={style.navSubItem}>
          <Link to="/margin_trade" className={style.navSubStartLink}>
            <MdOutlineGeneratingTokens className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t('header.trade_menu.items.third.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.third.description')}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/push_exchange" className={style.navSubStartLink}>
            <CgArrowsExchangeAltV className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t('header.trade_menu.items.fourth.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.fourth.description')}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/convert" className={style.navSubStartLink}>
            <RiExchangeDollarLine className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t('header.trade_menu.items.fifth.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.fifth.description')}
              </p>
            </div>
          </Link>
        </li>
      </ul>
      <ul className={style.navSubList}>
        <h6 className={style.navSubHeader}>Derivative</h6>
        <li className={style.navSubItem}>
          <span className={style.navSubStartLink}>
            <BsFileEarmarkPersonFill className={style.navSubIcon} />
            <div className={style.navSubTextWrapper}>
              <span className={style.navSubText}>{t('header.trade_menu.items.sixth.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.sixth.description')}
              </p>
              <div className={style.navSubLinkOptionsWrapper}>
                <div className={style.navSubLinkOptions}>
                  <Link
                    to="/futures_trade/USD/BTC_USD"
                    className={style.navSubOptionLink}
                  >
                    {" "}
                    USD - Margin{" "}
                  </Link>
                  <span className={style.navSubOptionLinkDash}> | </span>
                  <Link
                    to="/futures_trade/BTC/BTC_USD"
                    className={style.navSubOptionLink}
                  >
                    {" "}
                    BTC - Margin{" "}
                  </Link>
                  <Link to="/#" className={style.navSubOptionLink}>
                    {" "}
                    Perpetual Contract (Testnet){" "}
                  </Link>
                </div>
              </div>
            </div>
          </span>
        </li>
        <li className={style.navSubItem}>
          <span className={style.navSubStartLink}>
            <AiOutlineFieldTime className={style.navSubIcon} />
            <div className={style.navSubTextWrapper}>
              <span className={style.navSubText}>{t('header.trade_menu.items.seventh.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.seventh.description')}
              </p>
              <div className={style.navSubLinkOptionsWrapper}>
                <div className={style.navSubLinkOptions}>
                  <Link
                    to="/futures_delivery/usdt"
                    className={style.navSubOptionLink}
                  >
                    {" "}
                    Standart{" "}
                  </Link>
                  <span className={style.navSubOptionLinkDash}> | </span>
                  <Link
                    to="/futures_delivery/btc"
                    className={style.navSubOptionLink}
                  >
                    {" "}
                    Professional{" "}
                  </Link>
                </div>
              </div>
            </div>
          </span>
        </li>
        <li className={style.navSubItem}>
          <Link to="/options/BTC_USD" className={style.navSubStartLink}>
            <GiTransform className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t('header.trade_menu.items.eighth.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.eighth.description')}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/warrants/cbbc" className={style.navSubStartLink}>
            <GiBearFace className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t('header.trade_menu.items.ninth.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.ninth.description')}
              </p>
            </div>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/warrants/warrant" className={style.navSubStartLink}>
            <AiFillSetting className={style.navSubIcon} />
            <div className={style.navSubTextWrapperHoverless}>
              <span className={style.navSubText}>{t('header.trade_menu.items.tenth.title')}</span>
              <p className={style.navSubTextBottom}>
              {t('header.trade_menu.items.tenth.description')}
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TradeList;
