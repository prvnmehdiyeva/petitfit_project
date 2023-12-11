import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Free from "./Pages/Free"
import Shop from "./Pages/Shop"
// import Card from "./Pages/Card"
import Login from "./Pages/Login"
import { Swiper1, Swiper2 } from "./Components/Swiper/Swiper1"
import { Social } from "./Components/Social/Social"
import { Footer } from "./Components/Footer/Footer"
import { Getmeal } from "./Components/GetMeal/Getmeal"
import { DetailsPageFree } from "./Pages/DetailsPage"
import { DetailsPaidPage } from "./Pages/DetailsPaidPage"
import { ShoppingCard } from "./Components/Shopping Card/ShoppingCard"
import { useContext } from "react"
import { FreeCardsContext } from "./Context/FreeCardsContext"
import { DetailsPostPage } from "./Pages/DetailsPostPage"

function App() {
  const { isModalVisible } = useContext(FreeCardsContext)

  return (
    <div>
      {isModalVisible && <ShoppingCard />}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/free" element={<Free />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detailspage" element={<DetailsPageFree />}>
            <Route path=":productId" element={<DetailsPageFree />} />
          </Route>
          <Route path="/detailspaidpage" element={<DetailsPaidPage />}>
            <Route path=":productId" element={<DetailsPaidPage />} />
          </Route>
          <Route path="/detailspostpage" element={<DetailsPostPage />}>
            <Route path=":productId" element={<DetailsPostPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Getmeal />
        <div style={{ position: "relative" }}>
          <Swiper1 className="timeline" />
          <Social className="timeline" />
          <Swiper2 className="timeline" />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
