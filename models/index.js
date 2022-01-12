// Import sequelize
const { Sequelize } = require("sequelize");

// DB Connection Configuration
process.env.HEROKU_POSTGRESQL_BRONZE_URL =
  "postgres://thvmjodojysgtc:798533cf056f25c2420ccb2ae885e1c2d1c3c2aa374ea43e92870450844f58b4@ec2-44-199-52-133.compute-1.amazonaws.com:5432/dcviuq7ibiie6r";
const sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  port: 5432,
  host: "ec2-44-199-52-133.compute-1.amazonaws.com",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
// Test connection function
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
}

//Import model(s)
const User = require("./user.model")(sequelize);
const Review = require("./review.model")(sequelize);
const Movie = require("./movie.model")(sequelize);
const Rating = require("./rating.model")(sequelize);

//Create associations
// Review.belongsTo(Movie, {
//   foreignKey: "movie_id",
// });

// Review.belongsTo(User, {
//   foreignKey: "user_id",
// });

Rating.belongsTo(Movie, {
  foreignKey: "movie_id",
});

Rating.belongsTo(User, {
  foreignKey: "user_id",
});

// Exports (remember enhanced object literal)
module.exports = {
  sequelize,
  testConnection,
  Movie,
  Review,
  Rating,
};
