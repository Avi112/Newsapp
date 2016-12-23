var passport = require('passport');
var expressSession = require('express-session');
var express = require('express');
var router = express.Router();
var LocalStrategy=require('passport-local');
var app = express();
var app = express();
var User= require('../Models/userD.js');
var flash=require('connect-flash');


// passport/login.js
router.post('/',passport.authenticate('local'),function(req,res){

   res.send("Welcome")

});

module.exports=router;
