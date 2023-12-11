import React from "react"
import "./CardsCenter.css"
import { Link } from "react-router-dom"
import { ButtonV1 } from "../Buttons/Button"
import card1 from "../Assets/centerCard1.jpg"
import card2 from "../Assets/centerCard2.jpg"
import card3 from "../Assets/centerCard3.jpg"
import card4 from "../Assets/centerCard4.jpg"
export const CardsCenter = () => {
  return (
    <div className=" center">
      <div className="timeline content">
        <h1 className="head">
          The journey to a healthier body starts right now
        </h1>
        <Link style={{ textDecoration: "none", color: "#000" }} to="/login">
          <ButtonV1 text="online coaching" />
        </Link>
      </div>
      <div className="cards">
        <div className="timeline card">
          <img src={card1} alt="1" />
          <h4 className="head">Learn to live a healthy life with fitness</h4>
          <p>
            Changing your lifestyle with a fast paced life may seem hard or
            impossible, but with small steps each week you can achieve your
            dream physique and live a healthier life.
          </p>
        </div>
        <div className="timeline card">
          <img src={card2} alt="2" />
          <h4 className="head">Follow a specific plan made just for you</h4>
          <p>
            Everyone is different, and we know it. That's why all of our clients
            get a programme specific just for their lifestyle and body tipe.
            This give the best possible results.
          </p>
        </div>
        <div className="timeline card">
          <img src={card3} alt="3" />
          <h4 className="head">Understand how to do excercises</h4>
          <p>
            Just going to the gym and lifting weights won't make you healthy,
            after all it may even cause some harm to your body. We teach proper
            exercise techniques
          </p>
        </div>
        <div className="timeline card">
          <img src={card4} alt="4" />
          <h4 className="head">Track your progress weekly</h4>
          <p>
            We're tracking your goal weight with body fat measures, weight and
            general feeling. You may have the same body weight but feel 10x
            better.
          </p>
        </div>
      </div>
    </div>
  )
}
