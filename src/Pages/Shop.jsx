import React, { useEffect } from "react"
import { Headline } from "../Components/Headline/Headline"
import data_paid from "../Components/Assets/data_paid"
import { PaidCard } from "../Components/Card/Card"
import banner from "../Components/Assets/bannershop.jpg"
export const Shop = () => {
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
    <div>
      <Headline text="Premium Programs" img={banner} />
      <div className="free-cards container">
        {data_paid.map((item, i) => {
          return <PaidCard key={i} data={item} />
        })}
      </div>
    </div>
  )
}
export default Shop
