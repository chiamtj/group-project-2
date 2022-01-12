/*
  Explain to student:

  In this file, we demonstrate the use of exporting a literal object. There is no strict rule to whether should
  service be object literal or class, it depends on actual use case and software design. In this exercise,
  we just want to demonstrate the another approach.
*/

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
};
