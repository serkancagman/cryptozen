import React from "react";
import { Collapse } from "antd";
import style from "./Style/Faq.module.css";
import { useTranslation } from "react-i18next";
const TabFirst = () => {
  const { Panel } = Collapse;
  const { t } = useTranslation();

  return (
    <Collapse ghost={true}>
      <Panel header={t("faq.items.first.first_item.question")} key="1">
        <p className={style.faqText}>
          {t("faq.items.first.first_item.answer")}
        </p>
      </Panel>
      <Panel header={t("faq.items.first.second_item.question")} key="2">
        <p className={style.faqText}>
          {t("faq.items.first.second_item.answer")}
        </p>
      </Panel>
      <Panel header={t("faq.items.first.third_item.question")} key="3">
        <p className={style.faqText}>
          {t("faq.items.first.third_item.answer")}
        </p>
      </Panel>
      <Panel header={t("faq.items.first.fourth_item.question")} key="4">
        <p className={style.faqText}>
          {t("faq.items.first.fourth_item.answer")}
        </p>
      </Panel>
    </Collapse>
  );
};

export default TabFirst;
