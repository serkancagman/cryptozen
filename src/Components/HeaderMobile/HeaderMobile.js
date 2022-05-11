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

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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
              Buy Crypto <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <BuyCrypto />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              Markets <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <Markets />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              Trade <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <Trade />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              Earn <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <Earn />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              Copy Trading <span className={style.nav_link_tag}>NEW</span>
            </span>
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              News <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <News />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              Giveaways <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <Giveaways />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              NFT Box <span className={style.nav_link_tag}>HOT</span>{" "}
              <TiArrowSortedDown className={style.nav_icon} />
            </span>
            <NftBox />
          </li>
          <li className={style.nav_item}>
            <span to="/#" className={style.nav_link}>
              Startup
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
              <RiCustomerService2Fill className={style.nav_icon} /> Customer Service
            </span>
            <Help />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobile;
