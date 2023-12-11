import React, { useState } from "react"
import { ButtonV1 } from "../Buttons/Button"

import "../Form/Form1.css"
import { Alert } from "../Alert/Alert"
export const Form1 = () => {
  const [form1, setform1] = useState({
    fullName: "",
    email: "",
  })
  function handleChange(event) {
    const { name, value } = event.target
    setform1({
      ...form1,
      [name]: value,
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(form1)
  }
  return (
    <form onSubmit={handleSubmit} className="form1">
      <input
        className="input"
        type="text"
        placeholder="Full Name"
        onChange={handleChange}
        name="fullName"
        value={form1.fullName}
      />
      <input
        className="input"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={form1.email}
      />
      <ButtonV1 text="signup" />
    </form>
  )
}
export const Form2 = () => {
  const [showAlert, setShowAlert] = useState(false)

  const handleAlert = () => {
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }
  const [form2, setform2] = useState({
    fullName: "",
    email: "",
    currentweight: "",
    goalweight: "",
    describe: "",
  })
  function handleChangeForm2(event) {
    const { name, value } = event.target
    setform2({
      ...form2,
      [name]: value,
    })
  }
  async function handleSubmitForm2(event) {
    event.preventDefault()
    console.log(form2)
    handleAlert()
    setform2({
      fullName: "",
      email: "",
      currentweight: "",
      goalweight: "",
      describe: "",
    })
    // try {
    //   const res = await fetch("/form2Data.json", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(form2),
    //   })
    //   if (res.ok) {
    //     const data = await res.json()
    //     console.log("API response:", data)
    //   } else {
    //     console.error("API request failed:", res.statusText)
    //   }
    // } catch (error) {
    //   console.error("Error:", error)
    // }
  }
  return (
    <>
      <form onSubmit={handleSubmitForm2} className="form2">
        <input
          className="input"
          type="text"
          placeholder="Full Name"
          onChange={handleChangeForm2}
          name="fullName"
          value={form2.fullName}
        />
        <input
          className="input"
          type="number"
          placeholder="Current Weight"
          onChange={handleChangeForm2}
          name="currentweight"
          value={form2.currentweight}
        />
        <input
          className="input"
          type="number"
          placeholder="Goal Weight"
          onChange={handleChangeForm2}
          name="goalweight"
          value={form2.goalweight}
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          onChange={handleChangeForm2}
          name="email"
          value={form2.email}
        />
        <textarea
          className="input textarea"
          name="describe"
          onChange={handleChangeForm2}
          id="describe"
          type="text"
          placeholder="Describe Your Goals"
          cols="30"
          rows="10"
          value={form2.describe}
        ></textarea>
        <ButtonV1 text="Get in touch" />
      </form>
      {showAlert && (
        <Alert
          message="Thank you for your request. We will contact you as soon as possible."
          onClose={handleCloseAlert}
        />
      )}
    </>
  )
}
