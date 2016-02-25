var orm = require('../config/orm.js');

var burger = {
  showBurgers: function(cb){
    orm.showBurgers('burgers', function(res) {
      cb(res);
    });
  },
  addBurger: function(burger_name, cb){
    orm.addBurger('burgers', burger_name, cb);
  },
  devouredBurger: function(burgerId, cb) {
    orm.devouredBurger('burgers', burgerId, cb);
    }
  };

module.exports=burger;