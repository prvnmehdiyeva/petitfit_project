import React from "react"
import "../GetMeal/Getmeal.css"
import { Form1 } from "../Form/Form1"
export const Getmeal = () => {
  return (
    <div className="timeline getMeal">
      <div className="form">
        <h1 className="head">Get our free meal plan</h1>
        <p className="parag">
          Signup to our newsletter to get a free 30 day meal plan. You will
          receive all guidance on what to eat, how to cook and how much to eat.
        </p>
        <Form1 />
      </div>
    </div>
  )
}
