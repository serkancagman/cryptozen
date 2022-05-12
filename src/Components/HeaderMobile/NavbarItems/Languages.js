import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { BsCheckLg } from "react-icons/bs";
import i18next from "i18next";
const Languages = () => {
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

  return (
    <ul className={style.nav_list_sub}>
      <li onClick={() => handleChange("en")} className={style.nav_item_sub}>
        <span className={style.nav_link_sub}>
          <span className={style.nav_link_sub_text}>English</span>
          {lang === "en" && <BsCheckLg className={style.nav_link_sub_icon} />}
        </span>
      </li>
      <li onClick={() => handleChange("tr")} className={style.nav_item_sub}>
        <span className={style.nav_link_sub}>
          <span className={style.nav_link_sub_text}>Türkçe</span>
          {lang === "tr" && <BsCheckLg className={style.nav_link_sub_icon} />}
        </span>
      </li>
    </ul>
  );
};

export default Languages;
