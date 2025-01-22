const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    message: {
        type: String,
        required : true,
        minLength:4,
        maxLength:20

    }
})

const Todo = mongoose.model('to_do_list', todoSchema)
module.exports = Todo