import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsCheckLg } from "react-icons/bs";
import { setCurrency } from "Redux/CurrencySlice/CurrencySlice";
const Currency = () => {
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.currency);

  return (
    <ul className={style.nav_list_sub}>
      <li
        onClick={() => dispatch(setCurrency({ type: "USD", icon: "$" }))}
        className={style.nav_item_sub}
      >
        <span className={style.nav_link_sub}>
          <span className={style.nav_link_sub_text}>USD $</span>
          {currency === "USD" && (
            <BsCheckLg className={style.nav_link_sub_icon} />
          )}
        </span>
      </li>
      <li
        onClick={() => dispatch(setCurrency({ type: "EUR", icon: "€" }))}
        className={style.nav_item_sub}
      >
        <span className={style.nav_link_sub}>
          <span className={style.nav_link_sub_text}>EUR €</span>
          {currency === "EUR" && (
            <BsCheckLg className={style.nav_link_sub_icon} />
          )}
        </span>
      </li>
      <li
        onClick={() => dispatch(setCurrency({ type: "GBP", icon: "£" }))}
        className={style.nav_item_sub}
      >
        <span className={style.nav_link_sub}>
          <span className={style.nav_link_sub_text}>GBP £</span>
          {currency === "GBP" && (
            <BsCheckLg className={style.nav_link_sub_icon} />
          )}
        </span>
      </li>
      <li
        onClick={() => dispatch(setCurrency({ type: "TRY", icon: "₺" }))}
        className={style.nav_item_sub}
      >
        <span className={style.nav_link_sub}>
          <span className={style.nav_link_sub_text}>TRY ₺</span>
          {currency === "TRY" && (
            <BsCheckLg className={style.nav_link_sub_icon} />
          )}
        </span>
      </li>
    </ul>
  );
};

export default Currency;
