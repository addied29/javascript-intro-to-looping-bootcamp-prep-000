
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
  return Math.random(Math.floor(n)) <=0 ;
}
while (n === 0) {
  console.log('done')
  
}