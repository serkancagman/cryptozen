import React from "react";
import { Link } from "react-router-dom";
import style from "./Style/Header.module.css";
import logo from "Assets/Logo/logo.png";
import { Dropdown } from "antd";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdMobileScreenShare } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import {
  buyList,
  marketList,
  tradeList,
  earnList,
  newsList,
  giveawayList,
  nftList,
} from "./NavbarItems/NavbarItems";
import { appList, helpList } from "./NavbarItems/RightNavItems";
import GlobalList from "./NavbarItems/GlobalList";
import Search from "./NavbarItems/Search";
const Header = () => {
  return (
    <header className={style.header}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg ">
          <Link to="/" className="navbar-brand">
            <img src={logo} className={style.logo} alt="logo" />
          </Link>
          <ul className="navbar-nav ms-2">
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={buyList}>
                <span className={style.dropdownLink} href="/#">
                  Buy Crypto <TiArrowSortedDown className={style.navIconUp} />
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={marketList}>
                <span className={style.dropdownLink} href="/#">
                  Markets <TiArrowSortedDown className={style.navIconUp} />
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={tradeList}>
                <span className={style.dropdownLink} href="/#">
                  Trade <TiArrowSortedDown className={style.navIconUp} />
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={earnList}>
                <span className={style.dropdownLink} href="/#">
                  Earn <TiArrowSortedDown className={style.navIconUp} />
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Link to="/strategybot" className={style.dropdownLink}>
                Copy Trading
                <span className={style.navLinkTag}>NEW</span>
              </Link>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={newsList}>
                <span className={style.dropdownLink}>
                  News <TiArrowSortedDown className={style.navIconUp} />
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={giveawayList}>
                <span className={style.dropdownLink}>
                  Giveaways <TiArrowSortedDown className={style.navIconUp} />
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={nftList}>
                <span className={style.dropdownLink}>
                  NFT BOX <TiArrowSortedDown className={style.navIconUp} />
                  <span className={style.navLinkTag}>HOT</span>
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Link to="/startup" className={style.dropdownLink}>
                Startup
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className={style.navItem}>
              <Link to="/login" className={style.dropdownLink}>
                Log In
              </Link>
            </li>
            <li className={style.navItem}>
              <Link
                to="/signup"
                className={`${style.dropdownLink} ${style.dropdornSignupLink}`}
              >
                Sign Up
              </Link>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottomLeft" overlay={appList}>
                <span className={style.dropdownLink}>
                  <MdMobileScreenShare className={style.navItemIcon} />
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottomLeft" overlay={helpList}>
                <span className={style.dropdownLink}>
                  <RiCustomerService2Fill className={style.navItemIcon} />
                </span>
              </Dropdown>
            </li>
            <GlobalList />
            <Search />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
