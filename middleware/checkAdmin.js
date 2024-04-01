require("dotenv").config()

const checkAdmin = (req, res, next) => {
    try {
        if (req.user.user.role === "admin") {
            next(); 
        } else {
            return res.status(403).json({
                message: "Not authorized",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

module.exports = { checkAdmin };