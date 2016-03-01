var Employee = require('../db/schema');

exports.postVisitors = function(req, res) {
  var employee = new Employee();
  employee.firstName = req.body.firstName;
  employee.lastName = req.body.lastName;
  employee.email = req.body.email;
  employee.photos = req.body.photos
  employee.save(function(err) {
    if (err)
      res.send(err)
    res.json({
      message: 'Employee added!',
      data: employee
    })
  })
}