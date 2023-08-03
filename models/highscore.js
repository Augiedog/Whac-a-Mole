const mongoose = require('mongoose')
const { Schema } = mongoose

const highscoreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    toJSON: { virtuals: true }
})


module.exports = mongoose.model('HighScore', highscoreSchema)