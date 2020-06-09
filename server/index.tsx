const express = require('express')
const router = require ('./routes/message-router')
import { Application } from 'express';

const app : Application = express();

app.listen(5000, () => {
  console.log('listening on localhost:5000')
})

app.use('/api', router)