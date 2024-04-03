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
exports.getOrders = async(req,res) =>{
    const page = parseInt(req.query.page) ||1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page-1)*limit;
    const trackingStatus = req.query.trackingStatus
    const sortBy = req.query.sortBy
    const sortOrder = req.query.sortOrder
    const search = req.query.searchTerm
    try {
        const filter ={};
        const sort = {[sortBy]:sortOrder}
        if(trackingStatus) {
            filter.trackingStatus = trackingStatus;
        }  
        if(search){
            filter.search = {$regex: new RegExp(search, "i")}
        }
     
        const orders = await orderModel.find(filter).skip(skip).limit(limit).sort(sort).populate({
            path : "userId",
            select :[ "name","address","email","mobile_no","gender"]
        }).populate({
            path : "productId",
                    "category": "clothes",
            select : ["pname","category","price",""]
        })
       console.log(orders,"orders")
        const totalOrder = await orderModel.countDocuments();

        if (!orders.length) {
            return res.status(200).json({ status: false, message: "no data found" });
        }
      
        return res.status(200).send({
            status: true,
            orders,totalOrder
        })
        
    } catch (error) {
        console.log(error, "error")
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        })
    }

}

exports.getOrder = async (req, res) => {
    try {
      const order = await orderModel.findById(req.params.id);
      console.log(order, "order");
      if (!order) {
        return res
          .status(200)
          .send({ status: false, message: "please provide correct id" });
      }
      return res.status(200).send({ status: true, order });
    } catch (error) {
      console.log(error, "error");
      return res
        .status(500)
        .send({ status: false, message: "internal server error" });
    }
  };
  

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