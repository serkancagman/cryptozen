import React from "react";
import style from "../Style/Header.module.css";
import { Dropdown } from "antd";
import { RiGlobalFill } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "Redux/CurrencySlice/CurrencySlice";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const GlobalList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currency } = useSelector((state) => state.currency);
  const [lang, setLang] = React.useState();

  React.useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split("i18next=");
    if (parts.length === 2) {
      setLang(parts.pop().split(";").shift());
    }
  }, []);

  const handleChange = (value) => {
    setLang(value);
    i18next.changeLanguage(value);
  };

  const menu = (
    <div className={style.navSubWrapper}>
      <div className={style.navGlobalInner}>
        <ul className={style.globalList}>
          <h6 className={style.globalListTitle}>{t("header.lang_menu.title")}</h6>
          <li
            onClick={() => handleChange("en")}
            className={style.globalListItem}
          >
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
          <li
            onClick={() => handleChange("tr")}
            className={style.globalListItem}
          >
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
          <h6 className={style.globalListTitle}>{t("header.currency_menu.title")}</h6>
          <li
            onClick={() => dispatch(setCurrency({ type: "USD", icon: "$" }))}
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
            onClick={() => dispatch(setCurrency({ type: "EUR", icon: "€" }))}
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
            onClick={() => dispatch(setCurrency({ type: "TRY", icon: "₺" }))}
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
            onClick={() => dispatch(setCurrency({ type: "GBP", icon: "£" }))}
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
