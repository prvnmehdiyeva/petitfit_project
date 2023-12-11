import React, { useState } from "react"
import "./FreeCards.css"
import { Card } from "../Card/Card"
import data from "../Assets/data"
import { Link } from "react-router-dom"
import { ButtonV1 } from "../Buttons/Button"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination } from "swiper/modules"
import { Swiper1 } from "../Swiper/Swiper1"
export const FreeCards = () => {
  const [showAll, setShowAll] = useState(false)

  const handleClick = () => {
    setShowAll(!showAll)
  }
  return (
    <div className="cards-free container">
      <div className="timeline content">
        <h1 className="head">Free home workouts and fitness plans</h1>
        <p className="parag">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          quidem laudantium modi laboriosam atque fugit ipsa ut reprehenderit
          blanditiis maxime!
        </p>
        <Link style={{ textDecoration: "none", color: "#000" }} to="/free">
          <ButtonV1 text="view all" onClick={handleClick} />
        </Link>
      </div>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={30}
        speed={3000}
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper swiperCards container"
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <div className="timeline free-cards container">
          {data.slice(0, showAll ? data.length : 3).map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Card data={item} />
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      <div className="timeline free-cards fullCards container">
        {data.slice(0, showAll ? data.length : 3).map((item, i) => {
          return <Card key={i} data={item} />
        })}
      </div>
    </div>
  )
}
