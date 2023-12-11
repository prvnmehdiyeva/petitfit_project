import React, { createContext, useState } from "react"
import data from "../Components/Assets/data"
import dataPaid from "../Components/Assets/data_paid"
import posts from "../Components/Assets/posts"

export const FreeCardsContext = createContext()

export const FreeCardsProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [all_product, setAllProduct] = useState(data)
  const [all_Paidproduct, setAllPaidProduct] = useState(dataPaid)
  const [all_Post, setAllPost] = useState(posts)
  const [cardItems, setCardItems] = useState(
    JSON.parse(localStorage.getItem("cardItems")) || []
  )

  const addToCart = (item) => {
    const existingItem = cardItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      setCardItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      const newItems = [...cardItems, { ...item, quantity: 1 }]
      setCardItems(newItems)
      localStorage.setItem("cardItems", JSON.stringify(newItems))
    }
  }

  const removeFromCart = (itemId) => {
    setCardItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const updateNumber = (newNumber) => {
    const updatedCardItems = cardItems.map((item) => ({
      ...item,
      quantity: newNumber,
    }))

    // Assuming you have a function like setCardItems to update the state
    setCardItems(updatedCardItems)
  }
  return (
    <FreeCardsContext.Provider
      value={{
        cardItems,
        addToCart,
        removeFromCart,
        toggleModal,
        updateNumber,
        isModalVisible,
        all_product,
        all_Paidproduct,
        all_Post,
      }}
    >
      {children}
    </FreeCardsContext.Provider>
  )
}
