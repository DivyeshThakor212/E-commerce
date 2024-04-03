const express = require("express")
const {createSubcategory,getSubcategory,updateSubcategory,deleteSubcategory} = require("../controllers/subCategory.controller")

const router = express.Router()

router.route("/create-subcategory").post(createSubcategory)
router.route("/getsubcategory").get(getSubcategory)
router.route("/updateSubcategory/:id").put(updateSubcategory)
router.route("/deleteSubcategory/:id").put(deleteSubcategory)

module.exports = router