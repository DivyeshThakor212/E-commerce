const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    pname:{
        type:String,
        require:true,
        trim:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    },
    status:{
        type:String,
        enum:["available","out of stock"],
        require:true
    }, 
    category:{
        ref:"Category",
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    subCategory:{
        ref:"subCategory",
        type:  mongoose.Schema.Types.ObjectId,
        require:true
    },
},{
    timestamps:true,
})

module.exports = mongoose.model("product",productSchema)