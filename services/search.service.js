const {Movie} = require('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    contents: async(keyword)=> {
        let result = {
            message: null,
            status: null,
            data: null,
        };

        const movie = await Movie.findAll({
            where: {title: { [Op.iLike]: '%'+keyword+'%' } }
        } );
        
        if (!movie) {
            result.message = 'No movie with that title!';
            result.status = 404;
            return result; 
        }

        if (movie) {
            result.message = 'Movie Found';
            result.data = movie;
            result.status = 200;
            return result;
        }
    }
};
