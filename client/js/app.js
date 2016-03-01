$(document).ready(function() {
  //submit event firing to server
  $('[name = submit]').on('click', function() {
    var email = $('[name = email]').val()
    $.ajax({
      method: "POST",
      url: "/api/fullcontact/visitors",
      data: {
        email: email
      }
    }).done(function(response) {
      console.log(response);
    });
  })
});
