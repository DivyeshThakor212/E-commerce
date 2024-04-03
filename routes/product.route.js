const express = require("express")
const { createProduct,getProduct,getproductByid,updateProduct,deleteProduct } = require("../controllers/product.controller")
const { authenticUser } = require("../middleware/authentication")
const { checkAdmin,checkUser } = require("../middleware/checkRole")

const router = express.Router()

router.route("/create-product").post(authenticUser,checkAdmin,createProduct)
router.route("/get-productByid/:id").get(getproductByid)
router.route("/get-product").get(authenticUser,getProduct)
router.route("/update-product/:id").put(authenticUser,checkAdmin,updateProduct)
router.route("/delete-product/:id").delete(authenticUser,checkAdmin,deleteProduct)

module.exports = router