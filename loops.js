
function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 1) {
    array.push('I am 1 strange loop.');
  }
  
  else {
    array.push(`I am ${i} strange loops.`)
  }
}
return array;
}

function whileLoop(n){
  return Math.floor(Math.random(n) >=0) ;
}
while (n === 1) {
  console.log('done')
  
}