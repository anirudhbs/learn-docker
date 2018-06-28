const express = require('express')
const client = require('redis').createClient({
  host: '127.0.0.1',
  port: '6379'
})

const app = express()
const PORT = 8080

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).send('<h2>Hello world!</h2>')
})

app.get('/inc', (req, res) => {
  client.incr('quavo', (err) => {
    if (err) {
      res.send('unable to increase')
    } else {
      res.send(`success`)
    }
  })
})

app.get('/get', (req, res) => {
  client.get('quavo', (err, reply) => {
    if (err) {
      res.send('unable to fetch')
    } else {
      res.send(`value is ${reply}`)
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
