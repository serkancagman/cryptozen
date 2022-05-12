import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import style from "./Style/Featured.module.css";
import BasicLineChart from "Charts/BasicLineChart";
import { useSelector } from "react-redux";
import useWindowSize from "Hooks/useWindowSize";
import { useTranslation } from "react-i18next";
const FeaturedTable = ({ data }) => {
  const { currency, currencyIcon } = useSelector((state) => state.currency);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = React.useState(false);
  const { t } = useTranslation();
  React.useEffect(() => {
    if (width < 992) {
      setIsMobile(true);
    } else {
      return;
    }
  }, [width]);

  const columns = React.useMemo(() => {
    return [
      {
        title: t("featured.table.market"),
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
                <Link
                  to={`/market_list/${record.id}`}
                  className={style.tableCoinId}
                >
                  {record.symbol}
                </Link>
                <span className={style.tableCoinCurrency}>/{currency}</span>
              </div>
              <span className={style.tableName}>{record.id}</span>
            </div>
          </div>
        ),
      },
      {
        title: t("featured.table.price"),
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
        title: t("featured.table.volume"),
        dataIndex: "total_volume",
        key: "total_volume",
        render: (text, record) => (
          <span className={style.tableVolume}>
            {currencyIcon + "" + text.toLocaleString()}
          </span>
        ),
      },
      {
        title: `24H ${t("featured.table.change")}`,
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
        title: `${t("featured.table.chart")} (3D)`,
        dataIndex: "price",
        key: "price",
        render: (text, record) => (
          <div className={style.chart}>
            <BasicLineChart coin={record} />{" "}
          </div>
        ),
      },
      {
        title: t("featured.table.action"),
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
          <Link to={`/market_list/${record.id}`} className={style.tradeBtn}>
            {t("featured.table.action")}
          </Link>
        ),
      },
    ];
  }, [currency, currencyIcon, t]);

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
        scroll={{ x: isMobile }}
        rowKey="id"
      />
    </>
  );
};

export default FeaturedTable;
