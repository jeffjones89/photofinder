//query api
var config = require('../config.js');
var request = require('request');
var fcKey = config.fullContact.key
exports.getVisitorInfo = function(req, res, next) {
  // var index = req.body.email.indexOf('@gmail.com')
  // if(index > -1){
  //   console.log(req.body.email);
  // }
  console.log(req.body)
  request('https://api.fullcontact.com/v2/person.json?email=' + req.body.email + '&apiKey=' + fcKey, function(err, response, body) {
    if (!err & res.statusCode == 200) {
      res.json(JSON.parse(body));
    } else {
      res.send(404);
    }
  });
}
