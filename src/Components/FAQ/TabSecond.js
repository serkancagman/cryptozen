import React from "react";
import { Collapse } from "antd";
import style from "./Style/Faq.module.css";
import { useTranslation } from "react-i18next";
const TabSecond = () => {
  const { Panel } = Collapse;
  const { t } = useTranslation();
  return (
    <Collapse ghost={true}>
      <Panel header={t("faq.items.second.first_item.question")} key="1">
        <p className={style.faqText}>
          {t("faq.items.second.first_item.answer")}
        </p>
      </Panel>
      <Panel header={t("faq.items.second.second_item.question")} key="2">
        <p className={style.faqText}>
          {t("faq.items.second.second_item.answer")}
        </p>
      </Panel>
      <Panel header={t("faq.items.second.third_item.question")} key="3">
        <p className={style.faqText}>
          {t("faq.items.second.third_item.answer")}
        </p>
      </Panel>
      <Panel header={t("faq.items.second.fourth_item.question")} key="4">
        <p className={style.faqText}>
          {t("faq.items.second.fourth_item.answer")}
        </p>
      </Panel>
    </Collapse>
  );
};

export default TabSecond;
