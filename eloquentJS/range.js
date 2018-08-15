// Your code here.

function range(start, end){
  arr = [start]
  if(start > end){
    while(start > end){
      arr.push(start-1)
      start -= 1
    }
    return(arr)
  }
  else{
    while(start < end){
      arr.push(start+1)
      start += 1
    }
    return(arr)
  }
}

function sum(arr){
  total = 0
  for (n of arr){
    total += n
  }
  return(total)
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55