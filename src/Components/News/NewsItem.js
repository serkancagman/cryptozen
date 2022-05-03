import React from "react";
import style from "./Style/News.module.css";
import { BsCalendar4Week, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
const NewsItem = ({ imgUrl, date, title, text }) => {
  return (
    <div className="col-md-12 col-lg-4">
      <div className={style.newsItem}>
        <div className={style.newsItemImage}>
          <img src={imgUrl} alt="news" className={style.newImg} />
          <div className={style.newsItemFade}></div>
        </div>
        <div className={style.newsItemContent}>
          <div className="d-flex justify-content-start align-items-center">
            <BsCalendar4Week className={style.newsItemIcon} />
            <span className={style.newsItemIcon}> {date}</span>
          </div>
          <h3 className={style.newsItemTitle}>{title}</h3>
          <p className={style.newsItemText}>{text}</p>
          <Link to="/news" className={style.newsItemLink}>
            Read More <BsPlusLg />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
