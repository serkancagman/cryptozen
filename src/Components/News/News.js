import React from "react";
import style from "./Style/News.module.css";
import HeaderTag from "Components/HeaderTag/HeaderTag";
import newsImg from "Assets/News/news-1.png";
import newsImg2 from "Assets/News/news-2.jpg";
import newsImg3 from "Assets/News/news-3.png";
import NewsItem from "./NewsItem";
const News = () => {
  return (
    <section className={style.news}>
      <div className="container">
        <div className={style.newsHeader}>
          <HeaderTag title="Latest News" />
          <h2 className={style.newsTitle}>Recent Blog Post</h2>
        </div>
        <div className="row g-3">
          <NewsItem
            imgUrl={newsImg}
            date="Jan 20, 2022"
            title="How to invest in ICO"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc"
          />
          <NewsItem
            imgUrl={newsImg2}
            date="Jan 23, 2022"
            title="Cryptocash is a clean & modern coin"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc"
          />
          <NewsItem
            imgUrl={newsImg3}
            date="Jan 27, 2022"
            title="Pros & Cons of Premined Crypto"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc"
          />
        </div>
      </div>
    </section>
  );
};

export default News;
