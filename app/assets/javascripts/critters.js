$(document)
  .on('ready', function(){
    if (window.location.pathname == '/critters') {
      // GET request to load the table with all critters
      $.get('/critters.json', function(critters) {
        $.each(critters, function(i, critter) {
          addCritToList(critter);
        })
      })
    } // end if critters page
  })
  .on('hidden.bs.modal', '#crit-form-modal', function(){
    setFormToCreate();
  })
  .on('ajax:success', '#crit-form-modal form', function(e, crit) {
    $('#crit-form-modal').modal('hide');
    if (crit.errors) {
      $('#alert-msg').toggleClass('hidden').text('Error with the critter: ' + crit.errors);
    } else {
      addCritToList(crit);
    }
  })
  .on('click', '.edit-crit-link', function(){
    var critId = $(this).closest('tr').prop('id');
    $.get('/critters/'+critId+'.json', function(critter) { // GET request to get entire critter object
      setFormToEdit(critter);
    });
  })
  .on('click', '.delete-crit-link', function() {
    $(this).closest('tr').remove();
  }
) // end document events

function addCritToList(critter) {
  var row = critRow(critter)
  var existingCrit = $('#crit-table-body tr#'+critter.id); // check if the critter is already in the table
  if (existingCrit.length) {
    existingCrit.replaceWith(row); // replace the row with updated data
  } else {
    $('#crit-table-body').append(row);
  }
}

function critRow(critter) {
  // build the table row with object data
  critAttrs = ['name', 'description', 'show', 'edit', 'destroy']
  var critRow = '<tr id='+critter.id+'>'
  for (var i=0; i < critAttrs.length; i++) {
    critRow += '<td>'+critter[critAttrs[i]]+'</td>'
  }
  critRow += '</tr>'
  return critRow
}

function setFormToEdit(critter) {
  var form = $('#crit-form-modal form')
  form.trigger('reset'); //reset form fields
  $('.modal-header h2').text('Editing ' + critter.name);
  form.find('#critter_name').val(critter.name);
  form.find('#critter_description').val(critter.description);
  form.attr('action', critter.edit_url); // send to #edit instead of #create action
  form.attr('method', 'patch'); // change method to patch
  form.find('input').first().attr('method', 'patch'); // change method to patch
  $('#crit-form-submit-btn').attr('value', 'Update Critter'); // change to 'update' instead of 'create'
}

function setFormToCreate () {
  var form = $('#crit-form-modal form')
  form.trigger('reset'); //reset form fields
  $('.modal-header h2').text('Create New Critter!');
  form.attr('value', 'Create Critter');
  form.attr('action', '/critters.json');
  form.attr('method', 'post');
  form.find('input').first().attr('method', 'post');
  $('#crit-form-submit-btn').attr('value', 'Create Critter'); // change to 'update' instead of 'create'
}

