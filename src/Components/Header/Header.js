import React from "react";
import { Link } from "react-router-dom";
import style from "./Style/Header.module.css";
import logo from "Assets/Logo/logo.png";
import logoMobile from "Assets/Logo/logomobile.png";
import { Dropdown } from "antd";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdMobileScreenShare } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import {

  tradeList,
  earnList,
  newsList,
  giveawayList,
  nftList,
} from "./NavbarItems/NavbarItems";
import { appList, helpList } from "./NavbarItems/RightNavItems";
import GlobalList from "./NavbarItems/GlobalList";
import { useTranslation } from "react-i18next";
import useWindowSize from "Hooks/useWindowSize";
import Search from "./NavbarItems/Search";
import HeaderMobile from "Components/HeaderMobile/HeaderMobile";
import {BuyCrypto,MarketList} from "./NavbarItems";
const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [pageHeight, setPageHeight] = React.useState({ height: 0 });
  const [isMobile, setIsMobile] = React.useState(false);
  const { width } = useWindowSize();
  const { t } = useTranslation();
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setPageHeight({ height: scrollTop });
  };
  React.useEffect(() => {
    if (pageHeight.height > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [pageHeight.height]);

  React.useEffect(() => {
    if (window.innerWidth < 1060) {
      setIsMobile(true);
    } else if (window.innerWidth > 1060 && isMobile) {
      setIsMobile(false);
    }
  }, [isMobile, width]);

  return (
    <header
      className={`${style.header} ${
        (isScrolled && style.scrolledHeader) ||
        (isMobile && style.scrolledHeader)
      }`}
    >
      <div className="container-fluid">
        {!isMobile ? (
          <nav className="navbar navbar-expand-lg ">
            <Link to="/" className="navbar-brand">
              <img src={logo} className={style.logo} alt="logo" />
              <img src={logoMobile} className={style.logoMobile} alt="logo" />
            </Link>
            <ul className="navbar-nav ms-2">
              <li className={style.navItem}>
                <Dropdown placement="bottom" overlay={BuyCrypto}>
                  <span className={style.dropdownLink} href="/#">
                    {t("header.buy_menu.title")}{" "}
                    <TiArrowSortedDown className={style.navIconUp} />
                  </span>
                </Dropdown>
              </li>
              <li className={style.navItem}>
                <Dropdown placement="bottom" overlay={MarketList}>
                  <span className={style.dropdownLink} href="/#">
                    {t("header.market_menu.title")}{" "}
                    <TiArrowSortedDown className={style.navIconUp} />
                  </span>
                </Dropdown>
              </li>
              <li className={style.navItem}>
                <Dropdown placement="bottom" overlay={tradeList}>
                  <span className={style.dropdownLink} href="/#">
                    {t("header.trade_menu.title")}{" "}
                    <TiArrowSortedDown className={style.navIconUp} />
                  </span>
                </Dropdown>
              </li>
              <li className={style.navItem}>
                <Dropdown placement="bottom" overlay={earnList}>
                  <span className={style.dropdownLink} href="/#">
                    {t("header.earn_menu.title")}{" "}
                    <TiArrowSortedDown className={style.navIconUp} />
                  </span>
                </Dropdown>
              </li>
              <li className={style.navItem}>
                <Dropdown placement="bottom" overlay={newsList}>
                  <span className={style.dropdownLink}>
                    {t("header.news_menu.title")}{" "}
                    <TiArrowSortedDown className={style.navIconUp} />
                  </span>
                </Dropdown>
              </li>
              <li className={style.navItem}>
                <Dropdown placement="bottom" overlay={giveawayList}>
                  <span className={style.dropdownLink}>
                    {t("header.giveaway_menu.title")}{" "}
                    <TiArrowSortedDown className={style.navIconUp} />
                  </span>
                </Dropdown>
              </li>
              <li className={style.navItem}>
                <Dropdown placement="bottom" overlay={nftList}>
                  <span className={style.dropdownLink}>
                    {t("header.nft_menu.title")}{" "}
                    <TiArrowSortedDown className={style.navIconUp} />
                    <span className={style.navLinkTag}>HOT</span>
                  </span>
                </Dropdown>
              </li>
              <li className={style.navItem}>
                <Link to="/startup" className={style.dropdownLink}>
                  {t("header.startup_menu.title")}
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className={style.navItem}>
                <Link to="/login" className={style.dropdownLink}>
                  {t("header.user_menu.items.first.title")}
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="/signup"
                  className={`${style.dropdownLink} ${style.dropdornSignupLink}`}
                >
                  {t("header.user_menu.items.second.title")}
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
        ) : (
          <HeaderMobile />
        )}
      </div>
    </header>
  );
};

export default Header;
