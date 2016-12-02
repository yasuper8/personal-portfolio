// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    controllers = require('./controllers');


// MIDDLEWARE
// Serve static files from the `/public` directory:
app.use(express.static('public'));

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({
  extended: true
}));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/************
 * DATABASE *
 ************/

var db = require('./models');
var MyWork = require('./models/myWork');

/**********
 * ROUTES *
 **********/


 ///////////////////////////
 ////////my portofolio route//////
 ///////////////////////////

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


 /*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

app.get('/api/myworks', controllers.myworks.index);
//
// app.delete('/api/myworks/:id', controllers.myworks.destroy);
//
// app.get('/api/myworks/:id', controllers.myworks.displayUser);
//
app.post('/api/myworks', controllers.myworks.create);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is up and running on http://localhost:3000/');
});
