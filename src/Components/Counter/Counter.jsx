import React, { useContext, useState } from "react"
import "./Counter.css"
import { FreeCardsContext } from "../../Context/FreeCardsContext"

export const Counter = () => {
  const [number, setNumber] = useState(1)
  const { updateNumber } = useContext(FreeCardsContext)

  const updateNumberAndQuantity = (newNumber) => {
    setNumber(newNumber)
    updateNumber(newNumber)
  }

  const minusClick = () => {
    const newNumber = number - 1
    setNumber(newNumber)
    updateNumber(newNumber)
  }

  const plusClick = () => {
    const newNumber = number + 1
    setNumber(newNumber)
    updateNumber(newNumber)
  }

  if (number < 1) {
    const newNumber = 1
    setNumber(newNumber)
    updateNumber(newNumber)
  }

  return (
    <div className="counter">
      <button className="icon minus" onClick={minusClick}>
        -
      </button>
      <p>{number}</p>
      <button className="icon plus" onClick={plusClick}>
        +
      </button>
    </div>
  )
}
