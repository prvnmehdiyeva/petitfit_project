import React, { useContext, useEffect, useState } from "react"
import "./Navbar.css"
import logo from "../Assets/logohoriz.png"
import { Link } from "react-router-dom"
import basket from "../Assets/basket.png"
import { ButtonV1 } from "../Buttons/Button"
import Login from "../../Pages/Login"
import { FreeCardsContext } from "../../Context/FreeCardsContext"
import { ShoppingCard } from "../Shopping Card/ShoppingCard"
// import Card from "../../Pages/Card"
export const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isTop, setIsTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isModalVisible, toggleModal } = useContext(FreeCardsContext)
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleAddToCart = () => {
    toggleModal()
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsTop(true)
        if (!scrolled) {
          setScrolled(true)
          setTimeout(() => {
            setScrolled(false)
          }, 200)
        }
      } else {
        setIsTop(false)
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isTop])

  return (
    <div
      className={isTop ? " nav_bar container transparent" : "nav_bar container"}
      style={{
        transform: scrolled ? "translateY(-70px)" : "translateY(0)",
        transition: "transform 0.6s",
      }}
    >
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div class="layout">
        <div onClick={toggleMenu} class="burger-menu burger-menu--closed">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>

      <div className={isOpen ? "menu" : "burger_menu"}>
        <ul className="nav_menu">
          <li
            onClick={() => {
              setMenu("home")
            }}
          >
            <Link style={{ textDecoration: "none", color: "#000" }} to="/">
              Home
            </Link>
            {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("about")
            }}
          >
            <Link style={{ textDecoration: "none", color: "#000" }} to="/about">
              About
            </Link>
            {menu === "about" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("free")
            }}
          >
            <Link style={{ textDecoration: "none", color: "#000" }} to="/free">
              Free Workouts
            </Link>
            {menu === "free" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("shop")
            }}
          >
            <Link style={{ textDecoration: "none", color: "#000" }} to="/shop">
              Shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
        </ul>
        <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
          <ButtonV1 text="book a call" />
        </Link>

        <div className="basket-container">
          <img
            className="basket"
            src={basket}
            alt="shop"
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  )
}
