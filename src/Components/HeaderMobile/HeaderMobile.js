import React from "react";
import style from "./Style/HeaderMobile.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const HeaderMobile = () => {
  return (
  
     
        <div className={style.header_mobile}>
          <button className={style.btn_menu}>
            <GiHamburgerMenu />
          </button>
          <nav className={style.nav}></nav>
        </div>
     
  );
};

export default HeaderMobile;
