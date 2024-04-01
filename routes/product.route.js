const express = require("express")
const { createProduct,getproduct,updateprduct,deleteproduct } = require("../controllers/product.controller")
const { authenticUser } = require("../middleware/authentication")
const { checkAdmin } = require("../middleware/checkAdmin")

const router = express.Router()

router.route("/create-product").post(createProduct)
router.route("/get-product").get(authenticUser,checkAdmin,getproduct)
router.route("/update-product/:id").put(updateprduct)
router.route("/delete-product/:id").delete(deleteproduct)
module.exports = router