import React from "react"
import "./Showcase.css"

import showcase from "../Assets/santabarbara.jpg"
import { Content } from "../Content/Content"
export const Showcase = () => {
  return (
    <div>
      <div className="container">
        <Content
          text1="HI I'M santa barbara"
          text2="I’ve created these premium fitness classes for everyone starting from beginner to advanced level with an in-depth FAQ to answer all doubts."
          head="Premium online fitness classes & nutrition."
          btn_text="online coaching"
          name="santa barbara"
          bgimg={showcase}
        />
      </div>
      <div className="timeline us">
        <div className="bg"></div>
        <div className="content container">
          <div className="card-show">
            <h3 className="head head-white">1900+</h3>
            <p>HAPPY CLIENTS</p>
          </div>
          <div className="card-show">
            <h3 className="head head-white">5 yrs</h3>
            <p>OF EXPERIENCE</p>
          </div>
          <div className="card-show">
            <h3 className="head head-white">156K</h3>
            <p>FOLLOWING ME</p>
          </div>
        </div>
      </div>
    </div>
  )
}
