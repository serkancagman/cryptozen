import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import style from "./Style/Featured.module.css";
import BasicLineChart from "Charts/BasicLineChart";
const FeaturedTable = ({ data }) => {
  const columns = React.useMemo(() => {
    return [
      {
        title: "Market",
        dataIndex: "symbol",
        key: "symbol",
        render: (text, record) => (
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center">
              <div className={style.tableImgWrapper}>
                <img
                  src={record.image}
                  alt={record.name}
                  className={style.tableImage}
                />{" "}
              </div>
              <Link className={style.tableCoinId} to={`coins/${record.id}`}>
                {text.toUpperCase()}
              </Link>{" "}
            </div>
            <span className={style.tableCoinCurrency}>/USD</span>
          </div>
        ),
      },
      {
        title: "Price",
        dataIndex: "current_price",
        key: "current_price",
        render: (text, record) => (
          <span
            className={`${style.tablePrice} ${
              record.market_cap_change_percentage_24h > 0
                ? style.priceUp
                : style.priceDown
            }`}
          >
            {text}
          </span>
        ),
      },
      {
        title: "Volume",
        dataIndex: "total_volume",
        key: "total_volume",
        render: (text, record) => (
          <span className={style.tableVolume}>${text.toLocaleString()}</span>
        ),
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
      },
      {
        title: "Price Trend (3D)",
        dataIndex: "price",
        key: "price",
        render: (text, record) => (
          <div className={style.chart}>
            <BasicLineChart coin={record} />{" "}
          </div>
        ),
      },
      {
        title: "Action",
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
          <Link to={`/coins/${record.id}`} className={style.tradeBtn}>
            Trade
          </Link>
        ),
      },
    ];
  }, [data]);

  return (
    <>
      <Table
        rowClassName={(record, index) =>
          index % 2 === 0 ? style.firstRow : style.secondRow
        }
        size="small"
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default FeaturedTable;
