const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feed = new Schema(
    {



    },

    { timestamps: true },
)

module.exports = mongoose.model('feed', feed)