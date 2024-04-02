const express = require("express")
const { createProduct,getProduct,updateProduct,deleteProduct } = require("../controllers/product.controller")
const { authenticUser } = require("../middleware/authentication")
const { checkUser} = require("../middleware/checkRole")

const router = express.Router()

router.route("/create-product").post(authenticUser,checkUser,createProduct)
router.route("/get-product").get(authenticUser,checkUser,getProduct)
router.route("/update-product/:id").put(updateProduct)
router.route("/delete-product/:id").delete(deleteProduct)
module.exports = router