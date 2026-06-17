const express = require("express")
const app = express()
const todoRoutes = require('./src/todo/route')

app.use(express.json())
app.use("/todo", todoRoutes)
app.get("/", (req, res) => {
    res.send("Server is currently working")

})

app.listen(5000, () => {
    console.log("Server in running on 5000")
})