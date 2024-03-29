const express = require("express")

const {registerUser,updateUser,deleteUser,loginuser,getUser} = require("../controllers/user.controller")


const router = express.Router()

router.route("/register-user").post(registerUser)
router.route("/login-user").get(loginuser)
router.route("/get-user").get(getUser)
router.route("/update-user/:id").get(updateUser)
router.route("/delete-user/:id").delete(deleteUser)

module.exports = router