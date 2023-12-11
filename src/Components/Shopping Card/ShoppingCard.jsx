import React, { useContext, useState } from "react"
import "./ShoppingCard.css"
import { Counter } from "../Counter/Counter"
import { ButtonV1 } from "../Buttons/Button"
import { FreeCardsContext } from "../../Context/FreeCardsContext"

export const ShoppingCard = ({ name, price, id, image }) => {
  const {
    isModalVisible,
    toggleModal,
    cardItems,
    removeFromCart,
    updateNumber,
  } = useContext(FreeCardsContext)
  const calculateTotalPrice = () => {
    return cardItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  return (
    <>
      <div
        className={`container shoppingCard ${isModalVisible ? "visible" : ""}`}
      >
        <div className="yourCart">
          <h2>Your Cart</h2>
          <button className="xbutton" onClick={toggleModal}>
            x
          </button>
        </div>

        {cardItems.map((item) => (
          <div key={item.id} className="product">
            <div className="image">
              <img src={item.image} alt={item.name} />
              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                REMOVE
              </button>
            </div>
            <div className="productDes">
              <p>{item.price}</p>
              <h4>{item.name}</h4>
              <Counter updateNumber={updateNumber} />
            </div>
          </div>
        ))}
        <div className="total">
          <p>SubTotal</p>
          <p className="shopPrice">{calculateTotalPrice()}</p>
        </div>

        <ButtonV1 text="CHECKOUT" />
      </div>
    </>
  )
}
