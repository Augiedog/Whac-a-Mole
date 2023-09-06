//  Configuration
require('dotenv').config()
const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const app = express()

const serverless = require('serverless-http')

// Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// serve static frontend
app.use(express.static(path.join(__dirname, 'build')));

//  Controllers
app.use(express.urlencoded({ extended: true }))
app.use('/highscore', router)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => console.error(err));

// Listen for Connection
module.exports.handler = serverless(app);
