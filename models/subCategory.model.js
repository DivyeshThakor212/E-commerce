const mongoose = require("mongoose")

const subCategorySchema = new mongoose.Schema({
    categoryId:{
        ref:"catogory",
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    subCategoryName:{
        type: String,
        require: true,
        trim:true,
    },
    productId:[{
        ref:"product",
        type: mongoose.Schema.Types.ObjectId,
        require:true
    }]
})

module.exports = mongoose.model("subCategory",subCategorySchema)