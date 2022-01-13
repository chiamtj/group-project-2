const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
    class Rating extends Model {}

    Rating.init(
        {
            ratingId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "rating_id",
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: "user_id",
            },
            movieId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: "movie_id",
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                field: "created_at",
            },
            updatedAt: {
            type: DataTypes.DATE,
            field: "updated_at",
            },
        },
        {
            sequelize,
            modelName: "rating",
            tableName: "ratings",
        }
    );

    return Rating;
};