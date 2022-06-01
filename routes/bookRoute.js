const express = require("express")
const router = express.Router()

const { Book } = require('../models/bookModel')

//GET ALL BOOKS
router.get('/api/books', (req, res) => {
    Book.find({}, (err, data) => {
        if(!err) {
            res.send(data)
        }else {
            console.log(err)
        }
    })
}) 

//ADD A BOOK 
router.post('/api/books', (req, res) => {
    const book = new Book({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        author: req.body.author,
        price: req.body.price
    })

    book.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: "Book Added", addBook:data})
        } else {
            console.log(err)
        }
    })
})


//GET A SINGLE EMPLOYEE
router.get('/api/books/:id', (req, res) => {
    Book.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})

//UPDATE BOOK
router.put('/api/books/:id', (req, res) => {
    const book = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        author: req.body.author,
        price: req.body.price
    }
    Book.findByIdAndUpdate(req.params.id, {$set:book}, {new:true}, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: "Book Updated", updateBook:data})
        } else {
            console.log(err)
        }
    })
})

//DELETE BOOK 
router.delete('/api/books/:id', (req, res) => {
    if(!err) {
        res.status(200).json({code: 200, message: "Book Deleted", deleteBook:data})
    } else {
        console.log(err)
    }
})

module.exports = router