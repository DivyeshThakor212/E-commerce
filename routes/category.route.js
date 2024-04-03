const express = require("express")
const {createCategory,getCategory,deleteCategory} = require("../controllers/catogory.controller")
const { checkAdmin} = require("../middleware/checkRole")

const router = express.Router()

router.route("/create-catogory").post(createCategory)
router.route("/get-catogory").get(getCategory)
router.route("/delete-catogory/:id").delete(checkAdmin,deleteCategory)
module.exports = router