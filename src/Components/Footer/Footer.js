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
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
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
              <h5 className={style.socialTitle}>{t('footer.follow_text')}</h5>
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
              <h6 className={style.footerMenuTitle}>{t('footer.items.first.title')}</h6>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                {t('footer.items.first.links.first')}
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                {t('footer.items.first.links.second')}
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                {t('footer.items.first.links.third')}
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                {t('footer.items.first.links.fourth')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <ul className={style.footerMenu}>
              <h6 className={style.footerMenuTitle}>{t('footer.items.second.title')}</h6>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                {t('footer.items.second.links.first')}
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                {t('footer.items.second.links.second')}
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                {t('footer.items.second.links.third')}
                </Link>
              </li>
              <li className={style.footerMenuItem}>
                <Link className={style.footerLink} to="/">
                {t('footer.items.second.links.fourth')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className={style.footerMenuTitle}>{t('footer.items.third.title')}</h6>
            <p className={style.footerBrandDesc}>
            {t('footer.items.third.description')}
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
                  {t('footer.items.third.title')}{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={style.footerBottom}>
          <div className={style.footerBottomInner}>
            <h5 className={style.footerBottomTitle}>
              {" "}
              Copyright © 2022 Developed by Serkan Çağman with{" "}
              <AiFillHeart className={style.footerBottomHeart} />{" "}
            </h5>
            <div className="d-flex justify-content-center align-items-center">
              <Link className={style.footerBottomLink} to="/">
                {" "}
                {t('footer.bottom_links.first')}{" "}
              </Link>
              <Link className={style.footerBottomLink} to="/">
                {" "}
                {t('footer.bottom_links.second')}
              </Link>
              <Link className={style.footerBottomLink} to="/">
                {" "}
                {t('footer.bottom_links.third')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
