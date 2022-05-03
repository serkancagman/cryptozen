import React from "react";
import style from "./Style/TopList.module.css";
import { getCoinList } from "API/Api";
import { useQuery } from "react-query";
import PopularItem from "./PopularItem";
const TopList = () => {
  const { data, isLoading, error } = useQuery("coinList", () =>
    getCoinList("USD")
  );

  return (
    <section className={style.topList}>
      <div className="container">
        <div className="row g-3">
          {!isLoading && !error && (
            <>
              <PopularItem coin={data[0]} />
              <PopularItem coin={data[1]} />
              <PopularItem coin={data[2]} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopList;
