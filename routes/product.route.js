const express = require("express")
const { createProduct,getproduct,updateprduct,deleteproduct,createcategory,deletecategory } = require("../controllers/product.controller")

const router = express.Router()

router.route("/create-catogory").post(createcategory)
router.route("/delete-catogory/:id").delete(deletecategory)
router.route("/create-product").post(createProduct)
router.route("/get-product").get(getproduct)
router.route("/update-product/:id").put(updateprduct)
router.route("/delete-product/:id").delete(deleteproduct)
module.exports = router