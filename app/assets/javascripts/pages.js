$(document).ready(function(){
  $("#show-ipsum-p-btn").click(function(event) {
    event.preventDefault();
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

  $('.list-uno li').click(function() {
    $(this).addClass('featured');
    $('.list-uno li').not(this).removeClass('featured');
    $(this).next().addClass('nexter');
    $('.list-uno li').not(this).next().removeClass('nexter');
    $(this).prev().addClass('prever');
    $('.list-uno li').not(this).prev().removeClass('prever');
  });

  $('.list-dos li').eq(1).addClass('featured');
  $(".list-dos li:nth-child(2)").addClass('featured');

  $('#inputter').on('change', function() {
      var form_val;
      form_val = $('#inputter').val();
      $('h3').text(form_val);
  });

}); // end document ready


