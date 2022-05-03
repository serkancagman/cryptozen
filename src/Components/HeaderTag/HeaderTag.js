import React from "react";
import style from "./Style/HeaderTag.module.css";
import { BsCurrencyBitcoin } from "react-icons/bs";
const HeaderTag = ({ title }) => {
  return (
    <div className={style.headerTag}>
      <div className="d-flex jutify-content-center align-items-center">
        <BsCurrencyBitcoin className={style.tagIcon} />{" "}
        <span className={style.tagTitle}>{title}</span>
      </div>
    </div>
  );
};

export default HeaderTag;
