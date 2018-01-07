// var wheremi = 'root'
// var butt
// console.log('wheremi root: ', wheremi)

// document.addEventListener("DOMContentLoaded", function(event) {
//   //  equivalent to jquery on ready, with some caveats in cross-browser compatability
//   //  see https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
//   butt = document.getElementById("scopes-btn")
//   console.log('butt inside domload: ',butt)
//   loadLogger()

//   butt.addEventListener('click', () => {
//     console.log('button was clicked')
//   })

//   wheremi = 'domload'
//   console.log('wheremi inside dom load: ', wheremi)

// });

// console.log('butt outside of function',butt)
// console.log('wheremi rootbelow:',wheremi)

// function loadLogger() {
//   console.log('butt inside loadlogger: ', butt)
//   wheremi = 'loadlogger'
//   console.log('window wheremi: ', window.wheremi)
//   console.log('wheremi inside load logger:  ',wheremi)
// }
