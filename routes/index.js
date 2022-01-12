const express = require("express");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.
const listRoute = require("./list.route");


app.use(listRoute);


module.exports = app;