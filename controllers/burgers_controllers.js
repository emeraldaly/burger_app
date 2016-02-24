var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
  console.log(res);
  burger.showMeTheBurgers(function(data) {
    console.log(data);
    res.render('other');
  });
});

router.post('/add-burger', function(req, res) {
  burger.addTheBurger('Quinoa', function(result) {
    console.log('Burger added to table');
    res.redirect('/');
  });
});
console.log(router);
module.exports = router;
