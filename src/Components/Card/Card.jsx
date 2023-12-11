import React, { useContext } from "react"
import "./Card.css"

import { ButtonV3 } from "../Buttons/Button"
import { Link } from "react-router-dom"
import { FreeCardsContext } from "../../Context/FreeCardsContext"
export const Card = (props) => {
  const { id, name, image, time, type } = props.data
  // const { all_product } = useContext(FreeCardsContext)
  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/detailspage/${id}`}
    >
      <div className="card">
        <img src={image} alt="" className="card-img" />
        <div className="content-card">
          <div className="first">
            <p className="timeItem">{time}</p>
            <h2 className="nameItem">{name}</h2>

            <ButtonV3 text="train now" />
          </div>
          <div className="second">
            <p className="type">{type}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export const PaidCard = (props) => {
  const { id, name, image, time, type, price, oldPrice } = props.data
  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/detailspaidpage/${id}`}
    >
      <div className="card">
        <img src={image} alt="" className="card-img" />
        <div className="content-card">
          <div className="first">
            <p className="timeItem">{time}</p>
            <h2 className="nameItem">{name}</h2>

            <ButtonV3 text="train now" />
          </div>
          <div className="second">
            <p className="type">{price}</p>
            <p className="oldPrice">{oldPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export const PostCard = (props) => {
  const { id, name, image, type, profile, title } = props.data
  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/detailspostpage/${id}`}
    >
      <div className="card-post">
        <img src={image} alt="" className="card-img" />
        <div className="content-card">
          <p className="type">{type}</p>
          <div className="first">
            <div className="profile">
              <img src={profile} alt="" className="profile-img" />
              <h4 className="profileName">{name}</h4>
            </div>
            <h2 className="nameItem">{title}</h2>
            <ButtonV3 text="read more" />
          </div>
        </div>
      </div>
    </Link>
  )
}
