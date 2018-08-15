let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

console.log(arrays.reduce((curr, prev) => curr.concat(prev)))

// Your code here.
var loop = function(value, test, update, body){
  loopVal = value;
  while(loopVal){
    test(loopVal);
    body(loopVal);
    loopVal = update(loopVal);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function every(array, test) {
  // Your code here.
  for (arr of array){
  	if(test(arr)){
    }
    else{
      return(false)
    }
  }
  return(true)
}

function every(array, test) {
  // Your code here.
  return(array.every(test))
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true