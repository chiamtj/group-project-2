const express = require('express');
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Movie Tracker");
});

const ratingRoute = require('./rating_route');
const movieRoute = require('./movie_route');
// const listRoute = require("./list.route");
const reviewRoute = require('./movie.review_route');
const searchRoute = require('./titleSearch_route');

app.use(ratingRoute);
app.use(movieRoute);
app.use(searchRoute);
app.use(reviewRoute);


module.exports = app;