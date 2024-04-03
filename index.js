const express = require("express")
const port = 5000
const app = express()
const user = require("./routes/user.route")
const product = require("./routes/product.route")
const order = require("./routes/order.route")
const category =  require("./routes/category.route")
const subcategory = require("./routes/subCategory.route")
const review = require("./routes/review.route")
const dotenv = require("dotenv")
dotenv.config()
const {db} = require("./config/db")
app.use(express.json())

app.use("/api/v1",user)
app.use("/api/v1",product)
app.use("/api/v1",order)
app.use("/api/v1",category)
app.use("/api/v1",subcategory)
app.use("/api/v1",review)


app.listen(port,()=>{
    db()
    console.log(`server is listening on ${port}`)
})