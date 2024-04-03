const productModel = require("../models/product.model")

//create
exports.createProduct = async (req, res) => {

    try {
        const product = await productModel.create(req.body)
        return res.status(200).send({
            succes: true,
            product
        })
    } catch (error) {
        console.log(error)
    }
}




//read
exports.getProduct = async (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const skip = (page - 1) * limit
    const status = req.query.status
    const sortBy = req.query.sortBy
    const sortOrder = req.query.sortOrder
    const search = req.query.searchTerm
    try {

        const filter = {}
        const sort = { [sortBy]: sortOrder }
        if (status) {
            filter.status = status
        }
        if(search){
            filter.search = {$regex : new RegExp(search,"i")}
        }
        // console.log(req.user.user.role === "admin")

        const totalProduct = await productModel.countDocuments()
        const allproduct = await productModel.find().skip(skip).limit(limit).sort(sort)

        if (!allproduct) {
            return res.status(200).json({ status: false, message: "no data found" })
        }
        return res.status(200).send({
            succes: true,
            allproduct,
            totalProduct
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            succes: false,
            message: "internal serer"
        })
    }
}

//get priduct by Id

exports.getproductByid = async(req,res) =>{
  try {
    let product = await productModel.findById(req.params.id)

    if(!product){
        return res.status(200).json({succes:false , message:"please provide correct id"})
    }
     product = await productModel.findById(req.params.id)
     return res.status(200).json({
        succes:true,
        product
     })
  } catch (error) {
    console.log(error)
    return res.status(500).send({succes:false, message:"user not found"})
  }
}

//update
exports.updateProduct = async (req, res) => {
    try {
        let product = await productModel.findById(req.params.id)

        if (!product) {
            return res.status(200).json({ succes: false, message: "please provide correct id" })
        }

        product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(200).json({
            succes: true,
            message: "product updated succesfully",
            product

        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: "data not found" })
    }
}

//Delete
exports.deleteProduct = async (req, res) => {
    try {
        let deleteProduct = await productModel.findById(req.params.id)
        if (!deleteProduct) {
            res.status(200).json({ succes: false, message: "please provide correct id" })
        }

        deleteProduct = await productModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({ succes: true, message: "deleted succesfully" })


    } catch (error) {
        console.log(error, "error")
        return res.status(500).send({
            status: false,
            message: "data not deleted "
        })
    }
}