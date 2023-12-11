import React, { useEffect } from "react"
import { Headline } from "../Components/Headline/Headline"
import { Card } from "../Components/Card/Card"
// import bgimg from "./Assets/freebgimg.jpg"
import data from "../Components/Assets/data.js"
import banner from "../Components/Assets/bannerfree.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination } from "swiper/modules"
export const Free = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline,.timeline2, .content")

    const isInViewport = (el, offset = 300) => {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= -offset &&
        rect.left >= -offset &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) +
            offset &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth) + offset
      )
    }

    const run = () => {
      items.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add("show")
        }
      })
    }

    run()

    // Events
    window.addEventListener("resize", run)
    window.addEventListener("scroll", run)

    return () => {
      window.removeEventListener("resize", run)
      window.removeEventListener("scroll", run)
    }
  }, [])
  return (
    <>
      <Headline text="Free Workouts" img={banner} />

      <div className="free-cards free-page container">
        {data.map((item, i) => {
          return <Card key={i} data={item} />
        })}
      </div>
    </>
  )
}
export default Free
