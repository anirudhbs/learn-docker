const express = require("express")

const client = require("redis").createClient({
  host: "127.0.0.1",
  port: "6379"
})

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.status(200).send("<h2>Hello world!</h2>")
})

app.get("/increment-value", (req, res) => {
  client.incr("hits", err => {
    if (err) {
      res.send("unable to increase")
    } else {
      res.send(`success`)
    }
  })
})

app.get("/get-count", (req, res) => {
  client.get("hits", (err, reply) => {
    if (err) {
      res.send("unable to fetch")
    } else {
      res.send(`i have been hit ${reply} times`)
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
