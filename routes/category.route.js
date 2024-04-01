const express = require("express")
const {createCategory,getCategory,deleteCategory} = require("../controllers/catogory.controller")

const router = express.Router()

router.route("/create-catogory").post(createCategory)
router.route("/get-catogory").get(getCategory)
router.route("/delete-catogory/:id").delete(deleteCategory)
module.exports = router