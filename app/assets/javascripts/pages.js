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

  $('.rando').click(function(e){
    $('img.rando').removeClass('hidden');
    h = randomInt(200, 500);
    w = randomInt(200, 500);
    $('img.rando').attr("src", "https://placekitten.com/"+w+'/'+h);
    e.preventDefault();
  })

  function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  $(".filter-form-container input[type='date']").change(function() {
    $(this).parent().find("input[type='radio']").prop("checked", true);
  })
  $(".filter-form-container label").click(function () {
    $(this).parent().find("input[type='radio']").prop("checked", true);
  })

  $('#gimmie-crits-btn').click(function(e) {
    $(this).addClass('hidden');
    $('#crit-header').removeClass('hidden');
    $.ajax({type: 'GET', url: '/critters.json',
      success: function(critters) {
        $.each(critters, function(i, critter) {
          AddCritToList(critter);
        }) //end each
      } //end success
    }) //end ajax call
  }); // end click

  function AddCritToList(critter){
    $('#gimmie_crit_list').append("<li>"+critter.name+"</li>");
  }

  $('.selectpicker').selectpicker();

}); // end document ready


