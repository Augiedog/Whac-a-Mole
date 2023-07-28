const mongoose = require('mongoose')
const { Schema } = mongoose

const highscore = new Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true
    },
    date: Date
},{
    toJSON: { virtuals: true }
})

 
module.exports = mongoose.model('highscore')