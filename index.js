const express = require("express")
const port = 5000
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const {db} = require("./config/db")

app.get("/", (req,res) => {
    res.send("hello world")
})

app.listen(port,()=>{
    db()
    console.log(`server is listening on ${port}`)
})