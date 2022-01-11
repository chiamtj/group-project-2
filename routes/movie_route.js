const express = require('express');
const router = express.Router();

const MovieController = require('../controller/movie.controller');
const movieController = new MovieController();

router.get('/movie', (req,res)=> {
    return res.send('Nothing here');
});

router.get('/movie/:movieId', movieController.details);

module.exports = router;