var mongoose = require('mongoose');
var visitorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  photos: [{
    url: String
  }]
});

var visitorModel = mongoose.model("Visitor", visitorSchema);
module.exports = visitorModel