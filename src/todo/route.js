const express = require("express")
const router = express.Router()
const todoController=require('./controller')

router.get("/",todoController.getTodo)
router.post("/",todoController.addTodo)
router.put("/:id",todoController.updateTodo)
router.delete("/:id",todoController.deleteTodo)
router.get("/detail/:id",todoController.getTodoById)
router.get("/by-title",todoController.getTodoByTitle)
module.exports = router