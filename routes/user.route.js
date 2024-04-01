const express = require("express")

const {registerUser,updateUser,deleteUser,loginuser,getUser} = require("../controllers/user.controller")
const { authenticUser} = require("../middleware/authentication")


const router = express.Router()

router.route("/login-user").get(loginuser)
router.route("/register-user").post(registerUser)
router.route("/get-users").get(authenticUser,getUser)
router.route("/update-user/:id").put(updateUser)
router.route("/delete-user/:id").delete(deleteUser)

module.exports = router