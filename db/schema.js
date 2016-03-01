var mongoose = require('mongoose');
var visitorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  photos: [{
    url: String,
    _id: false
  }]
});

var visitorModel = mongoose.model("Visitor", visitorSchema);
module.exports = visitorModel