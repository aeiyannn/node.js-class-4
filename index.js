const express = require("express")
const app = express()
const cors = require('cors')
const todoRoutes = require('./src/todo/route')
const mongoose = require("mongoose")
const corsOptions = {
    origin: 'http://localhost:5173' // Allow only this domain
};
app.use(cors())
app.use(express.json())
app.use("/todo", todoRoutes)
app.get("/", (req, res) => {
    res.send("Server is currently working")

})

mongoose.connect("mongodb+srv://backendai_db_user:sWGlombFpR4tQsv5@cluster0.ylt6yai.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("Database connected successfully")
})
.catch((err) => {
console.log(err)
})

app.listen(5000, () => {
    console.log("Server in running on 5000")
})