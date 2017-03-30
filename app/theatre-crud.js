
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

var mongoose = require('mongoose');

var theatreSchema = mongoose.Schema({

  theatTitle: String,
  theatcity:String
 });
var Theatre = mongoose.model('Theatre', theatreSchema, 'Theatre');

//Theatres
router.get('/getTheatre', function (req, res)
{
    console.log("REACHED GET FUNCTION ON SERVER");
  Theatre.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getTheatre/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Theatre.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addTheatre', function(req, res){
 console.log(req.body);
  console.log(req.body.theatTitle);
  console.log(req.body.theatcity);

  var title = req.body.theatTitle;
  var city = req.body.theatcity;

  var theatre = new Theatre({
    theatTitle: title,
    theatcity: city
  });
  theatre.save(function(err, docs){
    if ( err ) throw err;
    console.log("Theatre Saved Successfully");
    res.json(docs);
  });
  })

router.delete('/deleteTheatre/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Theatre.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateTheatre/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Theatre.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
