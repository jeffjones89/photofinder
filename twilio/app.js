var express = require('express');
var app = express();
var config = require('../config.js');
var client = require('twilio')(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);


app.get('/', function (req, res) {
  res.send('Twilio Notifications');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
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
