
const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    pname: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    quantity: {
        type: Number,
        require: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["available", "out of stock"],
        require: true
    },
    categoryId: {
        ref: "catogory",
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    subCategoryId: {
        ref: "subCategory",
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    reviewId: {
        ref: "Review",
        type: mongoose.Schema.Types.ObjectId,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Product", productSchema)