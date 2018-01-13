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
        $('#crit-form-modal').modal('toggle');
        $('#alert-msg').toggleClass('hidden').text("Error with the critter: " + crit.errors);
      } else {
        addCritToList(crit);
        $('#crit-form-modal').modal('toggle');
        setFormToCreate();
      }
  });

  $(document).on('click', '.edit-crit-link', function(){
    $('#crit-form-modal').addClass('edit-form')
    var tr = $(this).closest('tr');
    var critId = tr.prop("id");
    $.get('/critters/'+critId+'.json', function(critter) { // GET request to get entire critter object
      setFormToEdit(critter, tr);
    });
  })

  $(document).on('click', '.delete-crit-link', function() {
    var tr = $(this).closest('tr');
    tr.remove();
  });

  $("#crit-form-modal").on('hidden.bs.modal', function () {
    setFormToCreate();
  })

}); // end document ready

function setFormToEdit(critter, tr) {
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

