const searchService = require('../services/search.service');

class SearchController {
    async contents(req,res,next) {
        // if(
        //     typeof req.params.title !== typeof req.body.title ||
        //     typeof req.params.title == "number"
        // ){
        //     res.status(400);
        //     return res.json({ message: "Please enter a valid movie title.." });
        // }

        const result = await searchService.contents(req.query.keyword)
        res.status(result.status);
        console.log (result);

        //Return results
        return res.json({data: result.data, message: result.message});
        
    }
}

module.exports = SearchController;