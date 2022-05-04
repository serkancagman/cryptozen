import React from "react";
import style from "../Style/Header.module.css";
import { FaSearchDollar } from "react-icons/fa";
import { Dropdown } from "antd";
import { searchCoin } from "API/Api";
const Search = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [searchItems,setSearchItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("");
  const handleVisibleChange = (flag) => {
    setIsVisible(flag);
  };
  const getSearchData = async (val) => {
    const res = await searchCoin(val);
    setSearchItems(res)
  };
  React.useEffect(() => {
    if (searchValue.length > 1) {
      getSearchData(searchValue)
    }
  }, [searchValue]);
console.log(searchItems);
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
