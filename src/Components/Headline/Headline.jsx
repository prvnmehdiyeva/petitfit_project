import React from "react"
import "./Headline.css"
import bgimg from "../Assets/freebgimg.jpg"
export const Headline = ({ text, img }) => {
  return (
    <div className=" headline marginTop">
      <div className="timeline2 container">
        <img src={img} alt="headline" className="image" />
      </div>

      <div className="timeline2 bg">
        <div className="content">
          <h3 className="head head-white">{text}</h3>
        </div>
      </div>
    </div>
  )
}
