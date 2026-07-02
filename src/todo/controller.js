const todoService = require("./service")
const joi = require('joi')
let todoId = 2
const getTodo = async (req, res) => {
    const payload ={
        title:req.query.title,
        description:req.query.description,
        isCompleted:req.query.isCompleted
    }
    console.log(payload)
    const todo = await todoService.getTodo(payload)
    res.json(todo)
}

const addTodo = async (req, res) => {
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
        res.status(500).json(respo.error.details[0].message)
    }
    else {
        const data = await todoService.addTodo(payload)
        res.send(data)
    }
}

const updateTodo = async (req, res) => {
    const updateTodoSchema = joi.object({
        id: joi.string().required(),
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
    const data=await todoService.updateTodo(payload)
    res.send(data)
   }
}

const deleteTodo= async(req,res)=>{
    const todoId=req.params.id
    console.log(todoId)
    const data =await todoService.deleteTodo(todoId)
    res.send(data)
}
const getTodoById=async(req,res)=>{
    const todoId=req.params.id
    const data=await todoService.getTodoById(todoId)
    res.json(data)
}

const getTodoByTitle= async (req,res)=>{
    const title=req.query.title
    const data = await todoService.getTodoByTitle(title)
    res.json(data)
}

module.exports = { getTodo, addTodo, updateTodo, deleteTodo,getTodoById ,getTodoByTitle}