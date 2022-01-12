const reviewService = require('../services/review.service');

class ReviewController {
    async newReview(req, res, next) {
        // Consume the service layer
        const result = await reviewService.newReview(req.params.movieId, req.params.createReview)
        res.status(result.status);
        console.log (result);

        //Return results
        return res.json({data: result.data, message: result.message});
    }
}

module.exports = ReviewController;
