//  Configuration
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const mongoose = require('mongoose')

// Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// serve static frontend
app.use(express.static(path.join(__dirname, 'build')));

//  Controllers
app.use(express.urlencoded({ extended: true }))
// app.use('/highscore', require('./controllers/highscore'))

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// Listen for Connection
app.listen(process.env.PORT, () => {
    console.log(`Ready to Whack ${process.env.PORT}`)
})