var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var sendgrid = require('sendgrid')(config.sendgrid.key);
var Visitor = require('./db/schema');
var request = require('request');
var fcKey = config.fullContact.key;
var fcController = require('./controllers/fullContactController.js');
var client = require('twilio')(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

//default email for testing
var email = new sendgrid.Email({
  to: "jeff.jones1@gmail.com",
  from: "jeff.jones1@gmail.com",
  subject: "testing",
  text: "Testing Sendgrid"
});

// initialize mongo connection
mongoose.connect('mongodb://localhost:27017/visitors');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//initialize express instance
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname + 'client')));
app.listen(port);
console.log('Now listening for visitors on port ' + port);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
})
var router = express.Router();
router.route('/api/fullcontact/visitors')
      .get(fcController.getVisitorInfo);
app.use('/', router);

// Twilio Message Notifications

app.get('/', function (req, res) {
  res.send('Twilio Notifications');
});

app.get('/sendtext', function(req, res){
  client.sendMessage({
    from: "15715778472",
      to: "19178368548",
    body: "User matches up with database",
  }, function(err, data){
    if(err)
      console.log(err);
    console.log(data);
  });
});


// sendgrid.send(email, function(err, json){
//   if(err) {return console.error(err); }
//   console.log(json);
// });
