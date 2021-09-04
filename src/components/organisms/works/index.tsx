import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination]);

const slider = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor sagittis enim non sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fringilla lacus erat, nec blandit mi cursus quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam a aliq",
  "Slide 2",
  "Slide 3",
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 1",
  "Slide 2",
  "Slide 3",
];
const pagination = {
  clickable: true,
  dynamicBullets: true,
};
const Works = () => {
  return (
    <div className="o-works">
      <div className="o-works__title">Works</div>
      <Swiper
        pagination={pagination}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        className="o-works__swiper"
      >
        {slider.map((item) => (
          <SwiperSlide
            key={Math.random()}
            className="o-works__slider"
            title="Click for Details"
          >
            <div className="o-works__image">
              <img src="https://picsum.photos/200/300" />
            </div>
            <p className="o-works__description">{item}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Works;
