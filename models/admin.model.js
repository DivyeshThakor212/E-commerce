const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    adminname:{
        type:String,
        require:true,
        unique:[true,"admin already exist"],
        trim:true
    },
    mail:{
        type:String,
        require:true,
        unique:[true,"Email already exist"],
        trim:true
    },
    password:{
        type:String,
        require:true
    },
    mobile_no:{
        type:Number,
        require:true,
        unique:[true,"mobile number Already exist"]
    },
    gender:{
        type:String,
        enum:["male","female"]
    }
},{
    timestamps: true,
})

module.exports = mongoose.model("admin",adminSchema)