import React from "react";
import { Table, Switch, Rate, Tooltip, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllCoinList } from "API/Api";
import { useSelector } from "react-redux";
import { BiSearchAlt } from "react-icons/bi";
import style from "./Style/Product.module.css";
import useNumberStep from "Hooks/useNumberStep";
const ProductTable = () => {
  const [simpleTable, setSimpleTable] = React.useState(false);
  const { currency, currencyIcon } = useSelector((state) => state.currency);
  const { data, isLoading, error } = useQuery(["allCoinList", currency], () =>
    getAllCoinList(currency)
  );

  function onChange(checked) {
    setSimpleTable(checked);
  }

  const shortedNumber = useNumberStep;

  const columns = React.useMemo(() => {
    return [
      {
        title: "Coin",
        dataIndex: "symbol",
        key: "symbol",

        render: (text, record) => (
          <div className="d-flex align-items-center justify-content-start">
            <div className={simpleTable ? "d-none" : style.tableImgWrapper}>
              <img
                src={record.image}
                alt={record.name}
                className={style.tableImage}
              />{" "}
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <Link
                to={`/market_list/${record.id}`}
                className={style.tableName}
              >
                {record.symbol}
              </Link>
              <span className={style.tableNameLong}>{record.id}</span>
            </div>
          </div>
        ),
      },
      {
        title: "Price",
        dataIndex: "current_price",

        key: "current_price",
        render: (text, record) => (
          <span className={style.tablePrice}>{record.current_price}</span>
        ),
        sorter: (a, b) => a.current_price - b.current_price,
      },
      {
        title: "24h %",
        dataIndex: "market_cap_change_percentage_24h",
        key: "market_cap_change_percentage_24h",

        render: (text, record) => (
          <div className="d-flex justify-content-center flex-column align-items-end">
            <span
              className={`${style.tableChange} ${
                record.market_cap_change_percentage_24h > 0
                  ? style.priceUp
                  : style.priceDown
              }`}
            >
              {text.toFixed(2)}%
            </span>
            <span className={simpleTable ? "d-none" : style.tableVolume}>
              {shortedNumber(record.total_volume)}
            </span>
          </div>
        ),
        sorter: (a, b) =>
          a.market_cap_change_percentage_24h -
          b.market_cap_change_percentage_24h,
      },
      {
        title: "⭐",
        dataIndex: "id",
        key: "id",
        width: 30,
        render: (text, record) => (
          <div className="d-flex align-items-center ">
            <Rate count={1} className={style.tableStar} />
          </div>
        ),
      },
    ];
  }, [currencyIcon, currency, simpleTable]);

  return (
    <div className={style.tableWrapper}>
      <div className={style.tableInner}>
        <div className={style.tableTop}>
          <div className="d-flex justify-content-between align-items-center">
            <form className="w-100 me-3">
              <div className={style.inputWrapper}>
                <input
                  type="text"
                  className={style.searchInput}
                  placeholder="Search..."
                />

                <BiSearchAlt className={style.searchIcon} />
              </div>
            </form>
            <Tooltip title="Simple mode">
              <Switch onChange={onChange} />
            </Tooltip>
          </div>
        </div>
        <div className={style.tableBody}>
          {!isLoading && !error && (
            <Table
              className={style.tableProduct}
              rowClassName={(record, index) =>
                index % 2 === 0 ? style.firstRow : style.secondRow
              }
              columns={columns}
              dataSource={data}
              scroll={{ y: 700 }}
              pagination={false}
              size="small"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
