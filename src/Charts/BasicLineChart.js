import React from "react";
import { TinyLine } from "@ant-design/plots";
const BasicLineChart = ({data,currentColor}) => {

  const config = {
    height: 1000,
    width: 200,
    autoFit: false,
    data,
    smooth: true,
    renderer: "svg",
    color: currentColor

    
  };
  return <TinyLine {...config} />;
};

export default BasicLineChart;
