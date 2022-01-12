const express = require('express');
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Movie Tracker");
});

const ratingRoute = require('./rating_route');
const movieRoute = require('./movie_route');
<<<<<<< HEAD
const searchRoute = require('./titleSearch_route');

app.use(ratingRoute);
app.use(movieRoute);
app.use(searchRoute);
=======
const listRoute = require("./list.route");
const reviewRoute = require('./movie.review_route');

app.use(ratingRoute);
app.use(movieRoute);
app.use(reviewRoute);
>>>>>>> 0eb85fadf828ec12d920e1b393fb9ec03ca98e7b

module.exports = app;