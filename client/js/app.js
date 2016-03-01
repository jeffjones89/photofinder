$(document).ready(function() {
  //submit event firing to server
  $('#emailForm').submit( function(event) {
    event.preventDefault()
    var email = $('[name = email]').val()
    //ajax call to return Full Contact API data
    $.ajax({
      method: "POST",
      url: "/api/fullcontact/visitors",
      data: {
        email: email
      }
    }).done(function(response) {
      console.log(response);
    });
  });
  //display new employee form
  $('[name = addEmployee]').on('click', function(){
    $('.newEmployee').toggle({duration: 500});
  });

  $('#newBCE').submit(function(event){
    //capture user inputs for req.body
    event.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val()
    var photoUrl = $('#photos').val()
    //ajax call to employee server
    $.ajax({
      method: "POST",
      url: "/api/employees",
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        photos: [{
          url: photoUrl
        }]
      }
    }).done(function(response){
      console.log(response);
    })
  })

});
