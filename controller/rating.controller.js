const ratingService = require('../services/rating.service');

class RatingController {
    async newrating(req,res,next) {
        const result = await ratingService.newrating(req.params.movieId, req.params.setRating)
        res.status(result.status);
        console.log (result);

        //Return results
        return res.json({data: result.data, message: result.message});
    }
}

module.exports = RatingController;