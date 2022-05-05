import React from "react";
import { useQuery } from "react-query";
import { getAllCoinList } from "API/Api";
import style from "./Style/Market.module.css";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { useSelector } from "react-redux";
const MarketTable = () => {
  const { currency, currencyIcon } = useSelector((state) => state.currency);
  const { data, isLoading, error } = useQuery(["allCoinList", currency], () =>
    getAllCoinList(currency)
  );
  const columns = React.useMemo(() => {
    return [
      {
        title: "Market",
        dataIndex: "symbol",
        key: "symbol",
        render: (text, record) => (
          <div className="d-flex align-items-center justify-content-start">
            <div className={style.tableImgWrapper}>
              <img
                src={record.image}
                alt={record.name}
                className={style.tableImage}
              />{" "}
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <div className="d-flex justify-content-center align-items-center">
                <Link to={`/market_list/${record.id}`} className={style.shortName}>
                  {record.symbol}
                </Link>
                <span className={style.tableCurrency}>/{currency}</span>
              </div>
              <span className={style.tableName}>{record.id}</span>
            </div>
          </div>
        ),
      },
      {
        title: "Price",
        dataIndex: "current_price",
        key: "current_price",
        render: (text, record) => (
          <div className="d-flex justify-content-start align-items-center">
            <span
              className={`${style.tablePrice} ${
                record.market_cap_change_percentage_24h > 0
                  ? style.priceUp
                  : style.priceDown
              }`}
            >
              {text}
            </span>
            {record.market_cap_change_percentage_24h > 0 ? (
              <BsArrowUp className={style.tableIconUp} />
            ) : (
              <BsArrowDown className={style.tableIconDown} />
            )}
          </div>
        ),
        sorter: (a, b) => a.current_price - b.current_price,
      },
      {
        title: "24H Change",
        dataIndex: "market_cap_change_percentage_24h",
        key: "market_cap_change_percentage_24h",
        render: (text, record) => (
          <span
            className={`${style.tablePrice} ${
              record.market_cap_change_percentage_24h > 0
                ? style.priceUp
                : style.priceDown
            }`}
          >
            {text.toFixed(2)}%
          </span>
        ),
        sorter: (a, b) =>
          a.market_cap_change_percentage_24h -
          b.market_cap_change_percentage_24h,
      },
      {
        title: "High",
        dataIndex: "high_24h",
        key: "high_24h",
        render: (text) => <span className={style.tablePrice}>{text}</span>,
        sorter: (a, b) => a.high_24h - b.high_24h,
      },
      {
        title: "Low",
        dataIndex: "low_24h",
        key: "low_24h",
        render: (text) => <span className={style.tablePrice}>{text}</span>,
        sorter: (a, b) => a.low_24h - b.low_24h,
      },
      {
        title: "Volume",
        dataIndex: "total_volume",
        key: "total_volume",
        render: (text) => (
          <span className={style.tablePrice}>{text.toLocaleString()}</span>
        ),
      },
      {
        title: "Market Cap",
        dataIndex: "market_cap",
        key: "market_cap",
        render: (text) => (
          <span className={style.tablePrice}>
            {currencyIcon + "" + text.toLocaleString()}
          </span>
        ),
        sorter: (a, b) => a.market_cap - b.market_cap,
      },

      {
        title: "Action",
        dataIndex: "name",
        key: "name",
        render: (text,record) => (
          <Link to={`/market_list/${record.id}`} className={style.tradeBtn}>
            Trade
          </Link>
        ),
      },
    ];
  }, [currency, currencyIcon]);

  return (
    <>
      {!isLoading && !error && (
        <Table
          rowClassName={(record, index) =>
            index % 2 === 0 ? style.firstRow : style.secondRow
          }
          size="small"
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      )}
    </>
  );
};

export default MarketTable;
