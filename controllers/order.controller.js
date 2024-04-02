const orderModel = require("../models/order.model")

exports.createOrder = async(req,res) =>{

     try {
        const order = await orderModel.create(req.body)
        return res.status(200).send({
            sucess: true,
            order
        })
        
     } catch (error) {
        return res.status(500).send({
            status:false,
            message:"Internal server error "
        })
     }
}
exports.getOrder = async(req,res) =>{

    try {
    
        const order = await orderModel.find().populate({
            path : "user_id",
            select :[ "name","address","email","mobile_no","gender"]
        }).populate({
            path : "product_id",
                    "category": "clothes",
            select : ["pname","category","price",""]
        })
        
        return res.status(200).send({
            status: true,
            order
        })
        
    } catch (error) {
        console.log(error, "error")
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        })
    }
}

//update
exports.updateOrder = async(req,res) => {
    try {
     let order = await orderModel.findById(req.params.id)
 
     if(!order){
         return res.status(200).json({ succes:false, message:"please provide correct id"})
     }
     
     order = await orderModel.findByIdAndUpdate(req.params.id, req.body,{ new: true})
     return res.status(200).json({
         succes:true,
         message:"product updated succesfully",
         order
        
     })
    } catch (error) {
     console.log(error)
     return res.status(500).send({ status: false, message: "data not found" })
    }
 }
 exports.deleteOrder = async(req,res) => {
    try {
     let deleteOrder =  await orderModel.findById(req.params.id)
     if(!deleteOrder){
         res.status(200).json({ succes:false, message:"please provide correct id" })
     }
 
     deleteOrder = await orderModel.findByIdAndDelete(req.params.id)
     return res.status(200).json({succes:true,message:"deleted succesfully"})
 
     
    } catch (error) {
     console.log(error,"error")
     return res.status(500).send({
         status:false,
         message:"data not deleted "
     })
    }
 }