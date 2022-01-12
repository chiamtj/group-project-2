const generateMovieList = require("../services/movies.service");

class movieController {
  // POST /protected/onboard {driverId:1, vehicleId:1}
  async getMovieList(req, res, next) {
    
    // Consume the service layer
    const result = await generateMovieList.getMovieList()
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
  }
}

module.exports = movieController;
