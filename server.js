var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var index = require('./webserver/routes/index');
var News  = require('./webserver/routes/News');
var users = require('./webserver/routes/users');
var update = require('./webserver/routes/update');
var LocalStrategy=require('passport-local').Strategy;
var app = express();
var compiler = webpack(config);
var passport = require('passport');
var session = require('express-session');
var login = require('./webserver/routes/login');
var User= require('./webserver/Models/userD.js');

//app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));


//Mongoose
var db = 'mongodb://localhost/AllNews';
mongoose.connect(db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connnected with mongo");
});



//Ruotes
app.use('/', index);
app.use('/SaveHeadline',News);
app.use('/users',users);
app.use('/View',News);
app.use('/update',update);
app.use('/delete',update);
app.use('/login',login);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
}));
//middle ware for expresssession
app.use(session(
 {secret: 'secreet',
   saveUninitialized:true,
   resave:true
}));

passport.use(new LocalStrategy(
 function(username, password, done) {
   User.findOne({ username: username }, function(err, user) {
     if (err) { return done(err); }
     if (!user) {
       return done(null, false, { message: 'Incorrect username.' });
     }
     if (!(user.password==password)) {
       return done(null, false, { message: 'Incorrect password.' });
     }
     return done(null, user);
   });
 }
));
passport.serializeUser(function(user, done) {
 done(null, user.id);
});
passport.deserializeUser(function(id, done) {
 User.findById(id, function(err, user) {
   done(err, user);
 });
});

app.use(webpackHotMiddleware(compiler));



//Listening to port 8081
app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8080");
});
