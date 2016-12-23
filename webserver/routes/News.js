var express = require('express');
var router = express.Router();
var NewsStory = require('../Models/user.js');
var mongoose = require('mongoose');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
        res.json({redirect:true});
  }
router.post('/', isLoggedIn, function(req, res) {
    var Story = new NewsStory({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        urlToImage: req.body.urlToImage,
        publishedAt: req.body.publishedAt,
        Comments: req.body.Comments
    });
    //  console.log(news);
    Story.save(function(err) {
        if (err) {
            res.end("post req error");
        }
        res.end("news created");
    });
});

router.get('/', function(req, res, next) {
    NewsStory.find({}, function(err, News) {
        if (err) {
            res.end("Error Occured in get");
        } else {
            res.json(News);
        }
    });

});

module.exports = router;
