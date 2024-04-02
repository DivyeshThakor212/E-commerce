const express = require("express")

const {createOrder, getOrder,updateOrder,deleteOrder} = require("../controllers/order.controller")
const { authenticUser} = require("../middleware/authentication")
const {checkAdmin,checkUser } = require("../middleware/checkRole")


const router = express.Router()

router.route("/create-order").post(createOrder)
router.route("/get-order").get(authenticUser,checkAdmin,getOrder)
router.route("/update-order/:id").put(updateOrder)
router.route("/delete-order/:id").delete(deleteOrder)

module.exports = router