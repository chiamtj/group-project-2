require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");

const API = axios.create({
  baseURL: "https://imdb8.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "bbffdb51fbmshfb6f35e67afda15p17a33ajsn987019cb6191",
  },
});

app.get("/", function (req, res) {
  res.send("Movie Tracker");
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000 ...");
});

module.exports = API;
