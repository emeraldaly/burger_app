var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
  console.log(res);
  burger.showMeTheBurgers(function(data) {
    console.log(data);
    res.render('other', {burger_data});
  });
});

router.post('/add-burger', function(req, res) {
  burger.addTheBurger(req.body.entry, function(res) {
    console.log('Burger added to table');
    res.redirect('/');
  });
});

router.put('/update', function(req, res) {
  burger.devouredBurger(req.body.burger, function(res) {
    res.redirect('/');
  });
});
console.log(router);
module.exports = router;
