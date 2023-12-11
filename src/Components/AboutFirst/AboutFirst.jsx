import React from "react"
import bgimg from "../Assets/about1.jpg"
import { ContentRow } from "../Content/Content"
export const AboutFirst = () => {
  return (
    <div className="container">
      <ContentRow
        style={{ flexDirection: "row-reverse" }}
        text1="HI I'M Chris Barbara"
        text2="I’ve created these premium fitness classes for everyone starting from beginner to advanced level with an in-depth FAQ to answer all doubts."
        head="Premium online fitness classes & nutrition."
        btn_text="online coaching"
        bgimg={bgimg}
      />
    </div>
  )
}
