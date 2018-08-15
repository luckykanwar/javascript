// Your code here.
function min(x, y){
  if(x > y){
    return(y)
  }
  else{
    return(x)
  }
}

console.log(min(11, 10));
// → 0
console.log(min(-11, -10));
// → -10

// Your code here.
function isEven(x){
  if (x === 0){
    return(true)
  }
  else if (x === 1){
    return(false)
  }
  else{
    return isEven(x-2)
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


// Your code here.
let countBs = function(x){
  if(x.length > 0){
    countB = 0
    for(i=0; i<x.length; i++){
      if(x[i] === 'B'){
        countB += 1
      }
    }
  }
  return(countB)
};

let countChar = function(x, y){
  if(x.length > 0){
    count = 0
    for(i=0; i<x.length; i++){
      if(x[i] === y){
        count += 1
      }
    }
  }
  return(count)
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4