function resetDogForm () {
  $("form.new_dog")[0].reset(); //resets form fields
  $('#submit-dog-btn').attr('value', 'Create Dog');
  $('form.new_dog').attr('action', '/dogs');
  $('form.new_dog').attr('method', 'post');
  $('form.new_dog input').first().attr('method', 'post');
}
