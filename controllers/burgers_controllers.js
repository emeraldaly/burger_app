var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res){
  // console.log(res);
  burger.showBurgers(function(data) {
    // console.log(data);
    res.render('other', {data});
  });
});

router.post('/create', function(req, res) {
  console.log(req.body);
  burger.addBurger(req.body.burger, function(result) {
    //console.log(res.redirect);
    res.redirect('/');
  });
});

router.put('/update', function(req, res) {
  console.log(req.body.burgerId);
  burger.devouredBurger(req.body.burgerId, function(result) {
    res.redirect('/');
  });
});

// console.log(router);
module.exports = router;
