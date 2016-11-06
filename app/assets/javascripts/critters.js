$(document)
.ready(function () {
  $.get('/critters.json', function(critters) {
    $.each(critters, function(i, critter) {
      addCritToList(critter);
    });
  });

  $(document).on('ajax:success', '#crit-form-modal form', function(e, crit) { //the second argument defines which element triggered the ajax:success. differentiates between form submission and delete or other ajax call.
      if (crit.errors) {
        toggleCritForm();
        $('#alert-msg').toggleClass('hidden').text("Error with the critter: " + crit.errors);
      } else {
        addCritToList(crit);
        toggleCritForm();
        $("#crit-form-modal form")[0].reset(); // this clears out the form fields after successful submission
      }
  });

  function addCritToList(critter) {
    $('#crit-table-body').append(
      "<tr id="+critter.id+"><td>"+critter.name+"</td>"+
      "<td>"+critter.description+"</td>"+
      "<td>"+critter.collar+"</td>"+
      "<td>"+critter.show+"</td>"+
      "<td>"+critter.edit+"</td>"+
      "<td>"+critter.destroy+"</td>"+
      '</tr>');
  } //end addCritToList

  $('.new-crit-btn').click(function() {
    toggleCritForm(); //show/hide form
  })

  $(document).on('click', '.edit-crit-link', function() { // syntax for adding event listeners on items added to the dom
    var tr = $(this).closest('tr');
    var critId = tr.prop("id");
    $.get('/critters/'+critId+'.json', function(critter) { // GET request to get entire critter object
      editCritForm(critter, tr);
    });
  });

  function editCritForm(critter, tr) {
    toggleCritForm();
    $('#crit-form-modal form #critter_name').val(critter.name);
    $('#crit-form-modal form #critter_description').val(critter.description);
    $('#crit-form-modal form').attr('action', critter.edit_url); // send to #edit instead of #create action
    $('#crit-form-modal form').attr('method', 'patch'); // change method to patch
    $('#crit-form-modal form input').first().attr('method', 'put'); // change method to put
    $('#crit-form-modal form input[type=submit]').attr('value', 'Update this Critter'); // change to "update" instead of 'create'
    $("#crit-form-modal form").submit(function(e) {
      tr.hide(); // after successful ajax call, the object will be appended to the table. hiding the former tr eliminates duplicates
    })
  }

  $(document).on('click', '.delete-crit-link', function() {
    var tr = $(this).closest('tr');
    tr.hide();
  });

  function toggleCritForm() {
    $('#crit-form-modal').modal('toggle');
  }

}); // end document ready


// AJAX code when not using built-in rails functionality
// $("#crit-form-modal form").submit(function(e) {
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
  //     $("#crit-form-modal form")[0].reset();
  //     // $('#critter_name').val('');
  //     // $('#critter_description').val('');
  //   } //success
  // }); //ajax

// }); //end form submit function

  // Alternate Syntax for ajax request:
  // $.ajax({
  //   type: 'GET',
  //   url: '/critters.json',
  //   success: function(critters) {
  //     $.each(critters, function(i, critter) {
// <a id="sign_up_nav_link" href="/users/sign_up">Sign Up</a>

