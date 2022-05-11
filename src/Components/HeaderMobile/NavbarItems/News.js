import React from "react";
import style from "../Style/HeaderMobile.module.css";
import { Link } from "react-router-dom";
import { BsFilePost, BsFillChatDotsFill, BsNewspaper } from "react-icons/bs";
import { BiNews, BiPodcast } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
const News = () => {
  return (
    <ul className={style.nav_list_sub}>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsFilePost className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Posts</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <MdLiveTv className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Live Stream</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsFillChatDotsFill className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Chatroom</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BsNewspaper className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>News</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BiNews className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Cryptozen Blog</span>
        </Link>
      </li>
      <li className={style.nav_item_sub}>
        <Link to="/#" className={style.nav_link_sub}>
          <BiPodcast className={style.nav_icon_sub} />
          <span className={style.nav_link_sub_text}>Podcast</span>
        </Link>
      </li>
    </ul>
  );
};

export default News;
