const mongoose = require("mongoose")


const catogorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        require:true
    },
    subCategory:{
        ref:"subCategory",
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    productid:[
        {
        ref:"product",
        type: mongoose.Schema.Types.ObjectId,
        require:true
    }],
    status:{
        type:String,
        enum:["active","inactive"]
    },
},{
    timestamps:true
})

module.exports = mongoose.model("catogory",catogorySchema)