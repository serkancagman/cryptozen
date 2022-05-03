import React from "react";
import { Collapse } from "antd";
import style from "./Style/Faq.module.css";
const TabSecond = () => {
  const { Panel } = Collapse;

  return (
    <Collapse ghost={true}>
      <Panel header="What is Token ?" key="1">
        <p className={style.faqText}>
          Monotonectally productivate virtual benefits vis-a-vis clicks ship.
          Seamlessly generate user friendly content.
        </p>
      </Panel>
      <Panel header="Dolor Sit Amet ?" key="2">
        <p className={style.faqText}>
          Monotonectally productivate virtual benefits vis-a-vis clicks ship.
          Seamlessly generate user friendly content.
        </p>
      </Panel>
      <Panel header="Dolor Sit Amet ?" key="3">
        <p className={style.faqText}>
          Monotonectally productivate virtual benefits vis-a-vis clicks ship.
          Seamlessly generate user friendly content.
        </p>
      </Panel>
      <Panel header="Dolor Sit Amet ?" key="4">
        <p className={style.faqText}>
          Monotonectally productivate virtual benefits vis-a-vis clicks ship.
          Seamlessly generate user friendly content.
        </p>
      </Panel>
    </Collapse>
  );
};

export default TabSecond;
