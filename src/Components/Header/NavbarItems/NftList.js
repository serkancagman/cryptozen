import React from "react";
import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { GiAbstract002, GiStarFormation } from "react-icons/gi";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { SiFacepunch } from "react-icons/si";
const NftList = () => {
  return (
    <div className={style.navSubWrapper}>
      <ul className={style.navSubList}>
        <li className={style.navSubItem}>
          <Link to="/nft/ino" className={style.navSubLink}>
            <RiNotificationBadgeFill className={style.navSubIcon} />
            <span className={style.navSubText}>Offering/INO</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/nft/explore" className={style.navSubLink}>
            <GiAbstract002 className={style.navSubIcon} />
            <span className={style.navSubText}>NFT Markets</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/nft/featured" className={style.navSubLink}>
            <GiStarFormation className={style.navSubIcon} />
            <span className={style.navSubText}>Featured NFTs</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/nft/goods_statistics" className={style.navSubLink}>
            <AiFillFire className={style.navSubIcon} />
            <span className={style.navSubText}>Top NFTs</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/nft/my_assets" className={style.navSubLink}>
            <BsPersonLinesFill className={style.navSubIcon} />
            <span className={style.navSubText}>My Assets</span>
          </Link>
        </li>
        <li className={style.navSubItem}>
          <Link to="/open_punks" className={style.navSubLink}>
            <SiFacepunch className={style.navSubIcon} />
            <span className={style.navSubText}>Open Punks</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NftList;
