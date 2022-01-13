const {Rating, Movie} = require('../models');

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
        if (!movie) {
            result.message = `Movie ID ${movieId} is not found.`;
            result.status = 404;
            return result;
        }

        const review = await Rating.create({
            userId: 1,
            movieId: movieId,
            rating: setRating,
        });
        // console.log(review.rating);

        if (review) {
            result.data = review;
            result.message = `${movie.title} has been rated ${setRating} stars`;
            result.status = 200;
            return result;
        }        
    }
    
};