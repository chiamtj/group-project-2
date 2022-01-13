const {Movie} = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
    contents: async(title)=> {
        let result = {
            message: null,
            status: null,
            data: null,
        };

        const movie= await Movie.replace(/\s+/g, '').toLowerCase().findAll({
            where: {
                title:{[Op.like]:`%${title}%`}
            }
        }
    );
        
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
