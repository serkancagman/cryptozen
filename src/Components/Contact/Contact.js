import HeaderTag from "Components/HeaderTag/HeaderTag";
import React from "react";
import style from "./Style/Contact.module.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
const Contact = () => {
  return (
    <section className={style.contact}>
      <div className="container">
        <div className={style.contactHeader}>
          <HeaderTag title="Contacts" />
          <h2 className={style.contactTitle}>Stay Update With Us</h2>
        </div>
        <div className="row g-3">
          <div className="col-md-6 col-lg-4 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <div className={style.contactIconWrapper}>
                <HiOutlineMailOpen className={style.contactIcon} />
              </div>
              <a
                href="mailto:cagmanserkann@gmail.com"
                className={style.contactInfoTitle}
              >
                cagmanserkann@gmail.com
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <div className={style.contactIconWrapper}>
                <BsTelephoneFill className={style.contactIcon} />
              </div>
              <a
                href="callto:cagmanserkann@gmail.com"
                className={style.contactInfoTitle}
              >
                +1 000 000 0000
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <div className={style.contactIconWrapper}>
                <FaTelegramPlane className={style.contactIcon} />
              </div>
              <a href="/#" className={style.contactInfoTitle}>
                Join us on Telegram
              </a>
            </div>
          </div>
        </div>
        <div className={style.contactForm}>
          <form>
            <div className="row g-3">
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Name" className={style.input} />
              </div>
              <div className="col-lg-6 col-md-6">
                <input
                  type="text"
                  placeholder="Email"
                  className={style.input}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6 col-md-6">
                <input
                  type="text"
                  placeholder="Phone"
                  className={style.input}
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <input
                  type="text"
                  placeholder="Website"
                  className={style.input}
                />
              </div>
            </div>
            <div className="col-12">
              <textarea
                placeholder="Message"
                rows={5}
                className={`${style.input} ${style.textarea}`}
              ></textarea>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button className={style.submitBtn}>Submit Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
