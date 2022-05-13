import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import headerTR from "./languages/tr/header.json";
import bannerTR from "./languages/tr/banner.json";
import countdownTR from "./languages/tr/countdown.json";
import featuredTR from "./languages/tr/featured.json";
import aboutIcoTR from "./languages/tr/about_ico.json";
import whoweareTR from "./languages/tr/who_we_are.json";
import ratingTR from "./languages/tr/rating.json";
import mobileappTR from "./languages/tr/mobile_app.json";
import faqTR from "./languages/tr/faq.json";
import newsTR from "./languages/tr/news.json";
import contactTR from "./languages/tr/contact.json";
import footerTR from "./languages/tr/footer.json";
import productTR from "./languages/tr/product.json";
import marketTR from "./languages/tr/market.json";
import headerEN from "./languages/en/header.json";
import bannerEN from "./languages/en/banner.json";
import countdownEN from "./languages/en/countdown.json";
import featuredEN from "./languages/en/featured.json";
import aboutIcoEN from "./languages/en/about_ico.json";
import ratingEN from "./languages/en/rating.json";
import whoweareEN from "./languages/en/who_we_are.json";
import mobileappEN from "./languages/en/mobile_app.json";
import faqEN from "./languages/en/faq.json";
import newsEN from "./languages/en/news.json";
import contactEN from "./languages/en/contact.json";
import footerEN from "./languages/en/footer.json";
import marketEN from "./languages/en/market.json";
import productEN from "./languages/en/product.json";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "tr"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
    resources: {
      en: {
        translation: {
          header: headerEN,
          banner: bannerEN,
          countdown: countdownEN,
          featured: featuredEN,
          about_ico: aboutIcoEN,
          rating: ratingEN,
          who_we_are: whoweareEN,
          mobile_app: mobileappEN,
          faq: faqEN,
          news: newsEN,
          contact: contactEN,
          footer: footerEN,
          market: marketEN,
          product: productEN,
        },
      },
      tr: {
        translation: {
          header: headerTR,
          banner: bannerTR,
          countdown: countdownTR,
          featured: featuredTR,
          about_ico: aboutIcoTR,
          rating: ratingTR,
          who_we_are: whoweareTR,
          mobile_app: mobileappTR,
          faq: faqTR,
          news: newsTR,
          contact: contactTR,
          footer: footerTR,
          market: marketTR,
          product: productTR,
        },
      },
    },
    react: { useSuspens: false },
  });

export default i18n;
