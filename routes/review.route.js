const express = require("express")
const {createReview,getReview,deleteReview} = require("../controllers/review.controller")

const router = express.Router();

router.route("/create-review").post(createReview)
router.route("/get-review").get(getReview)
router.route("/delete-review/:id").delete(deleteReview)

module.exports = router