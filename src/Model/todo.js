const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
})

const Todo = mongoose.model("todos",todoSchema)

module.exports = Todo