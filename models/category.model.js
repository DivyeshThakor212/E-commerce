const mongoose = require("mongoose")


const catogorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        require:true
    },
    productid:{
        ref:"product",
        type: mongoose.Schema.Types.ObjectId,
        require:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("catogory",catogorySchema)