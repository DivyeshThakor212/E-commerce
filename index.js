const express = require("express")
const port = 5000
const app = express()
const user = require("./routes/user.route")
const product = require("./routes/product.route")
const dotenv = require("dotenv")
dotenv.config()
const {db} = require("./config/db")
app.use(express.json())

app.use("/api/v1",user)
app.use("/api/v1",product)

app.listen(port,()=>{
    db()
    console.log(`server is listening on ${port}`)
})