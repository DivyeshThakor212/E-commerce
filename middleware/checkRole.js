
require("dotenv").config();

const checkAdmin = (req, res, next) => {
  try {
    if (req.user.user.role === "admin") {
      return res.status(403).json({
        message: "You are admin , you dont have access",
      });
      
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const checkUser = (req, res, next) => {
  try {
    if (req.user.user.role === "user") {
      next();
    } else {
      return res.status(403).send({
        message: "You are not user, you can not acees",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { checkAdmin, checkUser};
