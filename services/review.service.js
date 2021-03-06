const { Movie, Review } = require("../models");

module.exports = {
  newReview: async (movieId, createReview) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };
    const movie = await Movie.findByPk(movieId);
    
    if (!movie) {
      result.message = `Movie ID ${movieId} not found.`;
      result.data = "Not applicable";
      result.status = 404;
      return result;
    }

    if (createReview.length <= 0 ) {
      result.message = `Review cannot be empty.`;
      result.data = "Empty review";
      result.status = 400;
      return result;
    }

    const review = await Review.create(
        {
            userId: 1,
            movieId: movieId,
            review: createReview,
        }
    ); 

    result.data = review;
    result.message = `Movie review added!`;
    result.status = 200;

    return result;

  },
};
