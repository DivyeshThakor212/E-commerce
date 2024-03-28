const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    adminname:{
        name:String,
        require:true,
        unique:[true,"admin already exist"],
        trim:true
    },
    mail:{
        name:String,
        require:true,
        unique:[true,"Email already exist"],
        trim:true
    },
    password:{
        name:String,
        require:true
    },
    mobile_no:{
        name:Number,
        require:true,
        unique:[true,"mobile number Already exist"]
    },
    gender:{
        name:String,
        enum:["male","female"]
    }
},{
    timestamps: true,
})

module.exports = mongoose.model("admin",adminSchema)