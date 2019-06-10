const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/DB')

const personaRoutes = require('./routes/persona')

mongoose.Promise = global.Promise
mongoose.connect(config.DB).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
)

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

app.use('/persona', personaRoutes)

const port = process.env.PORT || 4000

// open call
app.get('/ping', function (req, res) {
  res.send('All good!, ' + 'API Listening on port ' + port)
})

app.listen(port, function () {
  console.log('Listening on port ' + port)
})
