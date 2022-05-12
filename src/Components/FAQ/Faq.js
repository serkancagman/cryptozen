import HeaderTag from "Components/HeaderTag/HeaderTag";
import React from "react";
import style from "./Style/Faq.module.css";
import faqImg from "Assets/Faq/faq.png";
import TabFirst from "./TabFirst";
import TabSecond from "./TabSecond";
import TabThird from "./TabThird";
import { useTranslation } from "react-i18next";
const Faq = () => {
  const [activeTab, setActiveTab] = React.useState("first");
  const { t } = useTranslation();
  return (
    <section className={style.faq}>
      <div className="container">
        <div className={style.faqHeader}>
          <HeaderTag title={t("faq.tag_text")} />
          <h2 className={style.faqTitle}>{t("faq.main_title")}</h2>
          <p className={style.faqText}>{t("faq.description")}</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <button
            className={`${style.tab} ${
              activeTab === "first" ? style.active : ""
            }`}
            onClick={() => setActiveTab("first")}
          >
            {t("faq.options.first")}
          </button>
          <button
            className={`${style.tab} ${
              activeTab === "second" ? style.active : ""
            }`}
            onClick={() => setActiveTab("second")}
          >
            {t("faq.options.second")}
          </button>
          <button
            className={`${style.tab} ${
              activeTab === "third" ? style.active : ""
            }`}
            onClick={() => setActiveTab("third")}
          >
            {t("faq.options.third")}
          </button>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-md-12 col-lg-6">
            {activeTab === "first" && <TabFirst />}
            {activeTab === "second" && <TabSecond />}
            {activeTab === "third" && <TabThird />}
          </div>
          <div className="col-md-12 text-center col-lg-6">
            <img src={faqImg} alt="faq" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
