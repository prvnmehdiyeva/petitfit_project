import React, { useContext, useEffect } from "react"
import { FreeCardsContext } from "../Context/FreeCardsContext"
import { useParams } from "react-router-dom"
import { Headline } from "../Components/Headline/Headline"
import { Info } from "../Components/Information/Info"
import { PostCard } from "../Components/Card/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
export const DetailsPostPage = () => {
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
  const { all_Post } = useContext(FreeCardsContext)

  const { productId } = useParams()

  const product = all_Post.find((e) => e.id === Number(productId))

  const otherProducts = all_Post.filter((item) => item.id !== Number(productId))
  return (
    <div>
      <Headline text={product.title} img={product.detail_img} />
      <Info />
      <div
        className="more container"
        style={{
          backgroundColor: "#DCDCDC",
          width: "100%",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <h1
          className="timeline head"
          style={{ width: "60%", marginBottom: "100px", fontWeight: "600" }}
        >
          More posts you might like...
        </h1>
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
          <div className="free-cards container">
            {otherProducts.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <PostCard data={item} />
                </SwiperSlide>
              )
            })}
          </div>
        </Swiper>
        <div className="free-cards fullPaidCards ">
          {otherProducts.map((item, i) => {
            return <PostCard key={i} data={item} />
          })}
        </div>
      </div>
    </div>
  )
}
