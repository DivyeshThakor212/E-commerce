const jwt = require("jsonwebtoken")
const authenticateUser = require("../models/user.model")
require("dotenv").config()

//middleware to sign JWT token
const signToken = (userId) => {
    return jwt.sign({userId}, process.env.SECRET_TOKEN, {expiresIn: '12h'})
}

//middleware to verify JWT token

const authenticUser = async (req,res,next) =>{
    try {
        const token = req.headers.authorization

        if(!token)
        {
             return res.status(403).json({
                sucess: false,
                message: "please login to access this resources"

             })
        }
             try {

                const decodedData = jwt.verify(token.split(' ')[1],process.env.SECRET_TOKEN )
                console.log(decodedData,'decodedData')

                //const user = await authenticUser.findbyId(decodedData.userId)

                /* if(!user){
                    //Handle user not found
                    return res.status(404).send({
                        sucess: false,
                        message: "user not found"
                    })
                } */
                req.user = decodedData;
                next()
                
             } catch (error) {
                return res.status(400).send({
                    status: false,
                    message:"Invalid token"
                })
             }    
        
    } catch (error) {
        next(error)
    }
}

module.exports = { signToken, authenticUser };