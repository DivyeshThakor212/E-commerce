const express = require("express")
const { createProduct,getproduct,updateprduct,deleteproduct } = require("../controllers/product.controller")


router.route("/create-product").post(createProduct)
router.route("/get-product").get(getproduct)
router.route("/update-product/:id").put(updateprduct)
router.route("/delete-product/:id").delete(deleteproduct)
module.exports = router