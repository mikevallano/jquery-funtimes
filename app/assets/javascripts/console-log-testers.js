$(function(){
  var kits = [  {name: 'zorro', age: 4},
                {name: 'loki', age: 1},
                {name: 'thorbie', age: 1},
                {name: 'ciro', age: 2} ]

  $.each(kits, function(i){
    var kit = kits[i]
    console.time('kit array start')
    console.groupCollapsed(`kit info ${i}`)
    console.log(`kit name: ${kit.name}`)
    console.log(`kit age: ${kit.age}`)
    console.groupEnd('kit info')
    console.timeEnd('kit array time')
  })

  console.log('table kits')
  console.table(kits)
})
