const monngose = require("mongoose")

const productSchema = new monngose.Schema({
    pname:{
        type:String,
        require:true,
        trim:true
    },
    category:{
        type:String,
        enum:["grocery","clothes","cosmetics","footware"],
        require:true
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
    }
},{
    timestamps:true,
})

module.exports = monngose.model("product",productSchema)