import React from "react"
import "./Footer.css"
import logo from "../Assets/logohorizwhite.png"
import master from "../Assets/master.png"
import visa from "../Assets/visa.png"
import paypal from "../Assets/paypal.png"
import stripe from "../Assets/stripe.png"
import american from "../Assets/american.png"
import { Link } from "react-router-dom"
export const Footer = () => {
  return (
    <div className=" footer container">
      <div className="first">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="menu">
          <div className="first">
            <div>
              <h2>CONTACT</h2>
              <p className="contact">contact@fitnesso.com</p>
            </div>
            <div className="list">
              <h2>LICENCING</h2>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Copyright Flow Ninja
              </Link>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Powered By Webflow
              </Link>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Licencing
              </Link>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Support
              </Link>
            </div>
          </div>
          <div className="list">
            <h2>LICENCING</h2>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Copyright Flow Ninja
            </Link>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Powered By Webflow
            </Link>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Licencing
            </Link>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Support
            </Link>
          </div>
        </div>
      </div>
      <div className="second">
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <img src={master} />
        </Link>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <img src={paypal} />
        </Link>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <img src={american} />
        </Link>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <img src={visa} />
        </Link>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <img src={stripe} />
        </Link>
      </div>
    </div>
  )
}
