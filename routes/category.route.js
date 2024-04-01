const express = require("express")
const {createcategory,deletecategory} = require("../controllers/catogory.controller")

const router = express.Router()

router.route("/create-catogory").post(createcategory)
router.route("/delete-catogory/:id").delete(deletecategory)
module.exports = router