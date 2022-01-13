const express = require('express');
const router = express.Router();
// router.use(express.json()); 

// Import
const ReviewController = require("../controller/review.controller");
// Instantiate the class
const reviewController = new ReviewController();

// Invoke newReview() in ReviewController based on the route
router.post('/movie/:movieId/review/newReview', reviewController.newReview);

module.exports = router;

// POST /movie/:movieId/review