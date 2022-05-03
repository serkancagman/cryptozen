import HeaderTag from "Components/HeaderTag/HeaderTag";
import React from "react";
import style from "./Style/Faq.module.css";
import faqImg from "Assets/Faq/faq.png";
import TabFirst from "./TabFirst";
import TabSecond from "./TabSecond";
import TabThird from "./TabThird";
const Faq = () => {
  const [activeTab, setActiveTab] = React.useState("first");
  return (
    <section className={style.faq}>
      <div className="container">
        <div className={style.faqHeader}>
          <HeaderTag title="FAQS" />
          <h2 className={style.faqTitle}>Frequently Asked Questions</h2>
          <p className={style.faqText}>
            Monotonectally productivate virtual benefits vis-a-vis clicks ship.
            Seamlessly generate user friendly content.
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className={`${style.tab} ${
              activeTab === "first" ? style.active : ""
            }`}
            onClick={() => setActiveTab("first")}
          >
            General
          </button>
          <button
            className={`${style.tab} ${
              activeTab === "second" ? style.active : ""
            }`}
            onClick={() => setActiveTab("second")}
          >
            Token
          </button>
          <button
            className={`${style.tab} ${
              activeTab === "third" ? style.active : ""
            }`}
            onClick={() => setActiveTab("third")}
          >
            What is ICO?
          </button>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-md-12 col-lg-6">
            {activeTab === "first" && <TabFirst />}
            {activeTab === "second" && <TabSecond />}
            {activeTab === "third" && <TabThird />}
          </div>
          <div className="col-md-12 col-lg-6">
            <img src={faqImg} alt="faq" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
