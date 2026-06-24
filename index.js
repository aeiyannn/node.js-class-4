const express = require("express")
const app = express()
const cors=require('cors')
const todoRoutes = require('./src/todo/route')
const corsOptions = {
  origin: 'http://localhost:5173' // Allow only this domain
};
app.use(cors())
app.use(express.json())
app.use("/todo", todoRoutes)
app.get("/", (req, res) => {
    res.send("Server is currently working")

})

app.listen(5000, () => {
    console.log("Server in running on 5000")
})