const mongoose = require('mongoose')
const Schema = mongoose.Schema

const event = new Schema(
    {



    },

    { timestamps: true },
)

module.exports = mongoose.model('event', event)