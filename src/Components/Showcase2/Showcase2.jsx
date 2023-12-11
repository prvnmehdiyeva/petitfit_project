import React from "react"
import "./Showcase2.css"
import bgimg from "../Assets/bg-img.jpg"
import { Content2 } from "../Content/Content"
export const Showcase2 = () => {
  return (
    <div className="showcase2 container">
      <Content2
        text1="HI I'M SANDRA LYONS"
        text2="Literally everyone. I’m currently helping people from 12 to 60+ years
          old. Everyone is getting an adjusted program and a meal plan."
        head="Who can benefit from a fully custom online fitness plan and nutrition?"
        btn_text="book a call"
        bgimg={bgimg}
      />
    </div>
  )
}
