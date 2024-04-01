const categoryModel = require("../models/category.model")

//Create catogory
exports.createCategory = async(req,res) => {
    try {
     const category = await categoryModel.create(req.body)
     return res.status(200).send({
         succes:true,
         category
     })
    } catch (error) {
     console.log(error)
    }
 }

 //Get category
 exports.getCategory = async(req,res) => {
    try {
        const allCategory = await categoryModel.find(req.body)
    return res.status(200).send({
        succes:true,
        allCategory
    })
    } catch (error) {
       console.log(error) 
       return res.status(500).send({
        succes:false,
        message:"internal serer"
       })
    }
}
 
 //Delete catogory
 exports.deleteCategory = async(req,res) => {
     try {
      let deletecategory =  await categoryModel.findById(req.params.id)
      if(!deletecategory){
          res.status(200).json({ succes:false, message:"please provide correct id" })
      }
  
      deletecategory = await categoryModel.findByIdAndDelete(req.params.id)
      return res.status(200).json({succes:true,message:"deleted succesfully"})
  
      
     } catch (error) {
      console.log(error,"error")
      return res.status(500).send({
          status:false,
          message:"data not deleted "
      })
     }
  }