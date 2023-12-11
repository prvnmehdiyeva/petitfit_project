import React from "react"
import { Content3 } from "../Content/Content"
import { Content3Row } from "../Content/Content"
import coach1 from "../Assets/coach1.jpg"
import coach2 from "../Assets/coach2.jpg"
export const Coach = () => {
  return (
    <div className="showcase2 container">
      <Content3
        text2="Literally everyone. I’m currently helping people from 12 to 60+ years
          old. Everyone is getting an adjusted program and a meal plan."
        head="I am Aaron"
        list1="Over 10 years of experience"
        list2="Coached 2,000+ people"
        list3="Bachelors in nutrition"
        btn_text="schedule a call"
        bgimg={coach1}
      />
      <Content3Row
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        head="I am Sara"
        list1="Over 10 years of experience"
        list2="Coached 2,000+ people"
        list3="Bachelors in nutrition"
        btn_text="explore our shop"
        bgimg={coach2}
      />
    </div>
  )
}
