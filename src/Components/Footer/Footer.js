import React from "react";
import style from "./Style/Footer.module.css";
import logo from "Assets/Logo/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="row g-3">
          <div className="col-md-6 col-lg-3">
            <div className={style.footerBrand}>
              <div className={style.footerBrandLogo}>
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <p className={style.footerBrandDesc}>
                There are many variations of pass of Lorem Ipsum available, but
                the majority have suffered
              </p>
              <h5 className={style.socialTitle}>Follow Us</h5>
              <div className="d-flex justify-content-start align-items-center">
                <div className={style.socialItem}>
                  <FaFacebookF className={style.socialIcon} />
                </div>
                <div className={style.socialItem}>
                  <FaTwitter className={style.socialIcon} />
                </div>
                <div className={style.socialItem}>
                  <FaInstagram className={style.socialIcon} />
                </div>
                <div className={style.socialItem}>
                  <FaLinkedin className={style.socialIcon} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <ul className={style.footerMenu}>
              <h6 className={style.footerMenuTitle}>Help Links</h6>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                  What Is ICO ?{" "}
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                  Token
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                  Road Map
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                  Advisor
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <ul className={style.footerMenu}>
              <h6 className={style.footerMenuTitle}>Quick Links</h6>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                  ICO Apps
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                  White Papers
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                  Teams
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className={style.footerMenuTitle}>Quick Links</h6>
            <p className={style.footerBrandDesc}>
              Sent Us a Newsletter And Get Update
            </p>
            <form>
              <div className={style.footerNewsletter}>
                <input
                  type="text"
                  placeholder="Enter Your Email..."
                  className={style.footerNewsletterInput}
                />
                <button className={style.footerNewsletterButton}>
                  {" "}
                  Subscribe{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={style.footerBottom}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className={style.footerBottomTitle}>
              {" "}
              Copyright © 2022 Developed by Serkan Çağman with{" "}
              <AiFillHeart className={style.footerBottomHeart} />{" "}
            </h5>
            <div className="d-flex justify-content-center align-items-center">
              <Link className={style.footerBottomLink} to="/">
                {" "}
                Privacy Policy
              </Link>
              <Link className={style.footerBottomLink} to="/">
                {" "}
                Terms of Use
              </Link>
              <Link className={style.footerBottomLink} to="/">
                {" "}
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
