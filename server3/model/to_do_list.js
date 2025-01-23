const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    message: {
        type: String,
        required : true,
        minLength:4,
        maxLength:20

    }
})

// filename, and variable name are assigned to Todo inorder to easily export
const Todo = mongoose.model('to_do_list', todoSchema)
module.exports = Todo

