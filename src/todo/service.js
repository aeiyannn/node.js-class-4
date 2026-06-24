let todoList = require("./../../utils/todo")
let helperfunctions = require('./../../utils/helper')
const getTodo = () => {
    return todoList
}
const addTodo = (payload) => {
    todoList.push(payload)
    return "Todo add successfully"

}
const updateTodo = (payload) => {
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
    // console.log(filterPayload,"filter payload")
    const isTodoExist = todoList.find((v) => {
        return v.id == payload.id
    })
    if (!isTodoExist) {
        console.log("Todo not exist")
        return "Todo does not exist"
    }
    console.log(isTodoExist)
    const index = todoList.findIndex((v) => {
        return v.id == payload.id
    })
    todoList[index] = { ...isTodoExist, ...filterPayload }

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

const getTodoById= (todoId) =>{
    const detail = todoList.find((v)=>{
        return v.id == todoId
    })
    if(!detail){
        return "Todo does not exist"
    }
    return detail
}
module.exports = { getTodo, addTodo, updateTodo ,deleteTodo,getTodoById}