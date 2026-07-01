let todoList = require("./../../utils/todo")
let helperfunctions = require('./../../utils/helper')
const TodoModel = require("./../Model/todo")
const getTodo = async () => {
    const data = await TodoModel.find()
    return data
}
const addTodo = async (payload) => {
    // todoList.push(payload)

    const cleanpayload = {
        title: payload.title,
        description: payload.description,
        isCompleted: payload.isCompleted
    }
    const result=await TodoModel.create(cleanpayload)
    console.log(result)
    return "Todo add successfully"

}
const updateTodo =async (payload) => {
    console.log(payload, "actual payload")
    const filterPayload = helperfunctions.cleanPayload(payload)
    // const filterPayload = {}

    // if(payload.title){
    //     filterPayload.title =payload.title
    // }
    // if(payload.description){
    //     filterPayload.description =payload.description
    // }
    // if (payload.isCompleted){
    //     filterPayload.isCompleted=payload.isCompleted
    // }
    // // console.log(filterPayload,"filter payload")
    // const isTodoExist = todoList.find((v) => {
    //     return v.id == payload.id
    // })
    // if (!isTodoExist) {
    //     console.log("Todo not exist")
    //     return "Todo does not exist"
    // }
    // console.log(isTodoExist)
    // const index = todoList.findIndex((v) => {
    //     return v.id == payload.id
    // })
    // todoList[index] = { ...isTodoExist, ...filterPayload }

    const result=await TodoModel.findByIdAndUpdate(payload.id,filterPayload)
    console.log(result)
    return "Todo Update successfully"
}


const deleteTodo = (todoId) => {
    const isTodoExist = todoList.find((v) => {
        return v.id == todoId
    })
    if (!isTodoExist) {
        console.log("Todo not exist")
        return "Todo does not exist"
    }
    todoList = todoList.filter((v) => {
        return v.id != todoId
    })
    return "Todo Delete successfully"

}

const getTodoById = async(todoId) => {
    // const detail = todoList.find((v) => {
    //     return v.id == todoId
    // })
    // if (!detail) {
    //     return "Todo does not exist"
    // }
    // return detail
    const result=await TodoModel.findById(todoId)
    return result
}
module.exports = { getTodo, addTodo, updateTodo, deleteTodo, getTodoById }