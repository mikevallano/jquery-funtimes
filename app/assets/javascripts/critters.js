var ready;
ready = function () {
  $.ajax({
    type: 'GET',
    url: '/critters.json',
    success: function(critters) {
      $.each(critters, function(i, critter) {
        $('#crit-list').append(
          '<li>name: ' +
          critter.name +
          ', description: ' +
          critter.description +
          ', collar: ' +
          critter.collar +
          ' ' + critter.edit +
          ' ' + critter.destroy +
          '</li>');
      });
    }
  });
}
// <a id="sign_up_nav_link" href="/users/sign_up">Sign Up</a>
$(document).ready(ready);
$(document).on('page:load', ready);
