const express = require('express')
const bodyParser = require('body-parser')
const getHash = require('./utils')
const client = require('redis').createClient({
  host: '127.0.0.1',
  port: '6379'
})

const app = express()
const PORT = 8080

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('<h2>Hello world!</h2>')
})

app.post('/shorten', (req, res) => {
  const { url } = req.body
  const hash = getHash()
  client.set(hash, url, (err) => {
    if (err) {
      res.send('unable to shorten')
    } else {
      res.send(`hash is ${hash}`)
    }
  })
})

app.get('/:hash', (req, res) => {
  const { hash } = req.params
  client.get(hash, (err, reply) => {
    if (err || reply === null) {
      res.send(`url not found`)
    } else {
      res.send(`url is ${reply}`)
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
