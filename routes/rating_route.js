const express = require('express');
const router = express.Router();

const RatingController = require('../controller/rating.controller');
const ratingController = new RatingController();

router.get('/movie', (req,res)=> {
    return res.send('Nothing here');
});

router.post('/movie/:movieId/rating/:setRating', ratingController.newrating);

module.exports = router;