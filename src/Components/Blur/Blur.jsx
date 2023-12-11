import React, { useEffect } from "react"
import "./Blur.css"

export const Blur = ({ applyBlur }) => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline")

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    const run = () => {
      items.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add("show")
          if (applyBlur) {
            applyBlur(true)
          }
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
  }, [applyBlur])
}

export default Blur
