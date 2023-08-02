//  Configuration
require('dotenv').config()
const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
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
app.use('/highscore', require('./controllers/highscore'))

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// Listen for Connection
// serve Connection for nodemon env
if (process.env.NODE_ENV === "nodemon") {
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`Looking for a Whack at ${PORT}`);
    });
} else {
    app.use('/highscore', router)
    module.exports.handler = serverless(app);
}

