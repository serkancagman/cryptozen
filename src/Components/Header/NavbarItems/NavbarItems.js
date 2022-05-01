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
  BsPersonLinesFill
} from "react-icons/bs";
import { BiNews, BiPodcast,BiTask } from "react-icons/bi";
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
  AiFillFire
} from "react-icons/ai";
import {
  GiInjustice,
  GiTransform,
  GiBearFace,
  GiTwoCoins,
  GiMining,
  GiAbstract002,
  GiStarFormation
} from "react-icons/gi";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import {
  RiExchangeDollarLine,
  RiTimerFlashFill,
  RiCoinsFill,
  RiNotificationBadgeFill
} from "react-icons/ri";
import {SiFacepunch} from "react-icons/si";
import { FaFileInvoiceDollar, FaCubes,FaCoins } from "react-icons/fa";
// Buy List Dropdown Menu
export const buyList = (
  <div className={style.navSubWrapper}>
    <ul className={style.navSubList}>
      <li className={style.navSubItem}>
        <Link to="/buy_crypto" className={style.navSubLink}>
          <BsCreditCard2BackFill className={style.navSubIcon} />
          <span className={style.navSubText}>Credit Card</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/buy_crypto/bank" className={style.navSubLink}>
          <BsBank2 className={style.navSubIcon} />
          <span className={style.navSubText}>Bank Transfer</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/buy_crypto/p2p" className={style.navSubLink}>
          <SiHiveBlockchain className={style.navSubIcon} />
          <span className={style.navSubText}>P2P Trade</span>
        </Link>
      </li>
    </ul>
  </div>
);

// Markets Dropdown Menu

export const marketList = (
  <div className={style.navSubWrapper}>
    <ul className={style.navSubList}>
      <li className={style.navSubItem}>
        <Link to="/market_list" className={style.navSubLink}>
          <MdPriceChange className={style.navSubIcon} />
          <span className={style.navSubText}>Market Price</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/market_tracker" className={style.navSubLink}>
          <AiOutlineRise className={style.navSubIcon} />
          <span className={style.navSubText}>Market Tracker</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/big_data" className={style.navSubLink}>
          <BsClipboardData className={style.navSubIcon} />
          <span className={style.navSubText}>Big Data</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/coins" className={style.navSubLink}>
          <AiOutlineGlobal className={style.navSubIcon} />
          <span className={style.navSubText}>Global Currencies</span>
        </Link>
      </li>
    </ul>
  </div>
);

// Trade Dropdown Menu

export const tradeList = (
  <div className={style.navSubWrapper}>
    <ul className={style.navSubList}>
      <h6 className={style.navSubHeader}>Spot</h6>
      <li className={style.navSubItem}>
        <span className={style.navSubStartLink}>
          <AiOutlineSwap className={style.navSubIcon} />
          <div className={style.navSubTextWrapper}>
            <span className={style.navSubText}>Spot Trading</span>
            <p className={style.navSubTextBottom}>
              Crypto-to-crypto trading, such as selling USDT for BTC
            </p>
            <div className={style.navSubLinkOptionsWrapper}>
              <div className={style.navSubLinkOptions}>
                <Link to="/spot_trade" className={style.navSubOptionLink}>
                  {" "}
                  Standart{" "}
                </Link>
                <span className={style.navSubOptionLinkDash}> | </span>
                <Link to="/spot_trade/pro" className={style.navSubOptionLink}>
                  {" "}
                  Professional{" "}
                </Link>
              </div>
            </div>
          </div>
        </span>
      </li>

      <li className={style.navSubItem}>
        <span className={style.navSubStartLink}>
          <GiInjustice className={style.navSubIcon} />
          <div className={style.navSubTextWrapper}>
            <span className={style.navSubText}>Margin Trading</span>
            <p className={style.navSubTextBottom}>
              Borrowing from other users to amplify the profit and loss
            </p>
            <div className={style.navSubLinkOptionsWrapper}>
              <div className={style.navSubLinkOptions}>
                <Link to="/margin_trade" className={style.navSubOptionLink}>
                  {" "}
                  Standart{" "}
                </Link>
                <span className={style.navSubOptionLinkDash}> | </span>
                <Link to="/margin_trade/pro" className={style.navSubOptionLink}>
                  {" "}
                  Professional{" "}
                </Link>
              </div>
            </div>
          </div>
        </span>
      </li>
      <li className={style.navSubItem}>
        <Link to="/margin_trade" className={style.navSubStartLink}>
          <MdOutlineGeneratingTokens className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Leveraged Tokens</span>
            <p className={style.navSubTextBottom}>
              Enjoy up to 5X leveraged trading with Gate.io Leveraged ETF Tokens
            </p>
          </div>
        </Link>
      </li>

      <li className={style.navSubItem}>
        <Link to="/push_exchange" className={style.navSubStartLink}>
          <CgArrowsExchangeAltV className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Push Transactions</span>
            <p className={style.navSubTextBottom}>
              Push Transactions / Transfer an asset at a given price to another
              account using the Push function, a peer-to-peer sell/buy operation
            </p>
          </div>
        </Link>
      </li>

      <li className={style.navSubItem}>
        <Link to="/convert" className={style.navSubStartLink}>
          <RiExchangeDollarLine className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Flash Swap</span>
            <p className={style.navSubTextBottom}>
              Swap one currency with another in one click
            </p>
          </div>
        </Link>
      </li>
    </ul>

    <ul className={style.navSubList}>
      <h6 className={style.navSubHeader}>Derivative</h6>
      <li className={style.navSubItem}>
        <span className={style.navSubStartLink}>
          <BsFileEarmarkPersonFill className={style.navSubIcon} />
          <div className={style.navSubTextWrapper}>
            <span className={style.navSubText}>Perpetual</span>
            <p className={style.navSubTextBottom}>
              A crypto derivative. It differs from the traditional futures
              mainly because it has no settlement date
            </p>
            <div className={style.navSubLinkOptionsWrapper}>
              <div className={style.navSubLinkOptions}>
                <Link
                  to="/futures_trade/USD/BTC_USD"
                  className={style.navSubOptionLink}
                >
                  {" "}
                  USD - Margin{" "}
                </Link>
                <span className={style.navSubOptionLinkDash}> | </span>
                <Link
                  to="/futures_trade/BTC/BTC_USD"
                  className={style.navSubOptionLink}
                >
                  {" "}
                  BTC - Margin{" "}
                </Link>
                <Link to="/#" className={style.navSubOptionLink}>
                  {" "}
                  Perpetual Contract (Testnet){" "}
                </Link>
              </div>
            </div>
          </div>
        </span>
      </li>

      <li className={style.navSubItem}>
        <span className={style.navSubStartLink}>
          <AiOutlineFieldTime className={style.navSubIcon} />
          <div className={style.navSubTextWrapper}>
            <span className={style.navSubText}>Delivery</span>
            <p className={style.navSubTextBottom}>
              Future contracts that are settled at expiration time. No funding
              payment is received or paid
            </p>
            <div className={style.navSubLinkOptionsWrapper}>
              <div className={style.navSubLinkOptions}>
                <Link
                  to="/futures_delivery/usdt"
                  className={style.navSubOptionLink}
                >
                  {" "}
                  Standart{" "}
                </Link>
                <span className={style.navSubOptionLinkDash}> | </span>
                <Link
                  to="/futures_delivery/btc"
                  className={style.navSubOptionLink}
                >
                  {" "}
                  Professional{" "}
                </Link>
              </div>
            </div>
          </div>
        </span>
      </li>
      <li className={style.navSubItem}>
        <Link to="/options/BTC_USD" className={style.navSubStartLink}>
          <GiTransform className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Options</span>
            <p className={style.navSubTextBottom}>
              European options group with put and call options of different
              strike prices and exercise dates.
            </p>
          </div>
        </Link>
      </li>

      <li className={style.navSubItem}>
        <Link to="/warrants/cbbc" className={style.navSubStartLink}>
          <GiBearFace className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>CBBC</span>
            <p className={style.navSubTextBottom}>
              Callable bull/bear contract, a structured product. High leverage,
              easy purchase, low fee.
            </p>
          </div>
        </Link>
      </li>

      <li className={style.navSubItem}>
        <Link to="/warrants/warrant" className={style.navSubStartLink}>
          <AiFillSetting className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Warrant</span>
            <p className={style.navSubTextBottom}>
              If you are bullish on the price movement of the underlying
              asset,buy a call warrant;if you are bearish,buy a put warrant
            </p>
          </div>
        </Link>
      </li>
    </ul>
  </div>
);

// EARN LIST ITEMS

export const earnList = (
  <div className={style.navSubWrapper}>
    <ul className={style.navSubList}>
      <h6 className={style.navSubHeader}>Earn</h6>
      <li className={style.navSubItem}>
        <Link to="/hodl" className={style.navSubStartLink}>
          <GiTwoCoins className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>HODL & Earn</span>
            <p className={style.navSubTextBottom}>
              A one stop investment center with a variety of products.
            </p>
          </div>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/structured" className={style.navSubStartLink}>
          <FaFileInvoiceDollar className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Structured Products</span>
            <p className={style.navSubTextBottom}>
              Pre-packed products that include assets linked to interest and
              derivatives.
            </p>
          </div>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/autoinvest" className={style.navSubStartLink}>
          <RiTimerFlashFill className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Auto Inverstment</span>
            <p className={style.navSubTextBottom}>
              One-click investment, flexible portfolio, redeemable and
              changeable anytime.
            </p>
          </div>
        </Link>
      </li>

      <li className={style.navSubItem}>
        <Link to="/margin/lend/USD" className={style.navSubStartLink}>
          <RiCoinsFill className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Crypto Lending</span>
            <p className={style.navSubTextBottom}>
              A investment to lend your crypto at specified interest rate and
              loan term to get earnings.
            </p>
          </div>
        </Link>
      </li>
    </ul>
    <ul className={style.navSubList}>
      <h6 className={style.navSubHeader}>Loan</h6>
      <li className={style.navSubItem}>
        <Link to="/cryptoloan/usd" className={style.navSubStartLink}>
          <FaCubes className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Crypto Loan</span>
            <p className={style.navSubTextBottom}>
              Crypto loan is to pledge one crypto to borrow another.
            </p>
          </div>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/margin/borrow" className={style.navSubStartLink}>
          <GiInjustice className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Margin Borrowing</span>
            <p className={style.navSubTextBottom}>
              Borrowing to amplify your buying power with your own holdings as
              margin.
            </p>
          </div>
        </Link>
      </li>
    </ul>
    <ul className={style.navSubList}>
      <h6 className={style.navSubHeader}>Mining</h6>
      <li className={style.navSubItem}>
        <Link to="/liquidity" className={style.navSubStartLink}>
          <GiMining className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Liquidity Mining</span>
            <p className={style.navSubTextBottom}>
              Earn income from fees by providing Dual-Assets liquidity to the
              market.
            </p>
          </div>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/lending/liquidity" className={style.navSubStartLink}>
          <BsCircleSquare className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>
              Lending & Single-Asset Vault
            </span>
            <p className={style.navSubTextBottom}>
              Provide Single-Asset liquidity to earn income. Deposit or withdraw
              anytime.
            </p>
          </div>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/cloud_mining" className={style.navSubStartLink}>
          <BsCloudMinusFill className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Cloud Mining</span>
            <p className={style.navSubTextBottom}>
              Mining cryptocurrency without buying hardware.
            </p>
          </div>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/slot_auctions" className={style.navSubStartLink}>
          <BsCloudMinusFill className={style.navSubIcon} />
          <div className={style.navSubTextWrapperHoverless}>
            <span className={style.navSubText}>Slot Auctions</span>
            <p className={style.navSubTextBottom}>
              Participate in parachain auctions & receive rewards.
            </p>
          </div>
        </Link>
      </li>
    </ul>
  </div>
);
// NEWS MENU ITEMS
export const newsList = (
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

// GIVEAWAY MENU ITEMS

export const giveawayList = (
  <div className={style.navSubWrapper}>
    <ul className={style.navSubList}>
      <li className={style.navSubItem}>
        <Link to="/rewards/activity" className={style.navSubLink}>
          <AiFillGift className={style.navSubIcon} />
          <span className={style.navSubText}>Bonus Campaigns</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/rewards/task" className={style.navSubLink}>
          <BiTask className={style.navSubIcon} />
          <span className={style.navSubText}>Tasks & Bonuses</span>
        </Link>
      </li>
      <li className={style.navSubItem}>
        <Link to="/referral" className={style.navSubLink}>
          <FaCoins className={style.navSubIcon} />
          <span className={style.navSubText}>My Referrals</span>
        </Link>
      </li>
    </ul>
  </div>
)

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
)