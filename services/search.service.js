const {Movie} = require('../models');
const Sequelize = require("sequelize");
const res = require('express/lib/response');
const Op = Sequelize.Op;

module.exports = {
    contents: async(title)=> {
        let result = {
            message: null,
            status: null,
            data: null,
        };

        const movie= await Movie.findAll({
            where: {
                title:{[Op.iLike]:'%' + title + '%'}
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
            result.data=movie    
            result.status = 200;
            return result;
        }
    }
};
