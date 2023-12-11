import React, { useContext, useEffect } from "react"
import { ContentShop } from "../Components/Content/Content"
import { PaidCard } from "../Components/Card/Card"
import { FreeCardsContext } from "../Context/FreeCardsContext"
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination } from "swiper/modules"

export const DetailsPaidPage = () => {
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
  const { all_Paidproduct } = useContext(FreeCardsContext)
  const { productId } = useParams()
  const product = all_Paidproduct.find((e) => e.id === Number(productId))
  const otherProducts = all_Paidproduct.filter(
    (item) => item.id !== Number(productId)
  )

  return (
    <>
      <div className="container">
        <ContentShop
          text1={product.time}
          text2={product.des}
          head={product.name}
          btn_text="add to cart"
          bgimg={product.detail_image}
          id={product.id}
          price={product.price}
          image={product.image}
        />
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
                  <PaidCard data={item} />
                </SwiperSlide>
              )
            })}
          </div>
        </Swiper>
        <div className="free-cards fullPaidCards container">
          {otherProducts.map((item, i) => {
            return <PaidCard key={i} data={item} />
          })}
        </div>
      </div>
    </>
  )
}
