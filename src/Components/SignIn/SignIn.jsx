import React from "react"
import "./SignIn.css"
import { ContentRow } from "../Content/Content"
import { Form2 } from "../Form/Form1"
export const SignIn = () => {
  return (
    <div className="container marginTop">
      <div className="sign_texts container">
        <div className="content">
          <p className="first_p">Contact</p>
          <h1 className="head">
            Get in touch today to schedule your discovery call.
          </h1>
          <p className="paragraph">
            Just fill out this short form on the right to get started in your
            life changing journey. If you prefer you can contact us below
            directly.
          </p>
          <div className="email_phone">
            <h2 className="paragraph">EMAIL</h2>
            <a href="mailto:contact@fitnesso.com" className="size">
              contact@fitnesso.com
            </a>
            <h2 className="paragraph">PHONE</h2>
            <a href="tel:+381 73 49 032" className="size">
              +381 73 49 032
            </a>
          </div>
        </div>
        <Form2 />
      </div>
    </div>
  )
}
