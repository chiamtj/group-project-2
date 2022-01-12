const express = require('express');
const router = express.Router();

// Import
const MovieController = require("../controller/movie.controller");

// Instantiate the class
const movieController = new MovieController();

//Invoke generateList() in movieController based on route
router.get("/movie/list", movieController.getMovieList)
router.get('/movie/:movieId', movieController.details);

router.get('/movie', (req,res)=> {
    return res.send('Nothing here');
});

module.exports = router;