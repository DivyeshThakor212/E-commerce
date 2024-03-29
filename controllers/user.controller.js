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