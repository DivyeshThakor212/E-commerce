const reviewModel = require("../models/review.model")

exports.createReview = async(req,res) =>{

   try {
    const review = await reviewModel.create(req.body)
    return res.status(200).send({
        sucess: true,
        review
    })
   } catch (error) {
    return res.status(500).send({
        status:false,
        message:"Review not created yet try again later"
    })
    
   }
}

exports.getReview = async(req,res) =>{

   try {
    const reviews = await reviewModel.find()
    return res.status(200).send({
        status:true,
        reviews
    }) 
   } catch (error) {
    return res.status(500).send({
        status:false,
        message:"cannot get reviews try agian"
    })
    
   }
}
exports.deleteReview = async (req,res) =>{
    try {
        const review = await reviewModel.findByIdAndDelete(req.params.id)

        if(!review)
        {
            return res.send({message: "please add a correct id"})
        }

        return res.status(200).send({
          status: true,
          message:"delete review sucessfully"

        })
    } catch (error) {
        return res.status(500).send({
            status:false,
            message:"cannot delete review please try again"
        })
    }
}
