import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import style from "./Style/Featured.module.css";
import postOne from "Assets/Featured/post-1.jpg";
import postTwo from "Assets/Featured/post-2.jpg";
import postThree from "Assets/Featured/post-3.jpg";
import postFour from "Assets/Featured/post-4.jpg";
import postFive from "Assets/Featured/post-5.jpg";
const PromotionCarousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      pagination={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper featuredCarousel"
      breakpoints={{
        279: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <Link to="/#" className={style.promotionItem}>
          <div className={style.promotionItemImgWrapper}>
            <img src={postOne} className={style.promotionImg} alt="post" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/#" className={style.promotionItem}>
          <div className={style.promotionItemImgWrapper}>
            <img src={postTwo} className={style.promotionImg} alt="post" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/#" className={style.promotionItem}>
          <div className={style.promotionItemImgWrapper}>
            <img src={postThree} className={style.promotionImg} alt="post" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/#" className={style.promotionItem}>
          <div className={style.promotionItemImgWrapper}>
            <img src={postFour} className={style.promotionImg} alt="post" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/#" className={style.promotionItem}>
          <div className={style.promotionItemImgWrapper}>
            <img src={postFive} className={style.promotionImg} alt="post" />
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default PromotionCarousel;
