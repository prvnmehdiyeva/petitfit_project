import React, { useEffect } from "react"
import { CardsCenter } from "../Components/CardsCenter/CardsCenter"
import { Showcase } from "../Components/Showcase/Showcase"
import { FreeCards } from "../Components/Cards/FreeCards"
import { PaidCards } from "../Components/Cards/PaidCards"
import { Showcase2 } from "../Components/Showcase2/Showcase2"
import { PostsCard } from "../Components/Cards/PostsCard"
import { Blur } from "../Components/Blur/Blur"
export const Home = () => {
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
      <Showcase />
      <CardsCenter />
      <FreeCards />
      <PaidCards />
      <Showcase2 />
      <PostsCard />
    </div>
  )
}
export default Home
