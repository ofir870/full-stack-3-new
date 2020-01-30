
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema(
    {
        name: { type: String, required: true ,unique: true, minlength : 3 },
        password: { type: String, required: true ,minlength: 3, trim: true},
        address: { type: String, required: true ,minlength: 3, trim: true},
        genre: { type: String, required: true , trim: true},
        email: { type: String, required: true , minlength: 5},
        lenguage: { type: String, required: true , minlength: 5},
        phoneNumber: { type: Number, required: true ,minlength: 5, trim: true},
        age: { type: Number, required: true , trim: true},
        userCardId: { type: Number, required: true ,minlength: 7, trim: true},
        message: { type: Array, required: false },

    },

    { timestamps: true },
)

module.exports = mongoose.model('user', user)