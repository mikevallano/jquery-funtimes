// When you create something in the root scope, it is part of the window object

  if (window.location.href.indexOf('context') > -1) {
    console.log('this root:',this)

    console.log('this === window?', this === window)

    function taco() {
      console.log('this from inside taco: ', this)
      console.log('this === window?', this === window)
    }


    console.log('taco === window.taco?',taco() === window.taco())
  }


  $(function(){
    $('#context-clicker').click(function(){
      _this = $(this)
      $('#context-div').slideToggle(300, function(){
        _this.toggleClass('btn-success')
      })
    })
  })
