const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Movie extends Model {}

  Movie.init(
    {
      movie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "movie_id",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "title",
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "image",
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "genre",
      },
      synopsis: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "synopsis",
      },
      release_date: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "release_date",
      },
      cast_members: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "cast_members",
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
      modelName: "movie",
      tableName: "movies",
    }
  );

  return Movie;
};
