var express = require('express');
var router = express.Router();
var NewsStory= require('../Models/user.js');
var mongoose=require('mongoose');

router.get('/', function(req, res, next) {
  res.send("Hello updar");
});
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
        res.json({redirect:true});
  }


router.post('/', isLoggedIn, function(req, res) {

  NewsStory.findById(req.body.objId, function(err, news) {
    if (err) throw err;

    // change the users location
    news.Comments =req.body.Comments;

    // save the user
    news.save(function(err) {
      if (err) throw err;

      console.log('User successfully updated!');
    });

  });
});
router.delete('/:id', function (req, res) {
  console.log('fdf')
  console.log(req.params.id)
  NewsStory.findById(req.params.id, function(err, news) {
    if (err) throw err;



    // delete the user
    news.remove(function(err) {
      if (err) throw err;

      console.log('User successfully deleted!');
    });

  });});

module.exports = router;
