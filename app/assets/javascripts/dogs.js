function resetDogForm () {
  $("form.new_dog")[0].reset(); //resets form fields
  $('#dog-form-modal h2').text("Create New Dog!");
  $('#submit-dog-btn').attr('value', 'Create Dog');
  $('form.new_dog').attr('action', '/dogs');
  $('form.new_dog').attr('method', 'post');
  $('form.new_dog input').first().attr('method', 'post');
}

$(document).on('hidden.bs.modal', '#dog-form-modal', function(e) {
  resetDogForm();
})
