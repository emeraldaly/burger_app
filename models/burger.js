var orm = require('../config/orm.js');

var burger = {
  showMeTheBurgers: function(cb){
    orm.showBurgers('burgers', function(res) {
      cb(res);
    });
  },
  addTheBurger: function(burgerName, cb){
    orm.addBurger('burgers', burgerName, cb);
  }
}

module.exports=burger;