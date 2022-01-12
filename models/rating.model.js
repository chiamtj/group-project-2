const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
    class Rating extends Model {}

    Rating.init(
        {
            rating_id: {
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