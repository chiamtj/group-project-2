const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
    class Review extends Model {}

    Review.init(
        {
            reviewId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "review_id",
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
            review: {
                type: DataTypes.STRING,
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
            modelName: "review",
            tableName: "reviews",
        }
    );

    return Review;
};