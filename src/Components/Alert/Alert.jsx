import React, { useEffect } from "react"
import "./Alert.css"
export const Alert = ({ message, onClose }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, 3000)
  })
  return (
    <div className="custom-alert">
      <p>{message}</p>
    </div>
  )
}
