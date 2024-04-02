require("dotenv").config()
const checkAdmin = (req, res, next) => {
    try {
        if (req.user.user.role === "admin") {
            return res.status(403).json({
                message: "You are admin, You dont have access",
            });
           
        } else {
            next();
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}; 
const checkUser = (req,res,next) => {
    try {
        if(req.user.user.role==="user"){
            return res.status(403).json("You are User, You can not acces")
           
        }
        else{
            next()
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"internal server Error"
        })
    }
}

module.exports = { checkAdmin,checkUser };
