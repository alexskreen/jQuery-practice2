$(document).ready(function() {
  $(".button").click(function() {
    $("#hidden").toggle()
    $("#hiddentext").fadeToggle();
  });
});