import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import {
  BsCreditCard2BackFill,
  BsBank2,
  BsClipboardData,
  BsFileEarmarkPersonFill,
  BsCircleSquare,
  BsCloudMinusFill,
  BsFilePost,
  BsFillChatDotsFill,
  BsNewspaper,
  BsPersonLinesFill,
} from "react-icons/bs";
import { BiNews, BiPodcast, BiTask } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";
import {
  MdPriceChange,
  MdOutlineGeneratingTokens,
  MdLiveTv,
} from "react-icons/md";
import {
  AiOutlineRise,
  AiOutlineFieldTime,
  AiOutlineGlobal,
  AiOutlineSwap,
  AiFillSetting,
  AiFillGift,
  AiFillFire,
} from "react-icons/ai";
import {
  GiInjustice,
  GiTransform,
  GiBearFace,
  GiTwoCoins,
  GiMining,
  GiAbstract002,
  GiStarFormation,
} from "react-icons/gi";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import {
  RiExchangeDollarLine,
  RiTimerFlashFill,
  RiCoinsFill,
  RiNotificationBadgeFill,
} from "react-icons/ri";
import { SiFacepunch } from "react-icons/si";
import { FaFileInvoiceDollar, FaCubes, FaCoins } from "react-icons/fa";



// EARN LIST ITEMS


// NEWS MENU ITEMS


// GIVEAWAY MENU ITEMS


// NFT MENU ITEMS

export const nftList = (
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
