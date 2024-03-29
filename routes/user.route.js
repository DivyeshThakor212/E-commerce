const express = require("express")
const { loginuser } = require("../controllers/user.controller")

const router = express.Router()

router.route("/login-user").get(loginuser)
module.exports = router