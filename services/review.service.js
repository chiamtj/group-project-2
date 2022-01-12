const { Movie, Review } = require("../models");

module.exports = {
  newReview: async (movieId, createReview) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };
    const movie = await Movie.findByPk(movieId);
    
    const review = await Review.create(
        {
            user_id: 1,
            movie_id: movieId,
            review: createReview,
        }
    ); 

    // to loop through
    // if (review.movieId !== movie.movieId) {
    //     result.message = `Movie not found.`;
    //     result.status = 404;
    //     return result;
    //   }


    await review.save();
    result.data = review;
    result.message = `Movie review added!`;
    result.status = 200;

    return result;
  },
};
