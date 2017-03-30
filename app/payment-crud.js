
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST
var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
  name: String,
  number: String,
  cvv: String
 });
var Payment = mongoose.model('Payment', paymentSchema, 'payment');

//payment
router.get('/getPayment', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Payment.find({}, function (err, docs) {
         res.json(docs);
    });
});

router.get('/getPayment/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Payment.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addPayment', function(req, res){
 console.log(req.body);
  console.log(req.body.name)
  console.log(req.body.number)
  console.log(req.body.cvv)

  var title = req.body.name;
  var no = req.body.number;
  var c = req.body.cvv;
var payment = new Payment({
    name: title,
    number:no,
    cvv: c
  });
  payment.save(function(err, docs){
    if ( err ) throw err;
    console.log("Payment Saved Successfully");
    res.json(docs);
  });
  })
  // catch 404 and forward to error handler
  router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  module.exports = router;
