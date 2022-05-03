import React from "react";
import { Collapse } from "antd";
import style from "./Style/Faq.module.css";
const TabThird = () => {
  const { Panel } = Collapse;

  return (
    <Collapse ghost={true}>
      <Panel header="Third Tab Question" key="1">
        <p className={style.faqText}>
          Monotonectally productivate virtual benefits vis-a-vis clicks ship.
          Seamlessly generate user friendly content.
        </p>
      </Panel>
      <Panel header="Is Payment Safe ?" key="2">
        <p className={style.faqText}>
          Monotonectally productivate virtual benefits vis-a-vis clicks ship.
          Seamlessly generate user friendly content.
        </p>
      </Panel>
      <Panel header="How Can i Buy a Token ?" key="3">
        <p className={style.faqText}>
          Monotonectally productivate virtual benefits vis-a-vis clicks ship.
          Seamlessly generate user friendly content.
        </p>
      </Panel>
      <Panel header="Dolor sit amet" key="4">
        <p className={style.faqText}>
          Monotonectally productivate virtual benefits vis-a-vis clicks ship.
          Seamlessly generate user friendly content.
        </p>
      </Panel>
    </Collapse>
  );
};

export default TabThird;
