// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('cookie-session');

var movies         = require('./app/movie-crud');
var cities        = require('./app/city-crud');
var theatre      = require('./app/theatre-crud');
var showtime 	= require('./app/showtime-crud');
var mapping = require('./app/mapping-crud');
var authin   = require('./app/auth');
var payment  = require('./app/payment-crud');// configuration


app.use(bodyParser.json({})); // parse application/json
app.use('/movie', movies);
app.use('/city', cities);
app.use('/theatre', theatre);
app.use('/showtime', showtime);
app.use('/mapping', mapping);
app.use('/payment', payment);
app.use('/', authin);

var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //it will add multiple listener to the evrnt. invoked only the next time event is fired, after which it is remoced,
db.once('open', function(){ //it will and on-time listener to the event..
console.log("Connected to MongoDB Database...");
});

var port = process.env.PORT || 4000; // set our port
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes
require('./app/routes')(app); // pass our application into our routes

// start app
app.listen(port);

console.log('Website is Running On PORT ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
