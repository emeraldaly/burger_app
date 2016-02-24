var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
  }));

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
  }));
app.set('view engine', 'handlebars');

var controller = require('./controllers/burgers_controllers.js');
app.use('/', controller);

app.listen(PORT, function() {
    console.log("listening on port %s", PORT);
});