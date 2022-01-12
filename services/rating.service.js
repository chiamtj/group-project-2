const {Review, Movie} = require('../models');

module.exports = {
    newrating: async(movieId, setRating)=> {
        let result = {
            message: null,
            status: null,
            data: null,
        };
        console.log (movieId);
        console.log (setRating);
        const movie = await Movie.findByPk(movieId);
        const review = await Review.create({
            user_id: 1,
            movie_id: movieId,
            rating: setRating,
        });
        // console.log(review.rating);

        if (review) {
            result.data = review;
            result.message = `Movie ${movie.title} rated ${setRating} stars`;
            result.status = 200;
            return result;
        }

        if (!review) {
            result.message = `Movie ID ${movieId} is not found.`;
            result.status = 404;
            return result;
        }
        
    }
    
};