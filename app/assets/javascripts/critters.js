$(document)
.ready(function () {
  $.get('/critters.json', function(critters) {
    $.each(critters, function(i, critter) {
      addCritToList(critter);
    });
  });

  $(document).on('ajax:success', '#crit-form-modal form', function(e, crit) {
      if (crit.errors) {
        toggleCritForm();
        $('#alert-msg').toggleClass('hidden').text("Error with the critter: " + crit.errors);
          // $(this).find('.text-danger').show().html('<strong>Please fix the following errors: </strong><br/>' + res.errors.join('<br/>'))
      } else {
        // function(last_crit) {
          addCritToList(crit);
          toggleCritForm();
          // this clears out the form fields after successful submission
          $("#crit-form-modal form")[0].reset();
      // }
      }
  });


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
    toggleCritForm();
  })

  function toggleCritForm() {
    $('#crit-form-modal').modal('toggle');
  }

  function editCritForm(critter, tr) {
    toggleCritForm();
    $('#crit-form-modal form #critter_name').val(critter.name);
    $('#crit-form-modal form #critter_description').val(critter.description);
    $('#crit-form-modal form').attr('action', critter.edit_url);
    $('#crit-form-modal form').attr('method', 'patch');
    $('#crit-form-modal form input').first().attr('method', 'put');
    $('#crit-form-modal form input[type=submit]').attr('value', 'Update this Critter');
    $("#crit-form-modal form").submit(function(e) {
      tr.hide();
    })
  }

// syntax for adding event listeners on items added to the dom
  $(document).on('click', '.edit-crit-link', function() {
    var tr = $(this).closest('tr');
    var critId = tr.prop("id");
    $.get('/critters/'+critId+'.json', function(critter) {
      editCritForm(critter, tr);
    });
  });

  $(document).on('click', '.delete-crit-link', function() {
    var tr = $(this).closest('tr');
    tr.hide();
  });

}); // end document ready


  // Alternate Syntax for ajax request:
  // $.ajax({
  //   type: 'GET',
  //   url: '/critters.json',
  //   success: function(critters) {
  //     $.each(critters, function(i, critter) {
// <a id="sign_up_nav_link" href="/users/sign_up">Sign Up</a>

