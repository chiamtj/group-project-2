// For Testing Only

const {Movie} = require('../models');

module.exports = {
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