import React from "react";
import style from "../Style/Header.module.css";
import { FaSearchDollar } from "react-icons/fa";
import { Dropdown } from "antd";

const Search = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const handleVisibleChange = (flag) => {
    setIsVisible(flag);
  };

  const menu = (
    <div className={style.navSubWrapper}>
      <div className={style.navSearchInner}>
        <div className={style.navSearch}>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className={style.navSearchInput}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
  return (
    <li className={style.navItem}>
      <Dropdown
        placement="bottomLeft"
        visible={isVisible}
        onVisibleChange={handleVisibleChange}
        overlay={menu}
      >
        <span className={style.dropdownLink}>
          <FaSearchDollar className={style.navItemIcon} />
        </span>
      </Dropdown>
    </li>
  );
};

export default Search;
