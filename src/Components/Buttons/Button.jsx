import React from "react"
import "./Button.css"
import arrow from "../Assets/arrow_right.png"
import arrowColour from "../Assets/arrow_rightcolour.png"
export const ButtonV1 = ({ text, onClick }) => {
  return (
    <button className="btn button-green" onClick={onClick}>
      <img src={arrow} alt="arrow" />
      {text}
    </button>
  )
}
export const ButtonV2 = ({ text, onClick }) => {
  return (
    <button className="btn button-light" onClick={onClick}>
      <img src={arrowColour} alt="arrow" />
      {text}
    </button>
  )
}
export const ButtonV3 = ({ text, onClick }) => {
  return (
    <button className="btn nobutton button-v3" onClick={onClick}>
      <img src={arrowColour} alt="arrow" className="btn-img" />
      {text}
    </button>
  )
}
