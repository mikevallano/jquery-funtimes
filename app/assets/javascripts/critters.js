$(document).ready(function () {
  if (window.location.pathname == '/critters') {
    // GET request to load the table with all critters
    $.get('/critters.json', function(critters) {
      $.each(critters, function(i, critter) {
        addCritToList(critter);
      });
    });
    $("#crit-form-modal").on('hidden.bs.modal', function () {
      setFormToCreate();
    })
  } // end if critters page
}); // end document ready

$(document) // event listeners
  //the second argument to on success defines which element triggered the ajax:success. differentiates between form submissions
  .on('ajax:success', '#crit-form-modal form', function(e, crit) {
    $('#crit-form-modal').modal('hide');
    if (crit.errors) {
      $('#alert-msg').toggleClass('hidden').text("Error with the critter: " + crit.errors);
    } else {
      addCritToList(crit);
      setFormToCreate();
    }
  })
  .on('click', '.edit-crit-link', function(){
    var critId = $(this).closest('tr').prop("id");
    $.get('/critters/'+critId+'.json', function(critter) { // GET request to get entire critter object
      setFormToEdit(critter);
    });
  })
  .on('click', '.delete-crit-link', function() {
    $(this).closest('tr').remove();
  })

function addCritToList(critter) {
  var critToAdd = "<tr id="+critter.id+">"+
    "<td>"+critter.name+"</td>"+
    "<td>"+critter.description+"</td>"+
    "<td>"+critter.show+"</td>"+
    "<td>"+critter.edit+"</td>"+
    "<td>"+critter.destroy+"</td>"+
    '</tr>';
  var existingCrit = $('#crit-table-body tr#'+critter.id); // check if the critter is already in the table
  if (existingCrit.length) { // if editing an existing crit, replace the tr
    existingCrit.replaceWith(critToAdd);
  } else {
    $('#crit-table-body').append(critToAdd);
  }
} //end addCritToList

function setFormToEdit(critter) {
  var form = $('#crit-form-modal form')
  $('.modal-header h2').text('Editing ' + critter.name);
  form.find('#critter_name').val(critter.name);
  form.find('#critter_description').val(critter.description);
  form.attr('action', critter.edit_url); // send to #edit instead of #create action
  form.attr('method', 'patch'); // change method to patch
  form.find('input').first().attr('method', 'put'); // change method to put
  $('#crit-form-submit-btn').attr('value', 'Update Critter'); // change to "update" instead of 'create'
}

function setFormToCreate () {
  var form = $('#crit-form-modal form')
  form.trigger('reset'); //reset form fields
  $('.modal-header h2').text("Create New Critter!");
  form.attr('value', 'Create Critter');
  form.attr('action', '/critters.json');
  form.attr('method', 'post');
  form.find('input').first().attr('method', 'post');
  $('#crit-form-submit-btn').attr('value', 'Create Critter'); // change to "update" instead of 'create'
}

