//query api
var config = require('../config.js');
var request = require('request');
var fcKey = config.fullContact.key;
var Employee = require('../db/schema');
exports.getVisitorInfo = function(req, res, next) {
  var index = req.body.email.indexOf('@bytecubed.com')
  if (index > -1) {
    Employee.findOne({
      'email': req.body.email
    }, function(err, employee) {
      res.json(employee);
    })
  } else {
    request('https://api.fullcontact.com/v2/person.json?email=' + req.body.email + '&apiKey=' + fcKey, function(err, response, body) {
      if (!err & res.statusCode == 200) {
        res.json(JSON.parse(body));
      } else {
        res.send(404);
      }
    });
  }
}