const express = require('express')
const client = require('redis').createClient({
  host: 'redis',
  port: '6379'
})

const app = express()
const PORT = 8080

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).send('<h2>Hello world!</h2>')
})

app.get('/set/:key/:val', (req, res) => {
  const { key, val } = req.params
  client.set(key, val, (err) => {
    if (err) {
      res.send('unable to store')
    } else {
      res.send(`success`)
    }
  })
})

app.get('/get/:key', (req, res) => {
  const { key } = req.params
  client.get(key, (err, reply) => {
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
