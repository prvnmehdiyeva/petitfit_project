import React, { useEffect } from "react"
import { AboutFirst } from "../Components/AboutFirst/AboutFirst"
import { VideoCard } from "../Components/VideoCard/VideoCard"
import { Coach } from "../Components/Coach/Coach"

export const About = () => {
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
      <AboutFirst />
      <VideoCard />
      <Coach />
    </>
  )
}
export default About
