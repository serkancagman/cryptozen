import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import { BsFilePost, BsFillChatDotsFill, BsNewspaper } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { BiNews, BiPodcast } from "react-icons/bi";
const NewsList = () => {
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <li className={style.navSubItem}>
          <Link to="/posts" className={style.navSubLink}>
            <BsFilePost className={style.navSubIcon} />
            <span className={style.navSubText}>Posts</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/live" className={style.navSubLink}>
            <MdLiveTv className={style.navSubIcon} />
            <span className={style.navSubText}>Live Stream</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/cheatroom" className={style.navSubLink}>
            <BsFillChatDotsFill className={style.navSubIcon} />
            <span className={style.navSubText}>Chatroom</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/news_live" className={style.navSubLink}>
            <BsNewspaper className={style.navSubIcon} />
            <span className={style.navSubText}>News</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/blog" className={style.navSubLink}>
            <BiNews className={style.navSubIcon} />
            <span className={style.navSubText}>Cryptozen Blog</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/podcast" className={style.navSubLink}>
            <BiPodcast className={style.navSubIcon} />
            <span className={style.navSubText}>Podcast</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsList;
