
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

var mongoose = require('mongoose');

var mappingSchema = mongoose.Schema({

  mapMovie    : String,
  mapCity     : String,
  mapTheatre  : String,
  mapShowtime : String,
  fromDate    : String,
  toDate      : String

 });
var Mapping = mongoose.model('Mapping', mappingSchema, 'mapping');

//Theatres
router.get('/getMapping', function (req, res)
{
    console.log("REACHED GET FUNCTION ON SERVER");
      Mapping.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getMapping/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Mapping.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addMapping', function(req, res){
 console.log(req.body);
  console.log(req.body.mapMovie);
  console.log(req.body.mapCity);
  console.log(req.body.mapTheatre);
  console.log(req.body.mapShowtime);
  console.log(req.body.FromDate);

  var mapMov      = req.body.mapMovie;
  var mapCit      = req.body.mapCity;
  var mapTheat    = req.body.mapTheatre;
  var mapSht      = req.body.mapShowtime;
  var fromdate    = req.body.fromDate;
  var todate      = req.body.toDate;


  var mapping = new Mapping({
    mapMovie    : mapMov,
    mapCity     : mapCit,
    mapTheatre  : mapTheat,
    mapShowtime : mapSht,
    fromDate    : fromdate,
    toDate      : todate

  });

  mapping.save(function(err, docs){
    if ( err ) throw err;
    console.log("Mapping Details Saved Successfully");
    res.json(docs);
  });
  })

router.delete('/deleteMapping/:id', function(req, res){
   console.log("REACHED DELETE FUNCTION ON SERVER");
      Mapping.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})
router.get('/selmoviename/:t', function (req, res) {
    Mapping.find({mapMovie:req.params.t}, function (err, docs) {
         res.json(docs);

    });
});

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
