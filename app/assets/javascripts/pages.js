$(document).ready(function(){
  $("#show-ipsum-p-btn").click(function() {
    $("#acekitty").toggleClass('hidden');
    if ($("#acekitty").hasClass('hidden')) {
      $("#show-ipsum-p-btn").text('Show Heem');
    } else {
      $("#show-ipsum-p-btn").text('Hide Heem');
    }
  });

  var mountain_click_count = 0
  $('#show-hide-mountain-btn').click(function(){
    mountain_click_count ++;
    console.log(mountain_click_count);
    $('#mountain-img').toggleClass('hidden');
    if ($('#mountain-img').hasClass('hidden')) {
      $('#show-hide-mountain-btn').text("Then there is no mountain");
    } else {
      $('#show-hide-mountain-btn').text("Then there is");
    }
    if (mountain_click_count >= 2) {
      $('#show-hide-mountain-btn').attr('disabled', 'disabled');
      setTimeout(function(){
        location.reload();
      }, 5000);
    }
  });
});


