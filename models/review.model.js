const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    productid:{
        ref: "product",
        type : mongoose.Schema.Types.ObjectId,
        require: true
    },
    rating:{
        type: Number,
        enum: [1,2,3,4,5],
        require: true
    },
    review:{
        type: String,
        require :true
    }

})

module.exports = mongoose.model("Review", reviewSchema)