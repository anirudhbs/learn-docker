const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.status(200).send("<h2>Hello world!</h2>")
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
