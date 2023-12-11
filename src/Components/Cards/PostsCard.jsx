import React, { useState } from "react"
import "../Cards/PostsCard.css"
import { PostCard } from "../Card/Card"
import { Link } from "react-router-dom"
import { ButtonV1 } from "../Buttons/Button"
import postsData from "../Assets/posts"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination } from "swiper/modules"
export const PostsCard = () => {
  const [showAll, setShowAll] = useState(false)

  const handleClick = () => {
    setShowAll(!showAll)
  }
  return (
    <div className="postCard">
      <div className="timeline content container">
        <h1 className="head">Read our tips and tricks</h1>
        <p>
          We post a lot of free content around health fitness and general
          wellbeing. Make sure to check all of our posts down below.
        </p>
        <Link style={{ textDecoration: "none", color: "#000" }} to="/shop">
          <ButtonV1 text="view all posts" onClick={handleClick} />
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
          {postsData.slice(0, showAll ? postsData.length : 3).map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <PostCard data={item} />
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      <div className="timeline free-cards fullPosts container">
        {postsData.slice(0, showAll ? postsData.length : 3).map((item, i) => {
          return <PostCard key={i} data={item} />
        })}
      </div>
    </div>
  )
}
