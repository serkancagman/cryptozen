import React from "react";
import style from "./Style/HeaderMobile.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCurrencyExchange } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { RiCustomerService2Fill, RiGlobalFill } from "react-icons/ri";
import logoImg from "Assets/Logo/logo.png";
import {
  Markets,
  BuyCrypto,
  Trade,
  Earn,
  News,
  Giveaways,
  NftBox,
  Languages,
  Currency,
  Help,
} from "./NavbarItems";
import Search from "Components/Header/NavbarItems/Search";
import { useTranslation } from "react-i18next";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();
  return (
    <div className={style.header_mobile}>
      <div className={style.header_mobile_inner}>
        <Link to="/" className={style.logo}>
          <img src={logoImg} className={style.logoImg} alt="logo" />
        </Link>
        <div className="d-flex align-items-center justify-content-end">
          <Search />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`btn ${style.btn_menu}`}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <nav className={`${style.nav} ${isOpen && style.show_nav}`}>
        <ul className={style.nav_list}>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              {t("header.buy_menu.title")}{" "}
              <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <BuyCrypto />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              {t("header.market_menu.title")}{" "}
              <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <Markets />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              {t("header.trade_menu.title")}{" "}
              <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <Trade />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              {t("header.earn_menu.title")}{" "}
              <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <Earn />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              {t("header.news_menu.title")}{" "}
              <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <News />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              {t("header.giveaway_menu.title")}{" "}
              <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <Giveaways />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              {t("header.nft_menu.title")}{" "}
              <span className={style.nav_link_tag}>HOT</span>{" "}
              <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <NftBox />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              {t("header.startup_menu.title")}
            </span>
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              <RiGlobalFill className={style.nav_icon} /> Language
            </span>
            <Languages />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              <BsCurrencyExchange className={style.nav_icon} /> Currency
            </span>
            <Currency />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              <RiCustomerService2Fill className={style.nav_icon} /> Customer
              Service
            </span>
            <Help />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobile;
