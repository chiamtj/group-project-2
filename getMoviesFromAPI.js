const axios = require("axios");
const { sequelize, Movie } = require("./models");

const movieList = [
  "tt10872600",
  "tt2953050",
  "tt9100054",
  "tt10838180",
  "tt4513678",
  "tt0241527",
  "tt6856242",
  "tt1877830",
];

const API = axios.create({
  baseURL: "https://imdb8.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "bbffdb51fbmshfb6f35e67afda15p17a33ajsn987019cb6191",
  },
});

//(async () => {
  movieList.map((movie) => {
     API.get("/title/get-overview-details", {
      params: { tconst:movie, currentCountry: "US" },
    }).then((res) => {
      Movie.create({
        title: res.data.title.title,
        image: res.data.title.image.url,
        genre: res.data.genres[0],
        synopsis: res.data.plotSummary.text,
        release_date: res.data.releaseDate,
      });
    });
  });
//})();
