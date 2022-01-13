const { Movie } = require("../models");

module.exports = {
  getMovieList: async () => {
    let result = {
      message: null,
      status: null,
      data: null,
    };
    const movies = await Movie.findAll();

    if (!movies) {
      result.message = `No movies exist in the list`;
      result.status = 400;
      return result;
    }

    result.data = movies;
    result.status = 200;
    result.message = "List generated successfully";

    return result;
  },

  details: async(movieId)=> {
    let result = {
        message: null,
        status: null,
        data: null,
    };
    const movie = await Movie.findByPk(movieId);

    if (movie) {
        result.data = movie;
        result.message = 'Movie Found';
        result.status = 200;
        return result;
    }

    if (!movie) {
        result.message = `Movie ID ${movieId} is not found.`;
        result.status = 404;
        return result;
      }
  }
};
