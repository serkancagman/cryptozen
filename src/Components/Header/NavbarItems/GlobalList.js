import React from "react";
import style from "../Style/Header.module.css";
import { Dropdown } from "antd";
import { RiGlobalFill } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
const GlobalList = () => {
  const [lang, setLang] = React.useState("en");
  const [currency, setCurrency] = React.useState("USD");
  const menu = (
    <div className={style.navSubWrapper}>
      <div className={style.navGlobalInner}>
        <ul className={style.globalList}>
          <h6 className={style.globalListTitle}>Languages</h6>
          <li onClick={() => setLang("en")} className={style.globalListItem}>
            <span
              className={`${style.globalListItemText} ${
                lang === "en" && style.selectedLang
              }`}
            >
              English
            </span>
            {lang === "en" && (
              <BsCheckLg className={style.globalListItemIcon} />
            )}
          </li>
          <li onClick={() => setLang("tr")} className={style.globalListItem}>
            <span
              className={`${style.globalListItemText} ${
                lang === "tr" && style.selectedLang
              }`}
            >
              Türkçe
            </span>
            {lang === "tr" && (
              <BsCheckLg className={style.globalListItemIcon} />
            )}
          </li>
        </ul>

        <ul className={style.globalList}>
          <h6 className={style.globalListTitle}>Currencies</h6>
          <li
            onClick={() => setCurrency("USD")}
            className={style.globalListItem}
          >
            <span
              className={`${style.globalListItemText} ${
                currency === "USD" && style.selectedLang
              }`}
            >
              USD
            </span>
            {currency === "USD" && (
              <BsCheckLg className={style.globalListItemIcon} />
            )}
          </li>
          <li
            onClick={() => setCurrency("EUR")}
            className={style.globalListItem}
          >
            <span
              className={`${style.globalListItemText} ${
                currency === "EUR" && style.selectedLang
              }`}
            >
              EUR
            </span>
            {currency === "EUR" && (
              <BsCheckLg className={style.globalListItemIcon} />
            )}
          </li>
          <li
            onClick={() => setCurrency("TRY")}
            className={style.globalListItem}
          >
            <span
              className={`${style.globalListItemText} ${
                currency === "TRY" && style.selectedLang
              }`}
            >
              TRY
            </span>
            {currency === "TRY" && (
              <BsCheckLg className={style.globalListItemIcon} />
            )}
          </li>

          <li
            onClick={() => setCurrency("GBP")}
            className={style.globalListItem}
          >
            <span
              className={`${style.globalListItemText} ${
                currency === "GBP" && style.selectedLang
              }`}
            >
              GBP
            </span>
            {currency === "GBP" && (
              <BsCheckLg className={style.globalListItemIcon} />
            )}
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <li className={style.navItem}>
      <Dropdown placement="bottomLeft" overlay={menu}>
        <span className={style.dropdownLink}>
          <RiGlobalFill className={style.navItemIcon} />
        </span>
      </Dropdown>
    </li>
  );
};

export default GlobalList;
