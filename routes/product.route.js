const express = require("express")
const { createProduct,getProduct,updateProduct,deleteProduct } = require("../controllers/product.controller")
const { authenticUser } = require("../middleware/authentication")
const { checkAdmin,checkUser } = require("../middleware/checkRole")

const router = express.Router()

router.route("/create-product").post(authenticUser,checkAdmin,createProduct)
router.route("/get-product").get(authenticUser,checkUser,getproduct)
router.route("/update-product/:id").put(authenticUser,checkAdmin,updateprduct)
router.route("/delete-product/:id").delete(authenticUser,checkAdmin,deleteproduct)

module.exports = router