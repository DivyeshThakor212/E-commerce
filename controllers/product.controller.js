const productModel = require("../models/product.model")

//create
exports.createProduct = async(req,res) => {

   try {
    const product = await productModel.create(req.body)
    return res.status(200).send({
        succes:true,
        product
    })
   } catch (error) {
    console.log(error)
   }
}




//read
exports.getProduct = async(req,res) => {
    try {
        // console.log(req.user.user.role === "admin")
        const allproduct = await productModel.find(req.body)
    return res.status(200).send({
        succes:true,
        allproduct
    })
    } catch (error) {
       console.log(error) 
       return res.status(500).send({
        succes:false,
        message:"internal serer"
       })
    }
}

//update
exports.updateProduct = async(req,res) => {
   try {
    let product = await productModel.findById(req.params.id)

    if(!product){
        return res.status(200).json({ succes:false, message:"please provide correct id"})
    }
    
    product = await productModel.findByIdAndUpdate(req.params.id, req.body,{ new: true})
    return res.status(200).json({
        succes:true,
        message:"product updated succesfully",
        product
       
    })
   } catch (error) {
    console.log(error)
    return res.status(500).send({ status: false, message: "data not found" })
   }
}

//Delete
exports.deleteProduct = async(req,res) => {
   try {
    let deleteProduct =  await productModel.findById(req.params.id)
    if(!deleteProduct){
        res.status(200).json({ succes:false, message:"please provide correct id" })
    }

    deleteProduct = await productModel.findByIdAndDelete(req.params.id)
    return res.status(200).json({succes:true,message:"deleted succesfully"})

    
   } catch (error) {
    console.log(error,"error")
    return res.status(500).send({
        status:false,
        message:"data not deleted "
    })
   }
}