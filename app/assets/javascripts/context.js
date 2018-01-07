// When you create something in the root scope, it is part of the window object

console.log('this root:',this)

console.log('this === window?', this === window)

function taco() {
  console.log('this from inside taco: ', this)
  console.log('this === window?', this === window)
}


console.log('taco === window.taco?',taco() === window.taco())
