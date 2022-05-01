import React from "react";
import { Link } from "react-router-dom";
import style from "./Style/Header.module.css";
import logo from "Assets/Logo/logo.png";
import { Dropdown } from "antd";
import { buyList,marketList,tradeList,earnList } from "./NavbarItems/NavbarItems";
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
                  Buy Crypto
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={marketList}>
                <span className={style.dropdownLink} href="/#">
                  Markets
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={tradeList}>
                <span className={style.dropdownLink} href="/#">
                  Trade
                </span>
              </Dropdown>
            </li>
            <li className={style.navItem}>
              <Dropdown placement="bottom" overlay={earnList}>
                <span className={style.dropdownLink} href="/#">
                  Earn
                </span>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
