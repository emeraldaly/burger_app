var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = 3000;

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
  }))

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
  }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/things_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
    console.log("listening on port %s", PORT);
