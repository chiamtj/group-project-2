const {Movie} = require('../models');

module.exports = {
    contents: async(title)=> {
        let result = {
            message: null,
            status: null,
            data: null,
        };

        const movie= await Movie.findOne({where: {title: ''}});
        
        if (movie ===null || !movie) {
            result.message = 'Invalid Title !';
            result.status = 404;
            return result; 
        }

        if (movie) {
            result.message = 'Movie Found';
            result.status = 200;
            return result;
        }
    }
};
