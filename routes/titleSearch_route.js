const express = require('express');
const router = express.Router();

const SearchController = require('../controller/search.controller');
const searchController = new SearchController();

router.get('/movie', (req,res)=> {
    return res.send('Nothing here');
});

router.get('/movie/search/:title', searchController.contents);

module.exports = router;