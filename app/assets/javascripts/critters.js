var ready; // ready function is a workaround for turbolinks
ready = function () {
  $.get('/critters.json', function(critters) {
    $.each(critters, function(i, critter) {
      addCritToList(critter);
    });
  });

  $("#crit-form-holder form").submit(function(e) {
    // both of these lines are needed to prevent double form submitting
    e.preventDefault();
    e.stopImmediatePropagation();

    var new_critter = {
      name: $('#critter_name').val(),
      description: $('#critter_description').val(),
    };

    $.ajax({
      type: 'POST',
      url: '/critters.json',
      data: JSON.stringify(new_critter),
      // the following two lines were needed to prevent Rails errors
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(last_crit) {
        addCritToList(last_crit);
        toggleCritForm();
        // this clears out the form fields after successful submission
        $("#crit-form-holder form")[0].reset();
        // $('#critter_name').val('');
        // $('#critter_description').val('');
      } //success
    }); //ajax

  }); //end form submit function

  function addCritToList(critter) {
    $('#crit-list').append(
      '<li>name: ' +
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
    $('#crit-form-holder form #critter_name').val('critter.name');
    $('#crit-form-holder form #critter_description').val('critter.description');
  }

} // end ready function


  // Alternate Syntax for ajax request:
  // $.ajax({
  //   type: 'GET',
  //   url: '/critters.json',
  //   success: function(critters) {
  //     $.each(critters, function(i, critter) {
// <a id="sign_up_nav_link" href="/users/sign_up">Sign Up</a>
$(document).ready(ready);
$(document).on('page:load', ready);

