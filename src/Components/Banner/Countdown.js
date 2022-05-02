import React from "react";
import style from "./Style/Banner.module.css";
import { useCountdown } from "Hooks/useCount";
const Countdown = () => {
  const [expiryTime, setExpiryTime] = React.useState("23 aug 2022 15:30:25");

  const countdownDateTime = new Date(expiryTime).getTime();
  const [days, hours, minutes, seconds] = useCountdown(countdownDateTime);

  return (
    <div className={style.countdown}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h6 className={style.countdownTitle}> Token Sale Start Now In </h6>
        <div className="d-flex align-items-center justify-content-center">
          <div className={style.countdownBox}>
            <span className={`${style.countdownNumber} ${style.days}`}>
              {days}
            </span>
            <span className={style.countdownText}>DAYS</span>
          </div>
          <div className={style.countdownBox}>
            <span className={`${style.countdownNumber} ${style.hours}`}>
              {hours}
            </span>
            <span className={style.countdownText}>HOURS</span>
          </div>
          <div className={style.countdownBox}>
            <span className={`${style.countdownNumber} ${style.mins}`}>
              {minutes}
            </span>
            <span className={style.countdownText}>MINS</span>
          </div>
          <div className={style.countdownBox}>
            <span className={`${style.countdownNumber} ${style.sec}`}>
              {seconds}
            </span>
            <span className={style.countdownText}>SEC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
