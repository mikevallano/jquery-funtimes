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
  $('#show-hide-mountain-btn').click(function(event){
    event.preventDefault();
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


  function makefeatured() {
    $(this).addClass('featured');
    $('.list-dos li').not(this).removeClass('featured');
  }

  $('.list-dos li').click(makefeatured);

  $('#inputter').on('input', function() {
      var form_val;
      form_val = $('#inputter').val();
      $('#mountain-cover').text(form_val);
  });

  function beeLeft() {
    $(".mover").animate({left: "-=200"}, 2000);
  }
  function beeRight() {
    $(".mover").animate({left: "+=200"}, 2000);
  }

  // beeRight();

  var stop_start_click_count = 0
  $('#kit_mover').click(function() {
    stop_start_click_count ++;
    if($('.mover').is(':animated')) {
      $('.mover').stop();
    }
    console.log('click_count: ' + stop_start_click_count);
  if (stop_start_click_count % 2 === 0) {
      beeLeft()
    } else {
      beeRight()
    }
  })

  // $('p').click(function() {
  //   $(this).closest('ul').children().removeClass('featured');
  // })

}); // end document ready


