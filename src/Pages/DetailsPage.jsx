import React, { useContext, useEffect } from "react"
import { FreeCardsContext } from "../Context/FreeCardsContext"
import { useParams } from "react-router-dom"
import { Content } from "../Components/Content/Content"
import { Exercises } from "../Components/Exercises/Exercises"
import { Info } from "../Components/Information/Info"
import { Card } from "../Components/Card/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination } from "swiper/modules"

export const DetailsPageFree = () => {
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
  const { all_product } = useContext(FreeCardsContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  const otherProducts = all_product.filter(
    (item) => item.id !== Number(productId)
  )

  if (!product) {
    // Handle the case where the product is not found.
    return <div>Product not found</div>
  }

  return (
    <>
      <div className="container">
        <Content
          text1={product.time}
          text2={product.des}
          head={product.name}
          btn_text="start workout"
          bgimg={product.detail_image}
        />
        <Exercises />
        <Info />
      </div>
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
          className="head"
          style={{ width: "60%", marginBottom: "100px", fontWeight: "600" }}
        >
          More workouts you might like...
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
                  <Card data={item} />
                </SwiperSlide>
              )
            })}
          </div>
        </Swiper>
        <div className="free-cards fullCards container">
          {otherProducts.map((item, i) => {
            return <Card key={i} data={item} />
          })}
        </div>
      </div>
    </>
  )
}
