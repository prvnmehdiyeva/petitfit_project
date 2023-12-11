import React, { useContext, useState } from "react"
import "./Content.css"
import { ButtonV1 } from "../Buttons/Button"
import bg from "../Assets/bg.png"
import { FreeCardsContext } from "../../Context/FreeCardsContext"
export const Content = ({ text1, head, text2, btn_text, bgimg, name }) => {
  return (
    <div className="timeline content_card marginTop">
      <div className="photo">
        <div className="name">{name}</div>
        <img className="image" src={bgimg} alt="" />
      </div>
      <div className="content">
        <p className="first_p">{text1}</p>
        <h1 className="head">{head}</h1>
        <p>{text2}</p>
        <ButtonV1 text={btn_text} />
      </div>
    </div>
  )
}
export const ContentRow = ({
  text1,
  head,
  text2,
  btn_text,
  bgimg,
  showButton = true,
}) => {
  return (
    <div className="timeline2 content_card row marginTop">
      <div className="photo">
        <img className="image" src={bgimg} alt="" />
      </div>
      <div className="content">
        <p className="first_p">{text1}</p>
        <h1 className="head">{head}</h1>
        <p className="paragraph">{text2}</p>
        {showButton && <ButtonV1 text={btn_text} />}
      </div>
    </div>
  )
}
export const ContentShop = ({
  text1,
  head,
  text2,
  btn_text,
  bgimg,
  id,
  price,
  image,
}) => {
  const { addToCart } = useContext(FreeCardsContext)
  const { isModalVisible, toggleModal } = useContext(FreeCardsContext)
  const handleAddToCart = () => {
    toggleModal()
    addToCart({
      id,
      text1,
      head,
      price,
      image,
    })
  }

  return (
    <div className="timeline content_card row marginTop">
      <div className="photo">
        <img className="image" src={bgimg} alt="" />
      </div>
      <div className="content">
        <p className="first_p">{text1}</p>
        <h1 className="head">{head}</h1>
        <p className="exercise">{text2}</p>
        <p className="exercise">{price}</p>

        <ButtonV1
          text={isModalVisible ? "Add to Cart" : btn_text}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  )
}
export const Content2 = ({ text1, head, text2, btn_text, bgimg }) => {
  return (
    <div className="timeline content_card2 container marginTop">
      <div className="content">
        <p className="first_p">{text1}</p>
        <h1 className="head">{head}</h1>
        <p>{text2}</p>
        <ButtonV1 text={btn_text} />
      </div>
      <div className="photos container">
        <img src={bg} alt="bg" className="bg" />
        <img src={bgimg} alt="bgimg" className="bgimg" />
      </div>
    </div>
  )
}
export const Content3 = ({
  text1,
  head,
  text2,
  btn_text,
  list1,
  list2,
  list3,
  bgimg,
}) => {
  return (
    <div className="timeline content_card2 marginTop">
      <div className="content">
        <p className="first_p">{text1}</p>
        <h1 className="head">{head}</h1>
        <p className="big-p">{text2}</p>
        <ul typeof="none">
          <p className="numericlist">01</p>
          <li className="lists">{list1}</li>
          <p className="numericlist">02</p>
          <li className="lists">{list2}</li>
          <p className="numericlist">03</p>
          <li className="lists">{list3}</li>
        </ul>
        <ButtonV1 text={btn_text} />
      </div>
      <div className="photos">
        <img src={bg} alt="bg" className="bg" />
        <img src={bgimg} alt="bgimg" className="bgimg" />
      </div>
    </div>
  )
}
export const Content3Row = ({
  text1,
  head,
  text2,
  btn_text,
  list1,
  list2,
  list3,
  bgimg,
}) => {
  return (
    <div className="timeline content_card2 row marginTop">
      <div className="content">
        <p className="first_p">{text1}</p>
        <h1 className="head">{head}</h1>
        <p className="big-p">{text2}</p>
        <ul typeof="none">
          <p className="numericlist">01</p>
          <li className="lists">{list1}</li>
          <p className="numericlist">02</p>
          <li className="lists">{list2}</li>
          <p className="numericlist">03</p>
          <li className="lists">{list3}</li>
        </ul>
        <ButtonV1 text={btn_text} />
      </div>
      <div className="photos">
        <img src={bg} alt="bg" className="bg" />
        <img src={bgimg} alt="bgimg" className="bgimg" />
      </div>
    </div>
  )
}
