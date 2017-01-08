$(document).ready(function(){
  var ogText = $('#inner-span10-btn').text();
  $('#inner-span10-btn').hover(
    function(){
    $(this).text("I'm hovering");
  }, function(){
    $(this).text(ogText);
  });
});

