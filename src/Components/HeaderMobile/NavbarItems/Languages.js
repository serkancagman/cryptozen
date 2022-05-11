import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "Redux/LangSlice/LangSlice";
import { BsCheckLg } from "react-icons/bs";
const Languages = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  return (
    <ul className={style.nav_list_sub}>
      <li
        onClick={() => dispatch(setLanguage("en"))}
        className={style.nav_item_sub}
      >
        <span className={style.nav_link_sub}>
          <span className={style.nav_link_sub_text}>English</span>
          {language === "en" && (
            <BsCheckLg className={style.nav_link_sub_icon} />
          )}
        </span>
      </li>
      <li
        onClick={() => dispatch(setLanguage("tr"))}
        className={style.nav_item_sub}
      >
        <span className={style.nav_link_sub}>
          <span className={style.nav_link_sub_text}>Türkçe</span>
          {language === "tr" && (
            <BsCheckLg className={style.nav_link_sub_icon} />
          )}
        </span>
      </li>
    </ul>
  );
};

export default Languages;
