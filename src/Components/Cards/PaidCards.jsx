import React, { useState } from "react"
import "./PaidCards.css"
import { Link } from "react-router-dom"
import { PaidCard } from "../Card/Card"
import { ButtonV2 } from "../Buttons/Button"
import data_paid from "../Assets/data_paid"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination } from "swiper/modules"
export const PaidCards = () => {
  const [showAll, setShowAll] = useState(false)

  const handleClick = () => {
    setShowAll(!showAll)
  }

  return (
    <div className="cards-paid">
      <div className="timeline content container">
        <h1 className="head head-white">
          Paid home workouts and fitness plans
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          quidem laudantium modi laboriosam atque fugit ipsa ut reprehenderit
          blanditiis maxime!
        </p>
        <Link style={{ textDecoration: "none", color: "#000" }} to="/shop">
          <ButtonV2 text="view all" onClick={handleClick} />
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
          {data_paid.slice(0, showAll ? data_paid.length : 3).map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <PaidCard data={item} />
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      <div className="timeline free-cards fullPaidCards container">
        {data_paid.slice(0, showAll ? data_paid.length : 3).map((item, i) => {
          return <PaidCard key={i} data={item} />
        })}
      </div>
    </div>
  )
}
