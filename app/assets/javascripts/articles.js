$(document).on('ajax:success', '.edit_article', function(e, res) {
  console.log('res: ',res)
  $('#article-name').text(res.updated_name)
  $('#article-description').text(res.updated_description)
  $('#article-form-holder').addClass('hidden')
})

$(function(){
  $('#article-edit-btn').click(function(){
    $('#article-form-holder').toggleClass('hidden')
  })
})
