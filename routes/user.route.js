const express = require("express")

const {registerUser,updateUser,deleteUser,loginuser} = require("../controllers/user.controller")


const router = express.Router()

router.route("/register-user").post(registerUser)
router.route("/login-user").get(loginuser)
router.route("/update-user/:id").get(updateUser)
router.route("/delete-user/:id").delete(deleteUser)

module.exports = router