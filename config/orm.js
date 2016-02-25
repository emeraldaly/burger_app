var connection = require('./connection.js');

var orm = {
  showBurgers: function(table, cb){
    var s = 'SELECT * FROM ' + table;
    connection.query(s, function(err, result, fields) {
      if(err){ throw err }
        cb(result);
    });
  },
  addBurger: function(table, burger, cb) {
    var s = 'INSERT INTO ' + table + '(burger_name, devoured) VALUES (?,?);';
    connection.query(s, [burger, 0], function(err, result, fields) {
      if (err) throw err;
      cb(result);
    });
  },
  devouredBurger: function(table, burger, cb) { 
      var s = 'UPDATE ' + tableInput + ' SET devoured = 1';
      connection.query(s, [burger, 1], function(err, result) {
      if (err) throw err;
      cb(result);
    });
    },
    
};

module.exports = orm;
