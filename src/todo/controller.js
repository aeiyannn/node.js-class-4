const todoService = require("./service")
const joi = require('joi')
let todoId = 2
const getTodo = (req, res) => {
    const todo = todoService.getTodo()
    res.json(todo)
}

const addTodo = (req, res) => {
    const todoSchema = joi.object({
        id: joi.number().required(),
        title: joi.string().required(),
        description: joi.string().optional(),
        isCompleted: joi.boolean().optional()
    })
    const id = todoId + 1
    todoId = id
    const payload = {
        id: id,
        title: req.body.title,
        description: req.body.description,
        isCompleted: req.body.isCompleted || false
    }
    const respo = todoSchema.validate(payload)
    console.log(payload)
    if (respo.error) {
        todoId = id - 1
        res.json(respo.error.details[0].message)
    }
    else {
        const data = todoService.addTodo(payload)
        res.send(data)
    }
}

const updateTodo = (req, res) => {
    const updateTodoSchema = joi.object({
        id: joi.number().required(),
        title: joi.string().optional(),
        description: joi.string().optional(),
        isCompleted: joi.boolean().optional()
    })
    const todoId = req.params.id
    const payload = {
        id: todoId,
        title: req.body.title,
        description: req.body.description,
        isCompleted: req.body.isCompleted

    }
   const {value , error}= updateTodoSchema.validate(payload)
   if(error && error.details[0].message){
    res.send(error.details[0].message)
   }
   else {
    const data=todoService.updateTodo(payload)
    res.send(data)
   }
}

const deleteTodo=(req,res)=>{
    const todoId=req.params.id
    console.log(todoId)
    const data =todoService.deleteTodo(todoId)
    res.send(data)
}

module.exports = { getTodo, addTodo, updateTodo, deleteTodo }