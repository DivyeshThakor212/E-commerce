const express = require("express")

const {createOrder, getOrders,getOrder,updateOrder,deleteOrder} = require("../controllers/order.controller")
const { authenticUser} = require("../middleware/authentication")

const {checkAdmin,checkUser } = require("../middleware/checkRole")



const router = express.Router()


router.route("/create-order").post(createOrder)
router.route("/get-orders").get(authenticUser,checkUser,getOrders)
router.route("/get-order/:id").get(getOrder)
router.route("/update-order/:id").put(authenticUser,checkUser,updateOrder)
router.route("/delete-order/:id").delete(authenticUser,checkUser,deleteOrder)


module.exports = router