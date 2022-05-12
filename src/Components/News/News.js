import React from "react";
import style from "./Style/News.module.css";
import HeaderTag from "Components/HeaderTag/HeaderTag";
import newsImg from "Assets/News/news-1.png";
import newsImg2 from "Assets/News/news-2.jpg";
import newsImg3 from "Assets/News/news-3.png";
import NewsItem from "./NewsItem";
import { useTranslation } from "react-i18next";
const News = () => {
  const { t } = useTranslation();
  return (
    <section className={style.news}>
      <div className="container">
        <div className={style.newsHeader}>
          <HeaderTag title={t('news.tag_text')} />
          <h2 className={style.newsTitle}>{t('news.main_title')}</h2>
        </div>
        <div className="row g-3">
          <NewsItem
            imgUrl={newsImg}
            date={t('news.items.first.date')}
            title={t('news.items.first.title')}
            text={t('news.items.first.description')}
          />
          <NewsItem
            imgUrl={newsImg2}
            date={t('news.items.second.date')}
            title={t('news.items.second.title')}
            text={t('news.items.second.description')}
          />
          <NewsItem
            imgUrl={newsImg3}
            date={t('news.items.third.date')}
            title={t('news.items.third.title')}
            text={t('news.items.third.description')}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
