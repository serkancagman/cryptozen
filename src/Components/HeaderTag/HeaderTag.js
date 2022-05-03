import React from "react";
import style from "./Style/HeaderTag.module.css";
import { BsCurrencyBitcoin } from "react-icons/bs";
const HeaderTag = ({ title }) => {
  return (
    <div className={style.headerTag}>
      <BsCurrencyBitcoin className={style.tagIcon} />{" "}
      <span className={style.tagTitle}>{title}</span>
    </div>
  );
};

export default HeaderTag;
