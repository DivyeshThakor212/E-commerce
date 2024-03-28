const mongoose = require("mongoose")

const db = async() => {
    try {
        await mongoose.connect(process.env.Mongo_URL)
        console.log("database connected succesfuly")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {db}