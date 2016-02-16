var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
  burger.showMeTheBurgers(function(data) {
    res.render('burgersindex');
  });
});

router.post('/add-burger', function(req, res) {
  burger.addTheBurger('Quinoa', function(result) {
    console.log('Burger added to table');
    res.redirect('/');
  });
});

module.exports = router;
