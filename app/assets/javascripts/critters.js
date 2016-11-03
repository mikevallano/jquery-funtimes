$(document)
.ready(function () {
  $.get('/critters.json', function(critters) {
    $.each(critters, function(i, critter) {
      addCritToList(critter);
    });
  });

  $(document).on('ajax:success', '#crit-form-holder form', function(e, crit) {
      if (crit.errors) {
        alert(crit.errors)
          // $(this).find('.text-danger').show().html('<strong>Please fix the following errors: </strong><br/>' + res.errors.join('<br/>'))
      } else {
        // function(last_crit) {
          addCritToList(crit);
          toggleCritForm();
          // this clears out the form fields after successful submission
          $("#crit-form-holder form")[0].reset();
      // }
      }
  });


  // $("#crit-form-holder form").submit(function(e) {
  //   // both of these lines are needed to prevent double form submitting
  //   e.preventDefault();
  //   e.stopImmediatePropagation();

  //   var new_critter = {
  //     name: $('#critter_name').val(),
  //     description: $('#critter_description').val(),
  //   };

    // $.ajax({
    //   type: 'POST',
    //   url: '/critters.json',
    //   data: JSON.stringify(new_critter),
    //   // the following two lines were needed to prevent Rails errors
    //   contentType: "application/json; charset=utf-8",
    //   dataType: "json",
    //   success: function(last_crit) {
    //     addCritToList(last_crit);
    //     toggleCritForm();
    //     // this clears out the form fields after successful submission
    //     $("#crit-form-holder form")[0].reset();
    //     // $('#critter_name').val('');
    //     // $('#critter_description').val('');
    //   } //success
    // }); //ajax

  // }); //end form submit function

  function addCritToList(critter) {
    $('#crit-list').append(
      "<li id="+critter.id+">" + "name: " +
      critter.name +
      ', description: ' +
      critter.description +
      ', collar: ' +
      critter.collar +
      ' ' + critter.show +
      ' ' + critter.edit +
      ' ' + critter.destroy +
      '</li>');
  } //end addCritToList

  $('.new-crit-btn').click(function() {
    toggleCritForm();
  })

  function toggleCritForm() {
    $('#crit-form-holder').toggleClass('hidden');
    $('.new-crit-btn').toggleClass('hidden');
  }

  function editCritForm(critter) {
    toggleCritForm();
    $('#crit-form-holder form #critter_name').val(critter.name);
    $('#crit-form-holder form #critter_description').val(critter.description);
  }

// syntax for adding event listeners on items added to the dom
  $(document).on('click', '.edit-crit-link', function() {
    var critId = $(this).parent().prop("id");
    $.get('/critters/'+critId+'.json', function(critter) {
      editCritForm(critter);
    });
  });

  $(document).on('click', '.delete-crit-link', function() {
    var li = $(this).parent();
    li.hide();
  });

}); // end document ready


  // Alternate Syntax for ajax request:
  // $.ajax({
  //   type: 'GET',
  //   url: '/critters.json',
  //   success: function(critters) {
  //     $.each(critters, function(i, critter) {
// <a id="sign_up_nav_link" href="/users/sign_up">Sign Up</a>

