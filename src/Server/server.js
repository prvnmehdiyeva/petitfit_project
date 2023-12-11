const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const path = require("path")

const app = express()
const port = 3001

app.use(bodyParser.json())

app.post("/form2Data", (req, res) => {
  const formData = req.body

  const filePath = path.join(__dirname, "form2Data.json")

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err)
      res.status(500).send("Internal Server Error")
      return
    }

    let formDataArray = JSON.parse(data)
    formDataArray.push(formData)

    fs.writeFile(filePath, JSON.stringify(formDataArray, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err)
        res.status(500).send("Internal Server Error")
        return
      }

      res.json({ message: "Data added successfully" })
    })
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
