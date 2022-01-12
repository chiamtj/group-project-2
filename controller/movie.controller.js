// For Testing Only

const movieService = require('../services/movie.service');

class MovieController {
    async details(req,res,next) {
        const result = await movieService.details(req.params.movieId)
        res.status(result.status);
        console.log (result);

        //Return results
        return res.json({data: result.data, message: result.message});
    }
}

module.exports = MovieController;