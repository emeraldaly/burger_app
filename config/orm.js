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
      debugger;
      cb(result);
    });
  },
  devouredBurger: function(table, burgerId, cb) { 
      var s = 'UPDATE ' + table + ' SET devoured = 1 WHERE id = ?';
      console.log(s);
      console.log(burgerId);
      connection.query(s, [burgerId], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
    
};

module.exports = orm;
