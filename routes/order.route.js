const express = require("express")

const {createOrder, getOrder,updateOrder,deleteOrder} = require("../controllers/order.controller")
const { authenticUser} = require("../middleware/authentication")
const { checkUser } = require("../middleware/checkRole")


const router = express.Router()

router.route("/create-order").post(authenticUser,checkUser,createOrder)
router.route("/get-order").get(authenticUser,checkUser,getOrder)
router.route("/update-order/:id").put(authenticUser,checkUser,updateOrder)
router.route("/delete-order/:id").delete(authenticUser,checkUser,deleteOrder)

module.exports = router