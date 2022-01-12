const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
    class Review extends Model {}

    Review.init(
        {
            review_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            movie_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
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