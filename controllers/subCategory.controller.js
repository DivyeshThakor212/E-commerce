const subCategoryModel = require("../models/subCategory.model")

exports.createSubcategory = async (req, res) => {
    try {
        const subCategory = await subCategoryModel.create(req.body)
        return res.status(200).send({
            status: true,
            subCategory
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: "internal server error" })
    }
}

exports.getSubcategory = async (req, res) => {
    try {
        const Subcategory = await subCategoryModel.find()
        return res.status(200).send({
            status: true,
            Subcategory
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
exports.updateSubcategory = async(req,res) => {
    try {
     let subCategory = await subCategoryModel.findById(req.params.id)
 
     if(!subCategory){
         return res.status(200).json({ succes:false, message:"please provide correct id"})
     }
     
     order = await subCategoryModel.findByIdAndUpdate(req.params.id, req.body,{ new: true})
     return res.status(200).json({
         succes:true,
         message:"updated succesfully",
         subCategory 

        
     })
    } catch (error) {
     console.log(error)
     return res.status(500).send({ status: false, message: "data not found" })
    }
 }

 //delete

 exports.deleteSubcategory = async(req,res) => {
    try {
     let subCategory = await subCategoryModel.findById(req.params.id)
 
     if(!subCategory){
         return res.status(200).json({ succes:false, message:"please provide correct id"})
     }
     
     order = await subCategoryModel.findByIdAndDelete(req.body.params)
     return res.status(200).json({
         succes:true,
         message:"deleted succesfully",
     })
    } catch (error) {
     console.log(error)
     return res.status(500).send({ status: false, message: "data not found" })
    }
 }