const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
    class User extends Model {}

    User.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
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
            modelName: "user",
            tableName: "users",
        }
    )

    return User;
};