const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.loginuser = async(req,res) => {
    try {
        console.log(req)
        const email = req.body.email
        const password = req.body.password

        const user = await userModel.findOne({ email:email })

        if(!user){ 
            return res.status(400).json({
                message: "user not found"
            })
        }

        if(await bcrypt.compare(password, user.password)){
            const accessToken = jwt.sign({ user: user}, process.env.SECRET_TOKEN, { expiresIn: "12h" });
            return res.status(200).json({
                data:accessToken
            })
        }
    } catch (error) {
       console.log(error) 
    }
}


exports.registerUser = async(req,res) =>{

   try {
    const payload = req.body;

    var salt = await bcrypt.genSalt(10);
    var hashedPassword = bcrypt.hashSync(payload.password,salt)
    payload.password = hashedPassword;

    const user = await userModel.create(payload)
    return res.status(200).send({
        success :true,
        user
    })    
   } catch (error) {
    console.log(error,"error")
    return res.status(500).send({
        status:false,
        Message:("user not register please try agin")
    })
   }
}

exports.updateUser = async(req,res) =>{
    try{
    let user = await userModel.findById(req.params.id);
    console.log(user,"user")
    if(!user){
        return res.status(200).send({status:false, message:"please provide correct Id"})
    }
    user = await userModel.findByIdAndUpdate(req.params.id,req.body,{
        new :true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        status : true,
        user
    }) ;
}
      catch(error)  {
        console.log(error)
        return res.status(500).send({status: false, message: "internal server error"})
      }
 
}
exports.deleteUser = async (req, res) => {
    try {
     let user = await userModel.findById(req.params.id)
     if (!user) {
       return res
         .status(200)
         .json({ status: false, message: "please provide correct id" });
     }
   
     user = await userModel.findByIdAndDelete(req.params.body)
   
     res.status(200).json({
       status: true,
       message: "Delete sucessfully",
     });
     
    } catch (error) {
     console.log(error,"error")
     return res.status(500).send({
         status:false,
         message:"Internal server error"
     })
     
    }
   };