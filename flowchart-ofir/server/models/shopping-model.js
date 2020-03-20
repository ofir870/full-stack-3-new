const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopping = new Schema(
    {



    },

    { timestamps: true },
)

module.exports = mongoose.model('shopping', shopping)