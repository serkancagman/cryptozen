import React from "react";
import style from "../Style/Header.module.css";
import { FaSearchDollar } from "react-icons/fa";
import { Dropdown } from "antd";
import { searchCoin, getDefaultSearchData } from "API/Api";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
const Search = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [searchItems, setSearchItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [defaultValue, setDefaultValue] = React.useState([]);
  const { data } = useQuery("defaultSearchData", () =>
    getDefaultSearchData("USD")
  );
  const handleVisibleChange = (flag) => {
    setIsVisible(flag);
  };
  const getSearchData = async (val) => {
    const res = await searchCoin(val);
    setSearchItems(res.coins);
  };
  React.useEffect(() => {
    if (searchValue.length > 1) {
      getSearchData(searchValue);
    } else {
      setSearchItems([]);
    }
  }, [searchValue]);

  React.useEffect(() => {
    if (data) {
      setDefaultValue(data);
    }
  }, [data]);
  React.useEffect(() => {
    if (!isVisible) {
      setSearchItems([]);
      setSearchValue("");
    }
  }, [isVisible]);
  const menu = (
    <div className={style.navSubWrapper}>
      <div className={style.searchWrapper}>
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
        <div className={style.navSearchTitle}>
          <span className={style.navSearchTitleText}>
            {searchItems.length > 0 ? "Search Results" : "Hot Searches"}
            {searchItems.length === 0 && (
              <span className={style.navLinkTag}>HOT</span>
            )}
          </span>
        </div>
        <ul className={style.searchList}>
          {searchItems.length > 0
            ? searchItems.map((item, index) => {
                return (
                  <li key={index} className={style.searchListItem}>
                    <Link
                      className={style.searchItemWrapper}
                      to={`/market_list/${item.id}`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <div className={style.searchListIconWrapper}>
                            <img
                              src={item.thumb}
                              alt="coin"
                              className={style.coinIcon}
                            />
                          </div>
                          <span className={style.searchListCoinName}>
                            {item.symbol}
                          </span>
                        </div>
                        <span className={style.coinRank}>
                          # {item.market_cap_rank}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })
            : defaultValue &&
              defaultValue.map((item, index) => {
                return (
                  <li key={index} className={style.searchListItem}>
                    <Link
                      className={style.searchItemWrapper}
                      to={`/market_list/${item.id}`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <div className={style.searchListIconWrapper}>
                            <img
                              src={item.image}
                              alt="coin"
                              className={style.coinIcon}
                            />
                          </div>
                          <span className={style.searchListCoinName}>
                            {item.symbol}
                          </span>
                        </div>
                        <span className={style.coinRank}>
                          # {item.market_cap_rank}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
        </ul>
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
