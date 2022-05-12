import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import { BsFilePost, BsFillChatDotsFill, BsNewspaper } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { BiNews, BiPodcast } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const NewsList = () => {
  const { t } = useTranslation();
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <li className={style.navSubItem}>
          <Link to="/posts" className={style.navSubLink}>
            <BsFilePost className={style.navSubIcon} />
            <span className={style.navSubText}>
              {" "}
              {t("header.news_menu.items.first")}
            </span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/live" className={style.navSubLink}>
            <MdLiveTv className={style.navSubIcon} />
            <span className={style.navSubText}>
              {t("header.news_menu.items.second")}
            </span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/cheatroom" className={style.navSubLink}>
            <BsFillChatDotsFill className={style.navSubIcon} />
            <span className={style.navSubText}>
              {t("header.news_menu.items.third")}
            </span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/news_live" className={style.navSubLink}>
            <BsNewspaper className={style.navSubIcon} />
            <span className={style.navSubText}>
              {t("header.news_menu.items.fourth")}
            </span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/blog" className={style.navSubLink}>
            <BiNews className={style.navSubIcon} />
            <span className={style.navSubText}>
              {t("header.news_menu.items.fifth")}
            </span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/podcast" className={style.navSubLink}>
            <BiPodcast className={style.navSubIcon} />
            <span className={style.navSubText}>
              {t("header.news_menu.items.sixth")}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsList;
