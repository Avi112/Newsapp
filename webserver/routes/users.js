var express = require('express');
var router = express.Router();
var User= require('../Models/userD.js');
var mongoose=require('mongoose');


router.post('/', function(req, res) {
var UserDetails = new User({
        username: req.body.username,
        password: req.body.password
    });
  //  console.log(news);
    UserDetails.save(function(err) {
        if (err) {
            res.end("post req error");
        }
        res.end("news created" );
    });
});
router.get('/logout', function(req, res) {
   req.logout();
           //req.session.destroy();
           res.send("logout");
       });




module.exports = router;
