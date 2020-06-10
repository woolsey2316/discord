import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
const db = require('./db')
import router from './routes/message-router'

const API_PORT : Number = 5000
const app : express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', router)

app.listen(API_PORT, () => {
  console.log(`listening on localhost:${API_PORT}`)
})

