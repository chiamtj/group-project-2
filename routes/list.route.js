const express = require('express');
const router = express.Router();

// Import
const MovieController = require("../controller/movie.controller");

// Instantiate the class
const movieController = new MovieController();

//Invoke generateList() in movieController based on route
router.post("/movie/list", movieController.getMovieList)


module.exports = router;