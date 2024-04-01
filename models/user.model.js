const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        // unique : true
    },
    mobile_no: {
        type: Number,
        require: true,
        trim: true,
        //unique: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "transgender"]
    },
    dob: {
        type: Date,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],

    }

}, {
    timestamps: true,
})
module.exports = mongoose.model("User", userSchema)