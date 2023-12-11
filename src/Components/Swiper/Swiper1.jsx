import React, { useEffect } from "react"
import "../Swiper/Swiper1.css"
import swiperData from "../Assets/swiperData"
import swiperData2 from "../Assets/swiperData2"
import heroData from "../Assets/heroData"
import { Content } from "../Content/Content"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { FreeMode, Autoplay } from "swiper/modules"

export const Swiper1 = () => {
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        speed={3000}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: Infinity,
          disableOnInteraction: false,
        }}
      >
        {swiperData.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={data.image} alt="" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export const Swiper2 = () => {
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        direction="horizontal"
        speed={3000}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: Infinity,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
      >
        {swiperData2
          .map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={data.image} alt="" />
              </SwiperSlide>
            )
          })
          .reverse()}
      </Swiper>
    </div>
  )
}
