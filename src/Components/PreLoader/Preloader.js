import React from "react";
import "./Style/Preloader.css";
const Preloader = () => {
  return (
    <div className="loader_main">
      <div className="loading_wrapper">
        <div className="loading_dot"></div>
        <div className="loading_dot"></div>
        <div className="loading_dot"></div>
        <div className="loading_dot"></div>
        <div className="loading_dot"></div>
      </div>
    </div>
  );
};

export default Preloader;
