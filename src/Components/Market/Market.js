import HeaderTag from "Components/HeaderTag/HeaderTag";
import React from "react";
import MarketTable from "./MarketTable";
import style from "./Style/Market.module.css";
import { useTranslation } from "react-i18next";
const Market = () => {
  const { t } = useTranslation();
  return (
    <section className={style.market}>
      <div className={style.marketInner}>
        <div className="container">
          <div className={style.marketHeader}>
            <HeaderTag title={t('market.tag_text')} />
            <h2 className={style.marketTitle}>{t('market.main_title')}</h2>
            <p className={style.marketDesc}>{t('market.description')}</p>
          </div>
          <MarketTable />
        </div>
      </div>
      <div className={style.martketFade}></div>
    </section>
  );
};

export default Market;
