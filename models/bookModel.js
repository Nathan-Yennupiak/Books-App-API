const mongoose = require("mongoose") 

//BOOK SCHEMA
const Book = mongoose.model('Book', {
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

})

module.exports = {Book}