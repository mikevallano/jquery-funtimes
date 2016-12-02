$(document).ready(function () {
  if (window.location.pathname == '/critters') {
    $.get('/critters.json', function(critters) {
      $.each(critters, function(i, critter) {
        addCritToList(critter);
      });
    });
  }

  $(document).on('ajax:success', '#crit-form-modal form', function(e, crit) { //the second argument defines which element triggered the ajax:success. differentiates between form submission and delete or other ajax call.
      if (crit.errors) {
        toggleCritForm();
        $('#alert-msg').toggleClass('hidden').text("Error with the critter: " + crit.errors);
      } else {
        addCritToList(crit);
        toggleCritForm();
        resetForm();
      }
  });

  function addCritToList(critter) {
    var existingCrit = $('#crit-table-body tr#'+critter.id);
    var critToAdd = "<tr id="+critter.id+"><td>"+critter.name+"</td>"+
      "<td>"+critter.description+"</td>"+
      "<td>"+critter.show+"</td>"+
      "<td>"+critter.edit+"</td>"+
      "<td>"+critter.destroy+"</td>"+
      '</tr>';
    if (existingCrit.length) { // if editing an existing crit, replace the tr
      existingCrit.replaceWith(critToAdd);
    } else {
      $('#crit-table-body').append(critToAdd);
    }
  } //end addCritToList

  $(document).on('click', '.edit-crit-link', function() { // syntax for adding event listeners on items added to the dom
    var tr = $(this).closest('tr');
    var critId = tr.prop("id");
    $.get('/critters/'+critId+'.json', function(critter) { // GET request to get entire critter object
      editCritForm(critter, tr);
    });
  });

  function editCritForm(critter, tr) {
    toggleCritForm();
    $('.modal-header h2').text('Editing ' + critter.name);
    $('#crit-form-modal form #critter_name').val(critter.name);
    $('#crit-form-modal form #critter_description').val(critter.description);
    $('#crit-form-modal form').attr('action', critter.edit_url); // send to #edit instead of #create action
    $('#crit-form-modal form').attr('method', 'patch'); // change method to patch
    $('#crit-form-modal form input').first().attr('method', 'put'); // change method to put
    $('#crit-form-submit-btn').attr('value', 'Update Critter'); // change to "update" instead of 'create'
  }

  $(document).on('click', '.delete-crit-link', function() {
    var tr = $(this).closest('tr');
    tr.remove();
  });

  function resetForm () {
    $("#crit-form-modal form")[0].reset(); //resets form fields
    $('.modal-header h2').text("Create New Critter!");
    $('#crit-form-submit-btn').attr('value', 'Create Critter');
    $('#crit-form-modal form').attr('action', '/critters.json');
    $('#crit-form-modal form').attr('method', 'post');
    $('#crit-form-modal form input').first().attr('method', 'post');
  }

  function toggleCritForm() {
    $('#crit-form-modal').modal('toggle');
  }

  $(document).on('click', '.new-crit-btn', function() {
    toggleCritForm()
    resetForm();
  });

  $("#crit-form-modal").on('hidden.bs.modal', function () {
    resetForm();
  })

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

