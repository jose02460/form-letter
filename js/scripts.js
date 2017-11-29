$(document).ready(function() {
  $("#userNameEntry").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
