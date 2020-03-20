
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersData = new Schema(
    {



    },

    { timestamps: true },
)

module.exports = mongoose.model('usersData', usersData)