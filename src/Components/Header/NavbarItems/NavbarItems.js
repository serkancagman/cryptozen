import style from "../Style/Header.module.css";
import { Link } from "react-router-dom";
import {
  BsCreditCard2BackFill,
  BsBank2,
  BsClipboardData,
  BsFileEarmarkPersonFill,
} from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import { MdPriceChange, MdOutlineGeneratingTokens } from "react-icons/md";
import {
  AiOutlineRise,
  AiOutlineFieldTime,
  AiOutlineGlobal,
  AiOutlineSwap,
  AiFillSetting,
} from "react-icons/ai";
import { GiInjustice, GiTransform, GiBearFace } from "react-icons/gi";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { RiExchangeDollarLine } from "react-icons/ri";
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
